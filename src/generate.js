const fs = require('fs');

// THIS SCRIPT GENERATES INDEX.JSON FOR EACH SET OF DATA
// if you ask me to explain the code i wrote below, i would reply i dunno


const languages = ['english'];
const folders = ['characters', 'weapons'];
const indexByCategories = {
	characters: ['element', 'weapontype', 'gender', 'region', 'rarity'],
	weapons: ['weapontype', 'rarity']
}

for(const lang of languages) {
	let categories = require(`./${lang}/categories.json`);
	for(const folder of folders) {
		let index = {
			file: [],
			name: []
		};
		fs.readdirSync(`./${lang}/${folder}`).forEach(filename => {
			if(!filename.endsWith('.json')) return;

			const data = require(`./${lang}/${folder}/${filename}`);
			if(data.name === undefined) return; // go next file if this one doesn't have name property

			index.file.push(filename);
			index.name.push(data.name);

			if(indexByCategories[folder] === undefined) return; // go next if nothing else to index
			// add additional category indexes
			for(const prop of indexByCategories[folder]) {
				if(categories[prop].includes(data[prop])) {
					if(index[data[prop]] === undefined)
						index[data[prop]] = [data.name];
					else
						index[data[prop]].push(data.name);
				}
			}
		})
		fs.writeFileSync(`./index/${lang}/${folder}.json`, JSON.stringify(index, null, 2));
	}
}
