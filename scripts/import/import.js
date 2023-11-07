// THIS SCRIPT IMPORTS DATA IN THE import FOLDER INTO THIS LIBRARY
// I made a script elsewhere that extracts what I need out of the GenshinData repo
// REQUIRES NODE v13+

const fs = require('fs');
const language = require(`../../src/language.js`);
//const genshindb = require('../src/main.js');


if(!fs.existsSync('./import/EN')) {
	console.log('import folder doesn\'t exist');
	process.exit();
}

// for importing images
let myimages = {};

// FOR DATA ONLY
function getDbData(path) {
	try {
		return require(`../../src/data/${path}`);
	} catch(e) {
		return {};
	}
}

function clearObject(obj) {
	for (let key in obj)
		if (obj.hasOwnProperty(key)) delete obj[key];
}

function normalizeStr(str) { return str.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); }
function makeFileName(str) { return normalizeStr(str).toLowerCase().replace(/[^a-z]/g,''); }

const bodyToGender = {
	'BOY': 'MALE',
	'LOLI': 'FEMALE',
	'GIRL': 'FEMALE',
	'MALE': 'MALE',
	'LADY': 'FEMALE'
}

const genderTranslations = {
	'MALE': {
		ChineseSimplified: '男', ChineseTraditional: '男', German: 'Männlich', English: 'Male', Spanish: 'Masculino',
		French: 'Homme', Indonesian: 'Pria', Italian: 'maschio', Japanese: '男', Korean: '남성', Portuguese: 'Masculino',
		Russian: 'Мужской', Thai: 'ชาย', Turkish: 'erkek', Vietnamese: 'nam'
	},
	'FEMALE': {
		ChineseSimplified: '女', ChineseTraditional: '女', German: 'Weiblich', English: 'Female', Spanish: 'Femenino',
		French: 'Femme', Indonesian: 'Perempuan', Italian: 'femmina', Japanese: '女', Korean: '여성', Portuguese: 'Feminino',
		Russian: 'Женский', Thai: 'ผู้หญิง', Turkish: 'kadın', Vietnamese: 'nữ'
	}
}

let checkExistingImageBlacklist;

/* ============================================ FUNCTIONS =================================================== */

async function checkLinkExists(url) {
	const https = require('https');
	const options = { method: 'HEAD' }
	return new Promise(resolve => {
		https.get(url, options, function (res) {
			if (res.statusCode === 200) resolve(true);
			else if (res.statusCode === 301) resolve(true);
			else if (res.statusCode === 404) resolve(false);
			else console.log('checkLinkExists unknown statusCode: '+res.statusCode);
			resolve(false);
		});
	});
}

let imageblacklist = require('./configs/imagenotfound.json');
// returns if the image exists or not
async function isImageBlacklistAndExist(imageurl, savechanges, dburl) {
	if (imageblacklist.includes(imageurl)) {
		if (checkExistingImageBlacklist && !dburl && await checkLinkExists(imageurl)) {
			if (savechanges) {
				imageblacklist = imageblacklist.filter(e => e !== imageurl);
				fs.writeFileSync(`./configs/imagenotfound.json`, JSON.stringify(imageblacklist, null, '\t'));
			}
			return true;

		} else {
			if (checkExistingImageBlacklist) {
				console.log(`Image doesn't exist: ${imageurl}`);
			}
			return false;
		}

	} else {
		return true;
	}
}

