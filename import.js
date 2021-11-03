// THIS SCRIPT IMPORTS DATA IN THE import FOLDER INTO THIS LIBRARY
// I made a script elsewhere that extracts what I need out of the GenshinData repo
// REQUIRES NODE v13+

const fs = require('fs');
const language = require('./src/language.js');
//const genshindb = require('./src/main.js');


if(!fs.existsSync('./import/EN')) {
	console.log('import folder doesn\'t exist');
	process.exit();
}

// for importing images
let myimages = {};

// FOR DATA ONLY
function getJSON(path) {
    try {
        return require(`./src/data/${path}`);
    } catch(e) {
        return undefined;
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
		French: 'Homme', Indonesian: 'Pria', Japanese: '男', Korean: '남성', Portuguese: 'Masculino',
		Russian: 'мужчина', Thai: 'ชาย', Vietnamese: 'nam'
	},
	'FEMALE': {
		ChineseSimplified: '女', ChineseTraditional: '女', German: 'Weiblich', English: 'Female', Spanish: 'Femenino',
		French: 'Femme', Indonesian: 'Perempuan', Japanese: '女', Korean: '여성', Portuguese: 'Feminino',
		Russian: 'женский', Thai: 'ผู้หญิง', Vietnamese: 'nữ'
	}
}

const associationToRegion = {
	'LIYUE': 'Liyue',
	'MONDSTADT': 'Mondstadt',
	'FATUI': 'Snezhnaya',
	'INAZUMA': 'Inazuma',
	'MAINACTOR': '',
	'RANGER': '',
}

/* ============================================ FUNCTIONS =================================================== */

