// THIS SCRIPT IMPORTS DATA IN THE import FOLDER INTO THIS LIBRARY
// I made a script elsewhere that extracts what I need out of the GenshinData repo
// REQUIRES NODE v13+

const fs = require('fs');
const language = require('./src/language.js');


if(!fs.existsSync('./import/EN')) {
	console.log('import folder doesn\'t exist');
	process.exit();
}


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
	'MAINACTOR': ''
}

function collateCharacter(existing, newdata, lang) {
	newdata.images = existing.images;
	newdata.talentmaterialtype = existing.talentmaterialtype;
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
	existing.images = newdata.images || {};
	if(newdata.icon) existing.images.icon = `https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/${newdata.icon}.png`;
	if(newdata.sideicon) existing.images.sideicon = `https://upload-os-bbs.mihoyo.com/game_record/genshin/character_side_icon/${newdata.sideicon}.png`;
	existing.cv = newdata.cv;
	existing.talentmaterialtype = newdata.talentmaterialtype || '';
	existing.url = newdata.url;
}

function collateConstellation(existing, newdata) {
	clearObject(existing);
	existing.name = newdata.name;
	if(newdata.aliases) existing.aliases = newdata.aliases;
	for(let i = 1; i <= 6; i++) {
		if(existing['c'+i] === undefined) existing['c'+i] = {};
		existing['c'+i].name = newdata['c'+i].name;
		existing['c'+i].effect = newdata['c'+i].effect;
		existing['c'+i].icon = `https://upload-os-bbs.mihoyo.com/game_record/genshin/constellation_icon/${newdata['c'+i].icon}.png`;
	}
}

function collateTalent(existing, newdata) {
	existing.name = newdata.name;
	if(newdata.aliases) existing.aliases = newdata.aliases;
	function addTalent(prop) {
		if(newdata[prop] === undefined) return;
		if(existing[prop] === undefined) existing[prop] = {};
		existing[prop].name = newdata[prop].name;
		existing[prop].info = newdata[prop].info;
		if(newdata[prop].description !== undefined) existing[prop].description = newdata[prop].description;
		if(existing[prop].image === undefined) existing[prop].image = '';
	}
	addTalent('combat1');
	addTalent('combat2');
	addTalent('combatsp'); // for mona only
	addTalent('combat3');
	addTalent('passive1');
	addTalent('passive2');
	addTalent('passive3'); // traveler doesn't have passive3
}

function collateWeapon(existing, inputdata) {
	inputdata.images = existing.images;
	inputdata.weaponmaterialtype = existing.weaponmaterialtype;
	inputdata.url = existing.url;

	clearObject(existing);
	existing.name = inputdata.name;
	if(newdata.aliases) existing.aliases = newdata.aliases;
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
	existing.images = inputdata.images || { image: '' };
	if(inputdata.icon !== undefined)
		existing.images.icon = `https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/${inputdata.icon}.png`;
	if(inputdata.awakenicon !== undefined)
		existing.images.awakenicon = `https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/${inputdata.awakenicon}.png`;
	existing.url = inputdata.url || '';
}

function importData(folder, collateFunc, dontwrite) {
	language.languageCodes.forEach(langC => {
		if(dontwrite && langC !== 'EN') return; 
		let newaggregateddata = require(`./import/${langC}/${folder}.json`);
		for(const [filename, newdata] of Object.entries(newaggregateddata)) {
			let basepath = `${language.languageMap[langC]}/${folder}`
			let existing = getJSON(`${basepath}/${filename}.json`);
			if(existing === undefined) existing = {};
			newdata.aliases = existing.aliases;

			collateFunc(existing, newdata, language.languageMap[langC]);
			//if(langC === 'CHT') console.log(existing);

			if(dontwrite) continue;
			fs.mkdirSync(`./src/data/${basepath}`, { recursive: true });
			fs.writeFileSync(`./src/data/${basepath}/${filename}.json`, JSON.stringify(existing, null, '\t'));
		}
	});
}

// importData('characters', collateCharacter);
// importData('constellations', collateConstellation);
importData('talents', collateTalent);
// importData('weapons', collateWeapon)