// checks every single mihoyo image urls in genshin-db
async function checkMihoyoImages(saveimageblacklist) {
	const imageblacklist = [];
	try {
		let charimages = {};
		charimages = require(`../../src/data/image/characters.json`);
		console.log('checking character images...');
		for (let [filename, imagedata] of Object.entries(charimages)) {
			if (imagedata.icon && !await checkLinkExists(imagedata.icon)) {
				imageblacklist.push(imagedata.icon);
				console.log(filename+'.icon image doesn\'t exist');
			}
			if (imagedata.sideicon && !await checkLinkExists(imagedata.sideicon)) {
				imageblacklist.push(imagedata.sideicon);
				console.log(filename+'.sideicon image doesn\'t exist');
			}
		}
		console.log('done checking character images');
	} catch(e) { console.log(e); }

	try {
		let weapimages = {};
		weapimages = require(`../../src/data/image/weapons.json`);
		console.log('checking weapon images...')
		for (let [filename, imagedata] of Object.entries(weapimages)) {
			if (imagedata.icon && !await checkLinkExists(imagedata.icon)) {
				imageblacklist.push(imagedata.icon);
				console.log(filename+'.icon image doesn\'t exist');
			}
			if (imagedata.awakenicon && !await checkLinkExists(imagedata.awakenicon)) {
				imageblacklist.push(imagedata.awakenicon);
				console.log(filename+'.awakenicon image doesn\'t exist');
			}
		}
		console.log('done checking weapon images');
	} catch(e) { console.log(e); }

	console.log('done checking if images exist')
	if (saveimageblacklist) {
		fs.writeFileSync(`./configs/imagenotfound.json`, JSON.stringify(imageblacklist, null, '\t'));
	}
}

async function stealWikiaVersion(folder) {
	const fs = require('fs');
	async function getWikiaVersion(name) {
		const https = require('https');
		return new Promise(resolve => {
			https.get(`https://genshin-impact.fandom.com/wiki/${name}`, function(res) {
				let data = '';
				res.on('data', function(chunk) { data += chunk; });
				res.on('end', function() {
					const regex = /<a href="\/wiki\/Version\/(.*?)"/gm;
					const found = regex.exec(data)
					if(found) resolve(found[1]);
					else resolve("");
				});
			}).on('error', function() {
				console.log('error');
			});
		});
	}

	function encodeHTML(str) { return str.replaceAll(' ', '_').replaceAll('&', '%26'); }

	const myversion = require(`../../src/data/version/${folder}`);
	const filenamelist = fs.readdirSync(`../../src/data/English/${folder}`);
	for(let filename of filenamelist) {
		const mydata = require(`../../src/data/English/${folder}/${filename}`);
		const tmp = await getWikiaVersion(encodeHTML(mydata.name));
		if(tmp) {
			myversion[filename.substring(0, filename.indexOf('.'))] = tmp;
		}
		console.log(mydata.name + ', ' + tmp);
	}

	fs.writeFileSync(`../../src/data/version/${folder}.json`, JSON.stringify(myversion, null, '\t'));
}

async function getCharList(region) {
	const https = require('https');
	return new Promise(resolve => {
		https.get(`https://genshin.hoyoverse.com/en/character/${region}?char=0`, function(res) {
			let data = '';
			res.on('data', function(chunk) { data += chunk;	});
			res.on('end', function() {
				const regex = /<div data-server-rendered="true".*?window.*?=(.*?)</gm;
				const found = regex.exec(data);
				const charList = eval(found[1]).data[0].charList;
				resolve(charList);
			});
		}).on('error', function() {
			console.log('error');
		});
	});
}
async function getUpperBodyImages() {
	const util = require('util');
	const regions = ['mondstadt', 'liyue', 'inazuma', 'sumeru', 'Fontaine'];
	let myimages = {};
	try { myimages = require(`../../src/data/image/characters.json`); } catch(e) {}

	for(const region of regions) {
		const charList = await getCharList(region);
		for(const char of charList) {
			const filename = makeFileName(char.title);
			if(myimages[filename] === undefined) myimages[filename] = {};
			myimages[filename].cover1 = char.cover1;
			myimages[filename].cover2 = char.cover2;
		}
	}
	fs.mkdirSync(`../../src/data/image`, { recursive: true });
	fs.writeFileSync(`../../src/data/image/characters.json`, JSON.stringify(myimages, null, '\t'));
}

