const fs = require('fs');
let language = require('./language.js');
const design = require('./design.json');
const Folder = require('./folder.js');

// THIS SCRIPT GENERATES INDEX.JSON FOR EACH SET OF DATA
// REQUIRES NODE v13+

// if you ask me to explain the code i wrote below, i would reply i dunno

const pparams = process.argv.slice(2).filter(e => e !== 'all'); // example: node generate.js english characters

let gzipfilename = undefined;
let specificlanguages = [];
let specificfolders = [];

// determine specified languages/folders
if(pparams.includes('none')) {
	console.log('specified: none');
} else {
	if(pparams.includes('alllanguages')) {
		specificlanguages = language.languages;
		console.log('specified languages: all');
	} else {
		specificlanguages = language.format(pparams) || [];
		if(specificlanguages.length !== 0)
			console.log('specified languages: ' + specificlanguages.join(', '));
	}

	function isValidFolder(folder) { return typeof folder === 'string' && Folder[folder]; }
	let addAllFolders = false;
	let addStandardFolders = false;
	for(f of pparams) {
		if(f === 'allfolders')
			addAllFolders = true;
		else if(f === 'standard')
			addStandardFolders = true;
		else if(isValidFolder(f))
			specificfolders.push(f);
		else if(f.startsWith('gzipfilename:'))
			gzipfilename = f.substring(f.indexOf(':')+1);
	}
	let tmpfout = specificfolders.concat(addAllFolders ? ['all'] : []).concat(addStandardFolders ? ['standard'] : []);
	if(tmpfout.length !== 0)
		console.log(`specified folders: ${tmpfout.join(', ')}`);
	if(addAllFolders)
		specificfolders = specificfolders.concat(design.folders);
	if(addStandardFolders)
		specificfolders = specificfolders.concat(design.standard);
	if(gzipfilename)
		console.log('specified gzipfilename: ' + gzipfilename);

	if(specificlanguages.length === 0) specificlanguages = language.languages; // default to all languages
	if(specificfolders.length === 0) specificfolders = design.standard; // default to standard folders
	specificlanguages = [...new Set(specificlanguages)]; // get unique
	specificfolders = [... new Set(specificfolders)]; // get unique
}

makeIndices();
combineData();

function makeIndices() {

	console.log('compiling index for data:');
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
				if (!fs.existsSync(`./data/${lang}/${folder}`)) continue;

				fs.readdirSync(`./data/${lang}/${folder}`).forEach(filename => {
					if(!filename.endsWith('.json')) return;
					filename = filename.substring(0, filename.length-5);

					const data = require(`./data/${lang}/${folder}/${filename}`);
					if(data.name === undefined || data.name === "") return; // go next file if this one doesn't have name property

					if(index.namemap[filename] !== undefined) console.log(`Duplicate filename: ${lang}/${folder}: ${filename}`);
					index.namemap[filename] = data.name;
					if(index.names[data.name] !== undefined) {
						if(filename !== 'risingstarlumine' && filename !== 'scarletbeakduck') // TODO: add translated lumine/aether to the end of name for indexing
							console.log(`Duplicate name: ${lang}/${folder}: ${data.name} | ${filename}`);
					}
					index.names[data.name] = filename;

					if(design.altnames[folder] !== undefined) {
						for(let altname of design.altnames[folder]) { // add all the altnames to the index
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
					}

					if(design.indexByCategories[folder] === undefined) return; // go next if nothing else to index
					// add additional category indexes
					for(const prop of design.indexByCategories[folder]) {
						let values = data[prop];
						if(values === undefined || values === "" ) continue; // go next if our data doesn't have that category as a property
						if(prop === "costs") values = [...new Set(Object.values(values).flat().map(ele => ele.name))];
						if(prop === "rewardpreview" || prop === "reward") values = [...new Set(values.map(ele => ele.name))];
						if(!Array.isArray(values)) values = [values]; // make into array

						for(let val of values) {
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

function combineData() {
	console.log("combining and minifying data, index, image, stats, curve, url, version");
	let mydata = {}, myindex = {}, myimage = {}, mystats = {}, mycurve = {}, myurl = {}, myversion = {};

	for(const lang of specificlanguages) {
		mydata[lang] = {};
		myindex[lang] = {};
		for(const folder of specificfolders) {
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
	for(const folder of specificfolders) {
		if(fs.existsSync(`./data/image/${folder}.json`))
			myimage[folder] = require(`./data/image/${folder}.json`);
		if(fs.existsSync(`./data/stats/${folder}.json`))
			mystats[folder] = require(`./data/stats/${folder}.json`);
		if(fs.existsSync(`./data/curve/${folder}.json`))
			mycurve[folder] = require(`./data/curve/${folder}.json`);
		if(fs.existsSync(`./data/url/${folder}.json`))
			myurl[folder] = require(`./data/url/${folder}.json`);
		if(fs.existsSync(`./data/version/${folder}.json`))
			myversion[folder] = require(`./data/version/${folder}.json`);
	}

	let all = JSON.stringify({
		data: mydata,
		index: myindex,
		image: myimage,
		stats: mystats,
		curve: mycurve,
		url: myurl,
		version: myversion
	});


	const pako = require('pako');
	let gzip = pako.gzip(all);
	const uncompressedsize = Buffer.byteLength(all)/1000/1000;
	const compressedsize = Buffer.byteLength(gzip)/1000/1000;
	console.log(`compression: ${roundFour(compressedsize)}MB/${roundFour(uncompressedsize)}MB = ${roundFour(compressedsize/uncompressedsize*100)}%`)

	fs.writeFileSync(gzipfilename ? gzipfilename : `./min/data.min.json.gzip`, gzip);
	if(!gzipfilename) fs.writeFileSync(`./min/data.min.json`, all);
}

function roundFour(num) {
	return Math.round((num + Number.EPSILON) * 10000) / 10000;
}