async function getCharList(region) {
	const https = require('https');
	return new Promise(resolve => {
		https.get(`https://genshin.mihoyo.com/en/character/${region}?char=0`, function(res) {
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
	const regions = ['mondstadt', 'liyue', 'inazuma'];
	let myimages = {};
	try { myimages = require(`./src/data/image/characters.json`); } catch(e) {}

	for(const region of regions) {
		const charList = await getCharList(region);
		for(const char of charList) {
			const filename = makeFileName(char.title);
			if(myimages[filename] === undefined) myimages[filename] = {};
			myimages[filename].cover1 = char.cover1;
			myimages[filename].cover2 = char.cover2;
		}
	}
	fs.mkdirSync(`./src/data/image`, { recursive: true });
	fs.writeFileSync(`./src/data/image/characters.json`, JSON.stringify(myimages, null, '\t'));
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

async function getRedirectImages() {
	const sanitize = (str) => { return str.replace(/ /g, '_').replace(/:/g, '').replace(/,/g, '%2C').replace(/"/g, '%22').replace(/'/g, '%27'); }

	if(fs.existsSync(`./src/data/English/talents`)) {
		let existing = {};
		try { existing = require(`./src/data/image/talents.json`); } catch(e) {};
		let allfiles = fs.readdirSync(`./src/data/English/talents`)
		for(let filename of allfiles) {
			if(!filename.endsWith('.json')) return;
			const mytalent = require(`./src/data/English/talents/${filename}`);
			filename = filename.substring(0, filename.indexOf('.'));
			if(existing[filename] === undefined) existing[filename] = {};
			//===============
			console.log(filename);
			let combat1 = sanitize(mytalent.combat1.name.slice(15));
			if(mytalent.name === 'Kamisato Ayaka') combat1 = combat1.replace(/_-/g, '');
			existing[filename].combat1 = await getRedirectedUrl(`https://genshin-impact.fandom.com/wiki/Special:Redirect/file/Talent_${combat1}.png`) || '';

			let combat2 = sanitize(mytalent.combat2.name);
			existing[filename].combat2 = await getRedirectedUrl(`https://genshin-impact.fandom.com/wiki/Special:Redirect/file/Talent_${combat2}.png`) || '';

			if(mytalent.combatsp) {
				let combatsp = sanitize(mytalent.combatsp.name);
				existing[filename].combatsp = await getRedirectedUrl(`https://genshin-impact.fandom.com/wiki/Special:Redirect/file/Talent_${combatsp}.png`) || '';
			}

			let combat3 = sanitize(mytalent.combat3.name);
			existing[filename].combat3 = await getRedirectedUrl(`https://genshin-impact.fandom.com/wiki/Special:Redirect/file/Talent_${combat3}.png`) || '';

			let passive1 = sanitize(mytalent.passive1.name);
			if(mytalent.name === 'Xinyan') passive1 = passive1.replace(/An/, 'an');
			else if(mytalent.name === 'Mona') passive1 = passive1.replace(/%22/g, '');
			existing[filename].passive1 = await getRedirectedUrl(`https://genshin-impact.fandom.com/wiki/Special:Redirect/file/Talent_${passive1}.png`) || '';

			let passive2 = sanitize(mytalent.passive2.name);
			if(mytalent.name === 'Qiqi') passive2 = passive2.replace(/Into/, 'into');
			existing[filename].passive2 = await getRedirectedUrl(`https://genshin-impact.fandom.com/wiki/Special:Redirect/file/Talent_${passive2}.png`) || '';

			if(mytalent.passive3) {
				let passive3 = sanitize(mytalent.passive3.name);
				if(mytalent.name === 'Albedo') passive3 = passive3 + '_%28Albedo%29';
				existing[filename].passive3 = await getRedirectedUrl(`https://genshin-impact.fandom.com/wiki/Special:Redirect/file/Talent_${passive3}.png`) || '';
			}
		}
	 	fs.mkdirSync(`./src/data/image`, { recursive: true });
	 	fs.writeFileSync(`./src/data/image/talents.json`, JSON.stringify(existing, null, '\t'));
	} else {
		console.log(`getRedirectImages: talents not found`);
	}
}

function updateURLs() {
	//let folder = 'characters';
	updateFandomDirect('characters');
	updateFandomDirect('artifacts');
	updateFandomDirect('weapons');
	updateFandomDirect('foods');
	updateFandomDirect('materials');
	function updateFandomDirect(folder) {
		if(fs.existsSync(`./src/data/English/${folder}`)) {
			let existing = {};
			try { existing = require(`./src/data/url/${folder}.json`); } catch(e) {};
			fs.readdirSync(`./src/data/English/${folder}`).forEach(filename => {
				if(!filename.endsWith('.json')) return;
				const mycharacter = require(`./src/data/English/${folder}/${filename}`);
				filename = filename.substring(0, filename.indexOf('.'));
				if(existing[filename] === undefined) existing[filename] = {};
				existing[filename].fandom = `https://genshin-impact.fandom.com/wiki/${mycharacter.name.replace(/ /g, '_')}`;
			});
		 	fs.mkdirSync(`./src/data/url`, { recursive: true });
		 	fs.writeFileSync(`./src/data/url/${folder}.json`, JSON.stringify(existing, null, '\t'));
		} else {
			console.log(`updateURLs: ${folder} folder not found`);
		}
	}
}

function collateCharacter(existing, newdata, lang) {
	newdata.aliases = existing.aliases;
	newdata.images = {};
	if(newdata.icon) {
		let name = newdata.icon.slice(newdata.icon.lastIndexOf('_')+1);
		newdata.images.nameicon = newdata.icon;
		newdata.images.nameiconcard = `UI_AvatarIcon_${name}_Card`;
		if(newdata.birthday) { // not player
			newdata.images.namegachasplash = `UI_Gacha_AvatarImg_${name}`;
			newdata.images.namegachaslice = `UI_Gacha_AvatarIcon_${name}`;
		}
		newdata.images.icon = `https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/${newdata.icon}.png`;
	}
	if(newdata.sideicon) {
		newdata.images.namesideicon = newdata.sideicon;
		newdata.images.sideicon = `https://upload-os-bbs.mihoyo.com/game_record/genshin/character_side_icon/${newdata.sideicon}.png`;
	}

	//newdata.talentmaterialtype = existing.talentmaterialtype;
	newdata.url = existing.url;
	clearObject(existing);

	existing.name = newdata.name;
	if(newdata.aliases) existing.aliases = newdata.aliases;
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
	existing.region = associationToRegion[newdata.association];
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

function collateTalent(existing, newdata) {
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

function collateWeapon(existing, inputdata) {
	inputdata.images = {};
	if(inputdata.icon) {
		inputdata.images.nameicon = inputdata.icon;
		inputdata.images.namegacha = `UI_Gacha_EquipIcon_${inputdata.icon.slice(inputdata.icon.indexOf("UI_EquipIcon")+13)}`;
		inputdata.images.icon = `https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/${inputdata.icon}.png`;
	}
	if(inputdata.awakenicon) {
		inputdata.images.nameawakenicon = inputdata.awakenicon;
		inputdata.images.awakenicon = `https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/${inputdata.awakenicon}.png`;
	}

	inputdata.weaponmaterialtype = existing.weaponmaterialtype;

	clearObject(existing);
	existing.name = inputdata.name;
	if(inputdata.aliases) existing.aliases = inputdata.aliases;
	existing.description = inputdata.description;
	existing.weapontype = inputdata.weapontype;
	existing.rarity = inputdata.rarity;
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
		//existing[type].icon = newdata[type].icon;
	})
}

function collateFood(existing, newdata, lang) {
	clearObject(existing);
	const copyover = ['name', 'rarity', 'foodtype', 'foodfilter', 'foodcategory',
	                  'effect', 'description', 'suspicious', 'normal', 'delicious',
	                  'basedish', 'character', 'ingredients'];
	for(let prop of copyover) {
		// console.log(newdata[prop]);
		if(newdata[prop] !== undefined) existing[prop] = newdata[prop];
	}
	existing.rarity = existing.rarity+"";
	if(lang === 'English') {
		newdata.images = {};
		newdata.images.nameicon = newdata.imagename;
	}
	// console.log(newdata);
}

async function collateMaterial(existing, newdata, lang, skipimageredirect) {
	if(existing.dropdomain && !newdata.dropdomain) newdata.dropdomain = existing.dropdomain;
	if(existing.daysofweek && !newdata.daysofweek) newdata.daysofweek = existing.daysofweek;
	clearObject(existing);
	const copyover = ['name', 'description', 'sortorder', 'rarity', 'category', 'materialtype', 'dropdomain',
	                  'daysofweek', 'source'];
	existing.name = newdata.name;
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

function collateDomain(existing, newdata, lang) {
	if(existing.recommendedelements && !newdata.recommendedelements) newdata.recommendedelements = existing.recommendedelements;
	if(existing.disorder && !newdata.disorder) newdata.disorder = existing.disorder;
	clearObject(existing);
	const copyover = ['name', 'region', 'domainentrance', 'domaintype', 'description', 'recommendedlevel', 'recommendedelements',
                  'daysofweek', 'unlockrank', 'rewardpreview', 'disorder', 'monsterlist'];
	existing.name = newdata.name;
	for(let prop of copyover) {
		if(newdata[prop] !== undefined) existing[prop] = newdata[prop];
	}
	if(lang === 'English') {
		newdata.images = {};
		if(newdata.imagename) newdata.images.namepic = newdata.imagename;
	}
}

function collateEnemy(existing, newdata, lang) {
	clearObject(existing);
	const copyover = ['name', 'specialname', 'type', 'category', 'description'];
	existing.name = newdata.name;
	for(let prop of copyover) {
		if(newdata[prop] !== undefined) existing[prop] = newdata[prop];
	}
	if(lang === 'English') {
		newdata.images = {};
		if(newdata.imageicon) newdata.images.nameicon = newdata.imageicon;
	}
}

function importCurve(folder) {
	try {
		let mycurve = require(`./import/curve/${folder}.json`);
		fs.mkdirSync(`./src/data/curve`, { recursive: true });
		fs.writeFileSync(`./src/data/curve/${folder}.json`, JSON.stringify(mycurve, null, '\t'));
	} catch(e) {}
}

function applyPatch(folder, data, langC, filename) {
	if(folder === 'talents' && langC === 'DE' && filename === 'zhongli') {
		const wrong = "Ein riesiger Meteorit fällt aus dem Himmel und fügt den Gegnern im Wirkungsbereich des Einschlags enormen Geo-Schaden sowie Versteinert zu.\n\n**Versteingert**\nGegner im Zustand Versteinert können sich nicht bewegen.";
		const correct = "Ein riesiger Meteorit fällt aus dem Himmel und fügt den Gegnern im Wirkungsbereich des Einschlags enormen Geo-Schaden sowie Versteinert zu.\n\n**Versteinert**\nGegner im Zustand Versteinert können sich nicht bewegen.";
		if(data.combat3.info === wrong) {
			data.combat3.info = correct;
			console.log('patched DE zhongli talent.combat3');
		}
	}
}

function importData(folder, collateFunc, dontwrite, deleteexisting, skipimageredirect) {
	language.languageCodes.forEach(async (langC) => {
		if(dontwrite && langC !== 'EN') return; 
		// if(langC !== 'EN') return;
		let newaggregateddata = require(`./import/${langC}/${folder}.json`);
		let myimages = {}; // only do this once
		let mystats = {}; // only do this once
		if(langC === 'EN') {
			try {
				myimages = require(`./src/data/image/${folder}.json`)
			} catch(e) {}
		}

		let basepath = `${language.languageMap[langC]}/${folder}`
		if(deleteexisting) {
			fs.rmdirSync(`./src/data/${basepath}`, { recursive: true });
		}

		for(const [filename, newdata] of Object.entries(newaggregateddata)) {
			let existing = getJSON(`${basepath}/${filename}.json`);
			if(existing === undefined) existing = {};
			newdata.aliases = existing.aliases;

			let changebefore = JSON.stringify(existing);
			await collateFunc(existing, newdata, language.languageMap[langC], skipimageredirect);
			if(langC === 'EN') { 
				if(myimages[`${filename}`] === undefined) myimages[`${filename}`] = {};
				Object.assign(myimages[`${filename}`], newdata.images);
				mystats[`${filename}`] = newdata.stats || newdata.parameters;
			}
			applyPatch(folder, existing, langC, filename);

			//if(langC === 'CHT') console.log(existing);

			if(dontwrite) { console.log(existing); continue; }
			if(changebefore === JSON.stringify(existing)) continue;
			
			fs.mkdirSync(`./src/data/${basepath}`, { recursive: true });
			fs.writeFileSync(`./src/data/${basepath}/${filename}.json`, JSON.stringify(existing, null, '\t'));
		}

		if(langC === 'EN') {
			fs.mkdirSync(`./src/data/image`, { recursive: true });
			fs.writeFileSync(`./src/data/image/${folder}.json`, JSON.stringify(myimages, null, '\t'));
			if(['characters', 'weapons', 'talents'].includes(folder)) {
				fs.mkdirSync(`./src/data/stats`, { recursive: true });
				fs.writeFileSync(`./src/data/stats/${folder}.json`, JSON.stringify(mystats, null, '\t'));
			}
		}
	});
}


// importData('characters', collateCharacter);
// importCurve('characters');
// importData('constellations', collateConstellation);
// importData('talents', collateTalent);
// importData('weapons', collateWeapon)
// importCurve('weapons');
// importData('artifacts', collateArtifact);
// importData('foods', collateFood);
// importData('materials', collateMaterial, undefined, false, true);
// importData('domains', collateDomain);
// importData('enemies', collateEnemy);

// getRedirectImages(); // separate. for talents
getUpperBodyImages(); // must be separate // cover1, cover2
// updateURLs(); // must be separate