// const https = require('https');
async function getRedirectedUrl(url) {
	const { https } = require('follow-redirects');
	return new Promise(resolve => {
		https.get(url, function (res) {
			let newurl = res.responseUrl; // res.headers.location;
			if(newurl === undefined) {
				console.log('no redirect found for: '+url);
				resolve(undefined);
			} else if(newurl.includes('Redirect')) {
				console.log('redirect failed for: '+url);
				resolve(undefined);
			} else {
				newurl = newurl.slice(0, newurl.indexOf('.png')+4);
				resolve(newurl);
			}
		}).on('error', function(e) {
			// console.log('error');
			// console.log(e);
		});
	});
}

function updateURLs() {
	//let folder = 'characters';
	updateFandomDirect('characters');
	updateFandomDirect('artifacts');
	updateFandomDirect('weapons');
	updateFandomDirect('foods');
	updateFandomDirect('materials');
	function updateFandomDirect(folder) {
		if(fs.existsSync(`../../src/data/English/${folder}`)) {
			let existing = {};
			try { existing = require(`../../src/data/url/${folder}.json`); } catch(e) {};
			fs.readdirSync(`../../src/data/English/${folder}`).forEach(filename => {
				if(!filename.endsWith('.json')) return;
				const mycharacter = require(`../../src/data/English/${folder}/${filename}`);
				filename = filename.substring(0, filename.indexOf('.'));
				if(existing[filename] === undefined) existing[filename] = {};
				existing[filename].fandom = `https://genshin-impact.fandom.com/wiki/${mycharacter.name.replace(/ /g, '_')}`;
			});
			fs.mkdirSync(`../../src/data/url`, { recursive: true });
			fs.writeFileSync(`../../src/data/url/${folder}.json`, JSON.stringify(existing, null, '\t'));
		} else {
			console.log(`updateURLs: ${folder} folder not found`);
		}
	}
}

function logNameChange(version, language, folder, dataid, filename, from, to) {
	if (version === undefined || version === '') return console.log('Cannot log namechange when version is not provided');

	fs.mkdirSync(`../../logs/import/namechange`, { recursive: true });
	let namechange = [];
	try {
		namechange = require(`../../logs/import/namechange/${version}`);
	} catch(e) {}

	const match = namechange.find(e => e.language === language && e.folder === folder && e.filename === filename);
	if (match) {
		match.dataid = dataid;
		match.from = from;
		match.to = to;
	} else {
		namechange.push({
			language: language,
			folder: folder,
			filename: filename,
			dataid: dataid,
			from: from,
			to: to
		});
	}

	namechange = namechange.sort((a, b) => a.language.localeCompare(b.language) | a.folder.localeCompare(b.folder) | a.filename.localeCompare(b.filename));
	fs.writeFileSync(`../../logs/import/namechange/${version}.json`, JSON.stringify(namechange, null, '\t'));
}

function logNewData(version, folder, dataid, filename) {
	if (version === undefined || version === '') return console.log('Cannot log newdata when version is not provided');

	fs.mkdirSync(`../../logs/import/newdata`, { recursive: true });
	let newdata = {};
	try {
		newdata = require(`../../logs/import/newdata/${version}`);
	} catch(e) {}

	if (newdata[folder] === undefined) newdata[folder] = [];

	const match = newdata[folder].find(e => dataid !== undefined && e.dataid === dataid || e.filename === filename);
	if (match) {
		match.dataid = dataid;
		match.filename = filename;
	} else {
		newdata[folder].push({
			dataid: dataid,
			filename: filename
		});
	}

	newdata[folder] = newdata[folder].sort((a, b) => ((a.dataid|0 - b.dataid|0) | a.filename.localeCompare(b.filename)));
	fs.writeFileSync(`../../logs/import/newdata/${version}.json`, JSON.stringify(newdata, null, '\t'));
}

function splitFromTo(str) {
	for (const splitter of ['=>', '->', '>', '|'])
		if (str.includes(splitter)) return str.split(splitter);
	for (const splitter of ['<=', '<-', '<'])
		if (str.includes(splitter)) return str.split(splitter).reverse();
	return [str, str];
}

