const fs = require('fs');

// THIS SCRIPT GENERATES INDEX.JSON FOR EACH SET OF DATA

const langs = ['english', 'japanese']

// foreach lang
let index;

index = {
	english: {
		file: [],
		name: []
	},
	japanese: {
		file: [],
		name: []
	}
	// male: [], female: [], // these probably won't work here
	// 4: [], 5: [],
	// bow: [], sword: [], catalyst: [], claymore: [],
	// geo: [], pyro: [], cryo: [], hydro: [], dendro: [], electro: [], adaptive: []
};
fs.readdirSync('./english/characters').forEach(filename => {
	if(!filename.endsWith('.json')) return;

	const file = require('./english/characters/'+filename);
	if(file.name !== undefined) {
		index['english'].file.push(filename);
		index['english'].name.push(file.name.toLowerCase());
	}
})
fs.readdirSync('./japanese/characters').forEach(filename => {
	if(!filename.endsWith('.json')) return;

	const file = require('./japanese/characters/'+filename);
	if(file.name !== undefined) {
		index['japanese'].file.push(filename);
		index['japanese'].name.push(file.name);
	}
})

fs.writeFileSync('./index/characters.json', JSON.stringify(index, null, 2));
