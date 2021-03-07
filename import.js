// THIS SCRIPT IMPORTS DATA IN THE import FOLDER INTO THE LIBRARY
// I made a script elsewhere that extracts what I need out of the GenshinData repo

const fs = require('fs');

if(!fs.existsSync('./import/EN')) {
	console.log('import folder doesn\'t exist');
	process.exit();
}

const language = require('./src/language.js');

// FOR DATA ONLY
function getJSON(path) {
    try {
        return require(`./src/data/${path}`);
    } catch(e) {
        return undefined;
    }
}



function collateConstellation(existing, newdata) {
	existing.name = newdata.name;
	for(let i = 1; i <= 6; i++) {
		if(existing['c'+i] === undefined) existing['c'+i] = {};
		existing['c'+i].name = newdata['c'+i].name;
		existing['c'+i].effect = newdata['c'+i].effect;
		if(existing['c'+i].image === undefined) existing['c'+i].image = '';
	}
}

function importData(folder, collateFunc) {
	language.languageCodes.forEach(lang => {
		let newaggregateddata = require(`./import/${lang}/${folder}.json`);
		for(const [filename, newdata] of Object.entries(newaggregateddata)) {
			let basepath = `${language.languageMap[lang]}/${folder}`
			let existing = getJSON(`${basepath}/${filename}.json`);
			if(existing === undefined) existing = {};

			collateFunc(existing, newdata);

			fs.mkdirSync(`./src/data/${basepath}`, { recursive: true });
			fs.writeFileSync(`./src/data/${basepath}/${filename}.json`, JSON.stringify(existing, null, '\t'));
		}
	});
}

importData('constellations', collateConstellation);