function copyPropsIfExist(fromObj, toObj, props, setdefault) {
	for(let prop of props) {
		let isRequired = false;
		if (prop[0] === '!') {
			prop = slice(1);
			isRequired = true;
		}
		let [fromProp, toProp] = splitFromTo(prop);
		if(fromObj && fromObj[fromProp] !== undefined) {
			toObj[toProp] = fromObj[fromProp];
		} else {
			toObj[toProp] = setdefault;
			if (isRequired) console.log(`MISSING REQUIRED PROPERTY !${prop}`)
		}
	}
}

async function copyImagesProps(importdata, importconfig, dbimages) {
	importdata.images = {};
	copyPropsIfExist(importdata, importdata.images, importconfig.images);

	// check if images exist
	for (let prop of ['icon', 'awakenicon', 'sideicon']) {
		if (importdata.images[prop]) {
			const existingUrl = dbimages ? dbimages[prop] : undefined;
			if (!await isImageBlacklistAndExist(importdata.images[prop], true, existingUrl)) {
				delete importdata.images[prop];
			}
		}
	}
}

async function collateCharacter(existing, newdata, lang, importconfig, skipimageredirect, dbimages) {
	if (lang === 'English') {
		newdata.images = {};
		if(newdata.icon) {
			let name = newdata.icon.slice(newdata.icon.lastIndexOf('_')+1);
			newdata.images.nameicon = newdata.icon;
			newdata.images.nameiconcard = `UI_AvatarIcon_${name}_Card`;
			if(newdata.birthday) { // not player
				newdata.images.namegachasplash = `UI_Gacha_AvatarImg_${name}`;
				newdata.images.namegachaslice = `UI_Gacha_AvatarIcon_${name}`;
			}
			let mihoyoUrl = `https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/${newdata.icon}.png`;
			if (await isImageBlacklistAndExist(mihoyoUrl, true, dbimages ? dbimages.icon : undefined)) {
				newdata.images.icon = mihoyoUrl;
			}
		}
		if(newdata.sideicon) {
			newdata.images.namesideicon = newdata.sideicon;
			let mihoyoUrl = `https://upload-os-bbs.mihoyo.com/game_record/genshin/character_side_icon/${newdata.sideicon}.png`;
			if (await isImageBlacklistAndExist(mihoyoUrl, true, dbimages ? dbimages.sideicon : undefined)) {
				newdata.images.sideicon = mihoyoUrl;
			}
		}
	}

	//newdata.talentmaterialtype = existing.talentmaterialtype;
	newdata.url = existing.url;
	clearObject(existing);

	existing.name = newdata.name;
	existing.fullname = newdata.fullname;
	existing.title = newdata.title;
	existing.description = newdata.description;
	existing.rarity = newdata.rarity;
	existing.element = newdata.element;
	existing.weapontype = newdata.weapontype;
	existing.substat = newdata.substat;
	existing.gender = genderTranslations[bodyToGender[newdata.body]][lang];
	if(existing.gender === undefined) console.log('NO GENDER FROM BODY TYPE ' + newdata.body);
	else if(existing.gender === 'MALE') existing
	existing.body = newdata.body;
	existing.association = newdata.association;
	existing.region = newdata.region;
	if(existing.region === undefined) console.log('NO REGION FROM ASSOCIATION ' + newdata.association);
	existing.affiliation = newdata.affiliation;

	if(newdata.birthday) {
		existing.birthdaymmdd = newdata.birthmonth + '/' + newdata.birthday;
		let birthday = new Date(Date.UTC(2000, newdata.birthmonth-1, newdata.birthday));
		existing.birthday = birthday.toLocaleString(language.localeMap[lang], { timeZone: 'UTC', month: 'long', day: 'numeric' });
	} else {
		existing.birthdaymmdd = '';
		existing.birthday = '';
	}
	existing.constellation = newdata.constellation;
	if(myimages.characters === undefined) {
		myimages.characters
	}
	existing.cv = newdata.cv;
	existing.costs = newdata.costs;
	// existing.talentmaterialtype = newdata.talentmaterialtype || '';
	existing.url = newdata.url;
}

