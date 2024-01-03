const genshindb = require('../../src/main.js');

const folders = Object.values(genshindb.Folder).filter(e => !e.startsWith('tcg'));
// console.log(folders);

genshindb.setOptions({ v4Props: true, v4PropsOnly: true });

// let res = genshindb.searchFolder('characters', 'itto');
// console.log(res);

for (const folder of folders) {
	const names = genshindb.searchFolder(folder, 'names', { matchCategories: true });
	// console.log(names);
	for (const name of names) {
		genshindb.searchFolder(folder, names);
	}
}

console.log(`Congrats. The program didn't crash.`);