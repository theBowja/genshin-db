const fs = require('fs');

// THIS SCRIPT GENERATES INDEX.JSON FOR EACH SET OF DATA
// if you ask me to explain the code i wrote below, i would reply i dunno

const design = require('./design.json');
let languages = require('./language.js').languages;
//languages = ["English"]; // do only english for now

for(const lang of languages) {
	let categories = require(`./data/${lang}/categories.json`);
	for(const folder of design.folders) {
		let index = {
			file: [],
			names: [],
			namemap: []
		};
		try {
			if (!fs.existsSync(`./data/${lang}/${folder}`)) continue;

			fs.readdirSync(`./data/${lang}/${folder}`).forEach(filename => {
				if(!filename.endsWith('.json')) return;

				const data = require(`./data/${lang}/${folder}/${filename}`);
				if(data.name === undefined || data.name === "") return; // go next file if this one doesn't have name property

				index.names.push(data.name);
				index.file.push(filename);
				index.namemap.push(data.name);
				if(design.altnames[folder] !== undefined) {
					for(let altname of design.altnames[folder]) { // add all the altnames to the index
						let values = data[altname];
						if(values === undefined || values === "") continue;
						if(!Array.isArray(values))
							values = [values];
						for(let val of values) {
							if(val !== undefined && val !== "") {
								index.file.push(filename);
								index.namemap.push(val)
							}
						}
					}
				}

				if(design.indexByCategories[folder] === undefined) return; // go next if nothing else to index
				// add additional category indexes
				for(const prop of design.indexByCategories[folder]) {
					let values = data[prop];
					if(values === undefined || values === "" ) continue; // go next if our data doesn't have that category as a property
					if(!Array.isArray(values)) values = [values]; // make into array

					for(let val of values) {
						if(categories[prop] === undefined) console.log("missing category: "+folder+ ","+prop);
						if(prop === "ingredients") val = val.replace(/ x\d$/i, '');
						else if(prop === "birthday") val = val.replace(/ [0-9]+/, '');

						if(categories[prop] === "free" || categories[prop].includes(val)) {
							if(index[val] === undefined)
								index[val] = [data.name];
							else
								index[val].push(data.name);
						} else { console.log(filename + " missing val: " + val)}
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
	console.log("done");
}