function collateOutfit(existing, newdata, lang) {
	clearObject(existing);
	copyPropsIfExist(newdata, existing, ['name', 'description', 'isdefault', 'character', 'source']);
	if(lang === 'English') {
		newdata.images = {};
		copyPropsIfExist(newdata, newdata.images, ['namecard', 'nameicon', 'namesplash', 'namesideicon']);
		if(!newdata.url) newdata.url = {};
		if(!newdata.url.modelviewer) newdata.url.modelviewer = '';
	}
}

function collateConstellation(existing, newdata, lang) {
	clearObject(existing);
	existing.name = newdata.name;
	if(newdata.aliases) existing.aliases = newdata.aliases;
	for(let i = 1; i <= 6; i++) {
		if(existing['c'+i] === undefined) existing['c'+i] = {};
		existing['c'+i].name = newdata['c'+i].name;
		existing['c'+i].effect = newdata['c'+i].effect;
	}
	if(lang === 'English') {
		let rx = /_([^_]*)_[^_]*\.png$/;
		let extract = rx.exec(newdata.images.c1)[1];
		if(!extract.startsWith('Player')) {
			newdata.images.constellation = `Eff_UI_Talent_${extract}`;
		} else {
			let element = /Player(.*)/.exec(extract)[1];
			newdata.images.constellation = `Eff_UI_Talent_PlayerBoy_${element}`;
			newdata.images.constellation2 = `Eff_UI_Talent_PlayerGirl_${element}`;
		}
	}
}

function collateTalent(existing, newdata, lang) {
	newdata.aliases = existing.aliases;
	clearObject(existing);
	existing.name = newdata.name;
	if(newdata.aliases) existing.aliases = newdata.aliases;
	function addTalent(prop) {
		if(newdata[prop] === undefined) return;
		if(existing[prop] === undefined) existing[prop] = {};
		existing[prop].name = newdata[prop].name;
		existing[prop].info = newdata[prop].info;
		if(newdata[prop].description !== undefined) existing[prop].description = newdata[prop].description;
		if(newdata[prop].labels !== undefined) {
			existing[prop].attributes = {};
			existing[prop].attributes.labels = newdata[prop].labels;
		}
		if(lang === 'English') {
			if(newdata.images === undefined) newdata.images = {};
			newdata.images[prop] = newdata[prop].icon;
		}
	}
	addTalent('combat1');
	addTalent('combat2');
	addTalent('combatsp'); // for mona and ayaka only
	addTalent('combat3');
	addTalent('passive1');
	addTalent('passive2');
	addTalent('passive3'); // traveler doesn't have passive3
	addTalent('passive4'); // for kokomi only
	existing.costs = newdata.costs;
}

async function collateWeapon(existing, inputdata, lang, importConfig, skipimageredirect, dbimages) {
	if (lang === 'English') {
		inputdata.images = {};
		if(inputdata.icon) {
			inputdata.images.nameicon = inputdata.icon;
			inputdata.images.namegacha = `UI_Gacha_EquipIcon_${inputdata.icon.slice(inputdata.icon.indexOf("UI_EquipIcon")+13)}`;
			let mihoyoUrl = `https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/${inputdata.icon}.png`;
			if (await isImageBlacklistAndExist(mihoyoUrl, true, dbimages ? dbimages.icon : undefined)) {
				inputdata.images.icon = mihoyoUrl;
			}
		}
		if(inputdata.awakenicon) {
			inputdata.images.nameawakenicon = inputdata.awakenicon;
			let mihoyoUrl = `https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/${inputdata.awakenicon}.png`;
			if (await isImageBlacklistAndExist(mihoyoUrl, true, dbimages ? dbimages.awakenicon : undefined)) {
				inputdata.images.awakenicon = mihoyoUrl;
			}
		}
	}

	inputdata.weaponmaterialtype = existing.weaponmaterialtype;

	clearObject(existing);
	existing.name = inputdata.name;
	if(inputdata.dupealias) existing.dupealias = inputdata.dupealias;
	if(inputdata.aliases) existing.aliases = inputdata.aliases;
	existing.description = inputdata.description;
	existing.weapontype = inputdata.weapontype;
	existing.rarity = inputdata.rarity;
	existing.story = inputdata.story;
	existing.baseatk = Math.round(inputdata.baseatk);
	existing.substat = (inputdata.substat || '').toString();
	existing.subvalue = '';
	if(inputdata.subvalue !== undefined) {
		if(inputdata.subvalue <= 2) existing.subvalue = (Math.round(inputdata.subvalue*1000)/10).toString();
		else existing.subvalue = (Math.round(inputdata.subvalue)).toString();
	}
	existing.effectname = (inputdata.effectname || '').toString();
	existing.effect = (inputdata.effect || '').toString();
	existing.r1 = inputdata.r1 || [];
	existing.r2 = inputdata.r2 || [];
	existing.r3 = inputdata.r3 || [];
	existing.r4 = inputdata.r4 || [];
	existing.r5 = inputdata.r5 || [];

	existing.weaponmaterialtype = inputdata.weaponmaterialtype || '';
	existing.costs = inputdata.costs;
}

