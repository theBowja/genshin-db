const fs = require('fs');

// THIS SCRIPT GENERATES INDEX.JSON FOR EACH SET OF DATA

const languages = ['english']

for(const lang of languages) {
	let index = {
		file: [],
		name: []
	};
	let categories = require(`./${lang}/categories.json`);
	fs.readdirSync(`./${lang}/characters`).forEach(filename => {
		if(!filename.endsWith('.json')) return;

		const data = require(`./${lang}/characters/${filename}`);
		if(data.name === undefined) return;

		index.file.push(filename);
		index.name.push(data.name);

		for(const [key, values] of Object.entries(categories)) {
			if(values.includes(data[key])) {
				if(index[data[key]] === undefined)
					index[data[key]] = [data.name];
				else
					index[data[key]].push(data.name);
			}
		}
	})
	fs.writeFileSync(`./index/${lang}/characters.json`, JSON.stringify(index, null, 2));
}
