// THIS SCRIPT IS MEANT TO BE CALLED FROM THE COMMANDLINE
// USING `npm run makeIndex -- [arguments here]`

const fs = require('fs');
const languagejs = require('../../src/language.js');
const design = require('../../src/design.json');
const helper = require('./helper.js');

const argv = require('yargs-parser')(process.argv.slice(2), {
	alias: { folder: ['folders'], language: ['languages'] },
	array: [ 'folders', 'languages' ],
	default: { folders: ['standard'], languages: ['all'] }
});

let specificlanguages = helper.sanitizeLanguages(argv.languages);
let specificfolders = helper.sanitizeFolders(argv.folders);

makeIndex();

function makeIndex() {

	console.log('Compiling index for data:');
	for(const lang of specificlanguages) {
		for(const folder of specificfolders) {
			let index = {
				namemap: {}, // maps filename to name
				names: {}, // maps name to filename
				aliases: {}, // maps alias to filename
				categories: {}, // maps category to array of filenames
				properties: {} // maps property to array of category values
			};
			try {
				if (!fs.existsSync(`../../src/data/${lang}/${folder}`)) continue;

				fs.readdirSync(`../../src/data/${lang}/${folder}`)
					.filter(filename => filename.endsWith('.json'))
					.map(filename => filename.substring(0, filename.length-5))
					.sort()
					.forEach(filename => {
						const data = require(`../../src/data/${lang}/${folder}/${filename}`);
						if(data.name === undefined || data.name === "") return; // go next file if this one doesn't have name property

						if(index.namemap[filename] !== undefined) console.log(`Duplicate filename: ${lang}/${folder}: ${filename}`);
						index.namemap[filename] = data.name;
						if(index.names[data.name] !== undefined) {
							// if(!['risingstarlumine', 'scarletbeakduck', 'prizedisshinbladea', 'prizedisshinbladeb', 'cakefortravelera', 'cakefortravelerb', 'keysigila',
							// 	'keysigilb', 'keysigilc', 'keysigild'].includes(filename)) // TODO: add translated lumine/aether to the end of name for indexing
							// 	console.log(`Duplicate name: ${lang}/${folder}: ${data.name} | ${filename}`);
						} else {
							index.names[data.name] = filename;
						}

						if(design.aliases[folder] === undefined) design.aliases[folder] = [];
						design.aliases[folder].push('alias');
						design.aliases[folder].push('dupealias');
						for(let altname of design.aliases[folder]) { // add all the aliases to the index
							let values = getNestedValue(data, altname.split('.'));
							if(values === undefined || values === "") continue;
							if(!Array.isArray(values))
								values = [values];
							for(let val of values) {
								if(val !== undefined && val !== "") {
									if(index.aliases[val] !== undefined && index.aliases[val] !== filename && filename !== 'lumine')
										console.log(`Duplicate alias: ${lang}/${folder}: ${altname},${val},${filename}`);
									index.aliases[val] = filename;
								}
							}
						}

						if(design.indexByCategories[folder] === undefined) return; // go next if nothing else to index
						// add additional category indexes
						for(const prop of design.indexByCategories[folder]) {
							let values = data[prop];
							if (prop.includes('[].')) { // if property is in an array of objects
								values = data[prop.split('[].')[0]];
								if (!Array.isArray(values)) continue;
								const subprop = prop.split('[].')[1];
								values = [...new Set(values.map(ele => ele[subprop]))];
							}
							if(values === undefined || values === "" ) continue; // go next if our data doesn't have that category as a property
							if(prop === "costs") values = [...new Set(Object.values(values).flat().map(ele => ele.name))];
							if(prop === "altrecipes") values = values.flat();
							if(!Array.isArray(values)) values = [values]; // make into array

							values = values.filter(ele => ele !== undefined && ele !== null);
							for(let val of values) {
								if(prop === "ingredients" || prop === "recipe" || prop === "altrecipes") val = val.name;// val = val.replace(/ x\d$/i, '');
								else if(prop === "birthday") {
									let [month, day] = data.birthdaymmdd.split('/');
									let birthday = new Date(Date.UTC(2000, month-1, day));
									val = birthday.toLocaleString(languagejs.localeMap[lang], { timeZone: 'UTC', month: 'long' });
								}

								if(index.categories[val] === undefined) {
									index.categories[val] = [filename];
								} else {
									if(index.categories[val].includes(filename)) console.log(`Duplicate category: ${lang}/${folder}: ${val},${filename}`);
									index.categories[val].push(filename);
								}

								if(index.properties[prop] === undefined) {
									index.properties[prop] = [val];
								} else if(!index.properties[prop].includes(val)) {
									index.properties[prop].push(val);
								}
							}
						}
					})

				helper.writeJsonIfDifferent(`../../src/data/index/${lang}/${folder}.json`, index);
			} catch(e) {
				if(e.errno === -4058) console.error("no path: " + e.path);
				else console.error(JSON.stringify(e) + e);
				fs.writeFileSync(`../../src/data/index/${lang}/${folder}.json`, JSON.stringify({}, null, '\t'));
			}
		}
		console.log("  done "+lang);
	}
}

function getNestedValue(data, props) {
	try {
		return props.reduce((res, prop) => {
			return res[prop];
		}, data);
	} catch(e) {
		return undefined;
	}
}
