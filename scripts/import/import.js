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
			prop = prop.slice(1);
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
	for (let prop of ['icon', 'awakenicon', 'sideicon', 'mihoyo_icon', 'mihoyo_sideIcon', 'mihoyo_awakenIcon',
						'mihoyo_flower', 'mihoyo_plume', 'mihoyo_sands', 'mihoyo_goblet', 'mihoyo_circlet']) {
		if (importdata.images[prop]) {
			const existingUrl = dbimages ? dbimages[prop] : undefined;
			if (!await isImageBlacklistAndExist(importdata.images[prop], true, existingUrl)) {
				delete importdata.images[prop];
			}
		}
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

function updateTypeLiterals(folder, importdatafolder, properties) {
	if (!properties) return
	if (!fs.existsSync(`../../types/folders/${folder}.d.ts`)) return;

	let resdts = fs.readFileSync(`../../types/folders/${folder}.d.ts`).toString();
	newdts = resdts;

	for (let property of properties) {
		let values = {};
		for (let data of Object.values(importdatafolder)) {
			let value = data[property];
			if (value && !values[value]) values[value] = value;
		}
		values = Object.values(values);

		// create and save type literal.
		if (values.length > 0) {
			let literal = values.sort().map(e => typeof e === 'string' ? `'${e}'` : e).join(' | ');
			newdts = newdts.replace(new RegExp(`${property}(\\??): .*?;`), `${property}$1: ${literal};`);
		}
	}

	if (resdts !== newdts) {
		fs.writeFileSync(`../../types/folders/${folder}.d.ts`, newdts);
	}
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

function updateVoiceoverVersions(importdata, folder) {
	let existing = {};
	let myversions = {};
	try { existing = require(`../../src/data/version/${folder}.json`); } catch(e) {}

	for(const [filename, data] of Object.entries(importdata)) {
		myversions[filename] = {};

		data.friendLines.forEach(voiceline => {
			if (existing[filename] && (existing[filename][voiceline.voicelineId] || existing[filename][voiceline.voicelineId] === ""))
				 myversions[filename][voiceline.voicelineId] = existing[filename][voiceline.voicelineId];
			else
				myversions[filename][voiceline.voicelineId] = gameVersion;
		});
		data.actionLines.forEach(voiceline => {
			if (existing[filename] && (existing[filename][voiceline.voicelineId] || existing[filename][voiceline.voicelineId] === ""))
				 myversions[filename][voiceline.voicelineId] = existing[filename][voiceline.voicelineId];
			else
				myversions[filename][voiceline.voicelineId] = gameVersion;
		});
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
function importData(folder, collateFunc, dontwrite=false, deleteexisting, skipimageredirect) {
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

		updateTypeLiterals(folder, importdatafolder, importconfig[folder].typeliteral);

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
			if (!importconfig[folder].specialversion) updateVersions(filenamelist, folder);
			else if (folder === 'voiceovers') updateVoiceoverVersions(importdatafolder, folder);

			if(folder === 'outfits')
				addURLsEmpty(filenamelist, folder, ['modelviewer']);
			if(['characters', 'weapons', 'talents', 'enemies'].includes(folder))
				writeFileIfDifferent(`../../src/data/stats/${folder}.json`, mystats);

		}
	});
}

// checkExistingImageBlacklist = true; // 
gameVersion = "4.5"; // new data will use this as added version

// importData('characters');
// importCurve('characters');
// getUpperBodyImages(); // RUN SEPARATELY. grabbing cover1, cover2 from official genshin impact site, // MUST IMPORT SEPARATELY FROM import characters

// importData('constellations');
// importData('talents');
// importData('weapons')
// importCurve('weapons');
// importData('artifacts');
// importData('foods');
// importData('materials');
// importData('domains');
// importData('enemies');
// importCurve('enemies');

// importData('outfits');
// importData('windgliders');
// importData('animals');
// importData('namecards');
// importData('geographies');
// importData('crafts');
// importData('emojis');
// importData('voiceovers')
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