function collateArtifact(existing, newdata) {
	clearObject(existing);
	existing.name = newdata.name;
	if(newdata.aliases) existing.aliases = newdata.aliases;
	existing.rarity = newdata.rarity;
	if(newdata['1pc']) existing['1pc'] = newdata['1pc'];
	if(newdata['2pc']) existing['2pc'] = newdata['2pc'];
	if(newdata['4pc']) existing['4pc'] = newdata['4pc'];
	const types = ['flower', 'plume', 'sands', 'goblet', 'circlet'];
	types.forEach(type => {
		if(newdata[type] === undefined) return;
		existing[type] = {};
		existing[type].name = newdata[type].name;
		existing[type].relictype = newdata[type].relictype;
		existing[type].description = newdata[type].description;
		existing[type].story = newdata[type].story;
		//existing[type].icon = newdata[type].icon;
	})
}

async function collateMaterial(existing, newdata, lang, importconfig, skipimageredirect) {
	if(existing.dropdomain && existing.dropdomain !== "" && !newdata.dropdomain) newdata.dropdomain = existing.dropdomain;
	if(existing.daysofweek && existing.daysofweek.length !== 0 && !newdata.daysofweek) newdata.daysofweek = existing.daysofweek;
	clearObject(existing);
	let copyover = ['name', 'dupealias', 'description', 'sortorder', 'rarity', 'category', 'materialtype', 'dropdomain',
					  'daysofweek', 'source'];
	existing.name = newdata.name;
	if (existing.sortorder) newdata.sortorder = existing.sortorder;
	for(let prop of copyover) {
		if(newdata[prop] !== undefined) existing[prop] = newdata[prop];
	}
	if(lang === 'English') {
		newdata.images = {};
		let imagename = newdata.name;
		if(imagename === 'Ley Line Sprout') imagename = 'Ley Line Sprouts';
		imagename = imagename.replace(/ /g, '_').replace(/"/g, '');
		newdata.images.nameicon = newdata.imagename;
		newdata.images.redirect = `https://genshin-impact.fandom.com/wiki/Special:Redirect/file/Item_${imagename}.png`
		if(!skipimageredirect) newdata.images.fandom = await getRedirectedUrl(newdata.images.redirect);
	}
}

function collateData(dbdata, importdata, langC, importconfig, dbimages) {
	clearObject(dbdata);
	copyPropsIfExist(importdata, dbdata, importconfig.props);
	if (langC === 'EN' && importconfig.images) {
		copyImagesProps(importdata, importconfig, dbimages);
	}
}

function importCurve(folder) {
	try {
		let mycurve = require(`./import/curve/${folder}.json`);
		fs.mkdirSync(`../../src/data/curve`, { recursive: true });
		fs.writeFileSync(`../../src/data/curve/${folder}.json`, JSON.stringify(mycurve, null, '\t'));
	} catch(e) {}
}

function patchData(folder, data, langC, filename) {
	if(folder === 'talents' && langC === 'DE' && filename === 'zhongli') {
		const wrong = "Ein riesiger Meteorit fällt aus dem Himmel und fügt den Gegnern im Wirkungsbereich des Einschlags enormen Geo-Schaden sowie Versteinert zu.\n\n**Versteingert**\nGegner im Zustand Versteinert können sich nicht bewegen.";
		const correct = "Ein riesiger Meteorit fällt aus dem Himmel und fügt den Gegnern im Wirkungsbereich des Einschlags enormen Geo-Schaden sowie Versteinert zu.\n\n**Versteinert**\nGegner im Zustand Versteinert können sich nicht bewegen.";
		if(data.combat3.info === wrong) {
			data.combat3.info = correct;
			console.log('patched DE zhongli talent.combat3');
		}
	}
}

let gameVersion = "";
function updateVersions(filenames, folder) {
	let existing = {};
	let myversions = {};
	try { existing = require(`../../src/data/version/${folder}.json`); } catch(e) {}

	for(const filename of filenames) {
		myversions[filename] = existing[filename] || existing[filename] === "" ? JSON.parse(JSON.stringify(existing[filename])) : gameVersion;
	}
	writeFileIfDifferent(`../../src/data/version/${folder}.json`, myversions);
}

function addURLsEmpty(filenames, folder, props) {
	if(fs.existsSync(`../../src/data/English/${folder}`)) {
		let existing = {}
		let myurls = {};
		try { existing = require(`../../src/data/url/${folder}.json`); } catch(e) {};

		for(const filename of filenames) {
			myurls[filename] = existing[filename] ? JSON.parse(JSON.stringify(existing[filename])) : {};

			copyPropsIfExist(existing[filename], myurls[filename], props, '')
		}
		writeFileIfDifferent(`../../src/data/url/${folder}.json`, myurls);
	}
}

function writeFileIfDifferent(path, data) {
	let existing = {};
	try { existing = require(path); } catch {};
	if(JSON.stringify(existing) !== JSON.stringify(data)) {
		if(path.lastIndexOf('/') !== -1)
			fs.mkdirSync(path.substring(0, path.lastIndexOf('/')), { recursive: true });
		fs.writeFileSync(path, JSON.stringify(data, null, '\t'));
	}
}

const design = require(`../../src/design.json`);
const importconfig = require('./configs/properties.json');
function importData(folder, collateFunc, dontwrite, deleteexisting, skipimageredirect) {
	language.languageCodes.forEach(async (langC) => {
		if(dontwrite && langC !== 'EN') return; 

		let importdatafolder = JSON.parse(JSON.stringify(require(`./import/${langC}/${folder}.json`)));
		let dbimages; // only do this once
		let mystats = {}; // only do this once
		if(langC === 'EN' && design.hasImage.includes(folder)) {
			try { dbimages = JSON.parse(JSON.stringify(require(`../../src/data/image/${folder}.json`)));
			} catch(e) { dbimages = {}; }
		}

		let basepath = `${language.languageMap[langC]}/${folder}`
		if(deleteexisting) fs.rmdirSync(`../../src/data/${basepath}`, { recursive: true });

		const filenamelist = [];
		for(const [filename, importdata] of Object.entries(importdatafolder)) {
			filenamelist.push(filename);
			let dbdata = getDbData(`${basepath}/${filename}.json`);
			importdata.aliases = dbdata.aliases;

			let before = JSON.stringify(dbdata);
			if (dbdata && dbdata.name && dbdata.name !== importdata.name)
				logNameChange(gameVersion, language.languageMap[langC], folder, importdata.id, filename, dbdata.name, importdata.name);
			if (dbdata && dbdata.name === undefined)
				logNewData(gameVersion, folder, importdata.id, filename);

			if (collateFunc)
				await collateFunc(dbdata, importdata, language.languageMap[langC], importconfig[folder], skipimageredirect, dbimages ? dbimages[filename] : undefined);
			else
				await collateData(dbdata, importdata, langC, importconfig[folder], dbimages ? dbimages[filename] : undefined)
			if(dbimages) { 
				if(dbimages[filename] === undefined) dbimages[filename] = {};
				Object.assign(dbimages[filename], importdata.images);
				mystats[filename] = importdata.stats || importdata.parameters;
			}
			patchData(folder, dbdata, langC, filename);

			if(dontwrite) { console.log(dbdata); continue; }
			if(before === JSON.stringify(dbdata)) continue; // no change made
			
			fs.mkdirSync(`../../src/data/${basepath}`, { recursive: true });
			fs.writeFileSync(`../../src/data/${basepath}/${filename}.json`, JSON.stringify(dbdata, null, '\t'));
		}

		// remove unused files
		fs.readdirSync(`../../src/data/${language.languageMap[langC]}/${folder}`).forEach(file => {
			if(!filenamelist.includes(file.substring(0, file.indexOf('.')))) {
				try { fs.unlinkSync(`../../src/data/${language.languageMap[langC]}/${folder}/${file}`); } catch(e) {}
				console.log(`removed unused ${file}`);
			}
		})

		if(dbimages)
			writeFileIfDifferent(`../../src/data/image/${folder}.json`, dbimages);
		if(langC === 'EN') {
			updateVersions(filenamelist, folder);
			if(folder === 'outfits')
				addURLsEmpty(filenamelist, folder, ['modelviewer']);
			if(['characters', 'weapons', 'talents', 'enemies'].includes(folder))
				writeFileIfDifferent(`../../src/data/stats/${folder}.json`, mystats);

		}
	});
}

// checkExistingImageBlacklist = true; // 
gameVersion = "4.2"; // new data will use this as added version

// importData('characters', collateCharacter);
// importCurve('characters');
// getUpperBodyImages(); // grabbing cover1, cover2 from official genshin impact site, // MUST IMPORT SEPARATELY FROM import characters

// importData('constellations', collateConstellation);
// importData('talents', collateTalent);
// importData('weapons', collateWeapon)
// importCurve('weapons');
// importData('artifacts', collateArtifact, undefined, false);
// importData('foods');
// importData('materials', collateMaterial, undefined, false, true); // don't forget to remove sort first // don't forget change last bool param
// importData('domains');
// importData('enemies');
// importCurve('enemies');

// importData('outfits', collateOutfit);
// importData('windgliders');
// importData('animals');
// importData('namecards');
// importData('geographies');
// importData('crafts');
// importData('achievements');
// importData('achievementgroups');
// importData('adventureranks'); // max 60

// importData('tcgcharactercards');
// importData('tcgenemycards');
// importData('tcgactioncards');
// importData('tcgcardbacks');
// importData('tcgcardboxes');
// importData('tcgdetailedrules');
// importData('tcgkeywords');
// importData('tcglevelrewards');
// importData('tcgstatuseffects');
// importData('tcgsummons');

// updateURLs(); // must be separate

// stealWikiaVersion('animals');

// var https = require('https');

// var options = {
//   'method': 'POST',
//   'hostname': 'sg-wiki-api.hoyolab.com',
//   'path': '/hoyowiki/wapi/get_entry_page_list',
//   'headers': {
//     'referer': 'https://wiki.hoyolab.com/',
//     'Content-Type': 'text/plain'
//   }
// };

// var req = https.request(options, function (res) {
//   var chunks = [];

//   res.on("data", function (chunk) {
//     chunks.push(chunk);
//   });

//   res.on("end", function (chunk) {
//     var body = Buffer.concat(chunks);
//     console.log(body.toString());
//   });

//   res.on("error", function (error) {
//     console.error(error);
//   });
// });

// var postData = JSON.stringify({"filters":[],"menu_id":"2","page_num":2,"page_size":30});

// req.write(postData);

// req.end();


// https.post(`https://sg-wiki-api.hoyolab.com/hoyowiki/wapi/get_entry_page_list`, payload, function(res) {
// 	let data = '';
// 	res.on('data', function(chunk) { data += chunk;	});
// 	res.on('end', function() {
// 		console.log(data);
// 	});
// }).on('error', function() {
// 	console.log('error');
// });