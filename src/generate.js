const fs = require('fs');

// THIS SCRIPT GENERATES INDEX.JSON FOR EACH SET OF DATA
// if you ask me to explain the code i wrote below, i would reply i dunno

const design = require('./design.json');

for(const lang of design.languages) {
	let categories = require(`./${lang}/categories.json`);
	for(const folder of design.folders) {
		let index = {
			file: [],
			names: []
		};
		fs.readdirSync(`./${lang}/${folder}`).forEach(filename => {
			if(!filename.endsWith('.json')) return;

			const data = require(`./${lang}/${folder}/${filename}`);
			if(data.name === undefined) return; // go next file if this one doesn't have name property

			index.file.push(filename);
			index.names.push(data.name);

			if(design.indexByCategories[folder] === undefined) return; // go next if nothing else to index
			// add additional category indexes
			for(const prop of design.indexByCategories[folder]) {
				if(categories[prop].includes(data[prop])) {
					let tmp = data[prop];
					if(index[tmp] === undefined)
						index[tmp] = [data.name];
					else
						index[tmp].push(data.name);
				}
			}
		})
		fs.writeFileSync(`./index/${lang}/${folder}.json`, JSON.stringify(index, null, '\t'));
	}
}
