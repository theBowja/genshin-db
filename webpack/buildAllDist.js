// Script to build the js/gzip stuff in the dist folder.

const fs = require('fs');
const design = require('../src/design.json');
const languagesArr = require('../src/language.js').languages;
const foldersArr = Object.values(require('../src/folder.js'));

const execSync = require('child_process').execSync;


/* ====== GZIP ====== */

fs.mkdirSync('./dist/data/gzips', { recursive: true });
for(const language of languagesArr.concat(['alllanguages'])) {
	for(const folder of foldersArr.concat(['allfolders', 'standard'])) {
		const filepath = `../dist/data/gzips/${language.startsWith('all') ? 'all' : language.toLowerCase()}-${folder.startsWith('all') ? 'all' : folder.toLowerCase()}.min.json.gzip`;
		execSync(`node ./generate.js gzipfilename:${filepath} ${language} ${folder}`, { cwd: 'src', stdio: [0, 1, 2] });
		console.log();
	}
}

// for(const folder of foldersArr) {
// 	const filepath = `../dist/data/gzips/${language.toLowerCase()}-${folder.toLowerCase()}.min.json.gzip`;
// 	execSync(`node ./generate.js gzipfilename:${filepath} ${folder}`, { cwd: 'src', stdio: [0, 1, 2] });
// 	console.log();
// }

// for(const language of languagesArr) {
// 	const filepath = `../dist/data/gzips/${language.toLowerCase()}-all.min.json.gzip`;
// 	execSync(`node ./generate.js gzipfilename:${filepath} ${language}`, { cwd: 'src', stdio: [0, 1, 2] });
// 	console.log();
// }




// const arg = process.argv.slice(2).join(' ');

// execSync('node ./generate.js ' + arg, { cwd: 'src', stdio: [0, 1, 2] });
// // execSync('node ./examples.js', { stdio: [0, 1, 2] });
// execSync('npx webpack', { stdio:[0, 1, 2] });