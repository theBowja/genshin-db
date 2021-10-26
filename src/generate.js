const fs = require('fs');
let language = require('./language.js');
const design = require('./design.json');
const Folder = require('./folder.js');

// THIS SCRIPT GENERATES INDEX.JSON FOR EACH SET OF DATA
// REQUIRES NODE v13+

// if you ask me to explain the code i wrote below, i would reply i dunno

let specificlanguages = language.format(process.argv.slice(2));
if(specificlanguages) {
	language.languages = specificlanguages;
	console.log('specified languages: ' + specificlanguages.join(', '));
}

let specificfolders = [];
function isValidFolder(folder) { return typeof folder === 'string' && Folder[folder]; }
for(f of process.argv.slice(2)) {
	if(isValidFolder(f)) specificfolders.push(f);
}
if(specificfolders.length !== 0) {
	design.folders = specificfolders;
	console.log('specified folders: ' + specificfolders.join(', '));
}



makeIndices();
combineData();

function makeIndices() {

	console.log('compiling index for data');
	for(const lang of language.languages) {
		let categories = require(`./data/${lang}/categories.json`);
		for(const folder of design.folders) {
			let index = {
				namemap: {}, // maps filename to name
				names: {}, // maps name to filename
				aliases: {}, // maps alias to filename
				categories: {}, // maps category to array of filenames
				properties: {} // maps property to array of category values
			};
			try {
				if (!fs.existsSync(`./data/${lang}/${folder}`)) continue;

				fs.readdirSync(`./data/${lang}/${folder}`).forEach(filename => {
					if(!filename.endsWith('.json')) return;
					filename = filename.substring(0, filename.length-5);

					const data = require(`./data/${lang}/${folder}/${filename}`);
					if(data.name === undefined || data.name === "") return; // go next file if this one doesn't have name property

					if(index.namemap[filename] !== undefined) console.log(`Duplicate filename: ${lang}/${folder}: ${filename}`);
					index.namemap[filename] = data.name;
					if(index.names[data.name] !== undefined) console.log(`Duplicate name: ${lang}/${folder}: ${data.name}`);
					index.names[data.name] = filename;

					if(design.altnames[folder] !== undefined) {
						for(let altname of design.altnames[folder]) { // add all the altnames to the index
							let values = data[altname];
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
					}

					if(design.indexByCategories[folder] === undefined) return; // go next if nothing else to index
					// add additional category indexes
					for(const prop of design.indexByCategories[folder]) {
						let values = data[prop];
						if(values === undefined || values === "" ) continue; // go next if our data doesn't have that category as a property
						if(prop === "costs") values = [...new Set(Object.values(values).flat().map(ele => ele.name))];
						if(!Array.isArray(values)) values = [values]; // make into array

						for(let val of values) {
							//if(categories[prop] === undefined) console.log("missing category: "+folder+ ","+prop);
							if(prop === "ingredients") val = val.name;// val = val.replace(/ x\d$/i, '');
							else if(prop === "birthday") {
								let [month, day] = data.birthdaymmdd.split('/');
								let birthday = new Date(Date.UTC(2000, month-1, day));
								val = birthday.toLocaleString(language.localeMap[lang], { timeZone: 'UTC', month: 'long' });
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

						// if(categories[prop].includes(data[prop])) {
						// 	let tmp = data[prop];
						// 	if(index[tmp] === undefined)
						// 		index[tmp] = [data.name];
						// 	else
						// 		index[tmp].push(data.name);
						// }
					}
				})

				fs.mkdirSync(`./data/index/${lang}`, { recursive: true });
				fs.writeFileSync(`./data/index/${lang}/${folder}.json`, JSON.stringify(index, null, '\t'));
			} catch(e) {
				if(e.errno === -4058) console.log("no path: " + e.path);
				else console.log(JSON.stringify(e) + e);
				fs.writeFileSync(`./data/index/${lang}/${folder}.json`, JSON.stringify({}, null, '\t'));
			}
		}
		console.log("done "+lang);
	}
}

function combineData() {
	console.log("minifying all data, index, image, stats, curve into one file each");
	let mydata = {}, myindex = {}, myimage = {}, mystats = {}, mycurve = {}, myurl = {};

	for(const lang of language.languages) {
		mydata[lang] = {};
		myindex[lang] = {};
		for(const folder of design.folders) {
			if (!fs.existsSync(`./data/${lang}/${folder}`)) continue;
			mydata[lang][folder] = {};
			myindex[lang][folder] = require(`./data/index/${lang}/${folder}.json`);

			fs.readdirSync(`./data/${lang}/${folder}`).forEach(filename => {
				if(!filename.endsWith('.json')) return;
				filename = filename.substring(0, filename.length-5);
				mydata[lang][folder][filename] = require(`./data/${lang}/${folder}/${filename}`);

			});
		}
	}
	for(const folder of design.folders) {
		if(fs.existsSync(`./data/image/${folder}.json`))
			myimage[folder] = require(`./data/image/${folder}.json`);
		if(fs.existsSync(`./data/stats/${folder}.json`))
			mystats[folder] = require(`./data/stats/${folder}.json`);
		if(fs.existsSync(`./data/curve/${folder}.json`))
			mycurve[folder] = require(`./data/curve/${folder}.json`);
		if(fs.existsSync(`./data/url/${folder}.json`))
			myurl[folder] = require(`./data/url/${folder}.json`);
	}

	fs.writeFileSync(`./min/data.min.json`, JSON.stringify(mydata));
	fs.writeFileSync(`./min/index.min.json`, JSON.stringify(myindex));
	fs.writeFileSync(`./min/image.min.json`, JSON.stringify(myimage));
	fs.writeFileSync(`./min/stats.min.json`, JSON.stringify(mystats));
	fs.writeFileSync(`./min/curve.min.json`, JSON.stringify(mycurve));
	fs.writeFileSync(`./min/url.min.json`, JSON.stringify(myurl));
}