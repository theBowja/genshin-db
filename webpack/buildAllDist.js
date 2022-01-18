// Script to build the js/gzip stuff in the dist folder.

const fs = require('fs');
const path = require('path');
const design = require('../src/design.json');
const languagesArr = require('../src/language.js').languages;
const foldersArr = Object.values(require('../src/folder.js'));

const execSync = require('child_process').execSync;

// gets the filename without extension
function getBaseFilename(filename) {
	if(!filename.includes('.')) return filename;
	return filename.substring(0, filename.indexOf('.'));
}

/* ====== GZIP ====== */

const filenamelist = [];
fs.mkdirSync('./dist/data/gzips', { recursive: true });
for(const language of languagesArr.concat(['alllanguages'])) {
	for(const folder of foldersArr.concat(['allfolders', 'standard'])) {
		const filename = `${language.startsWith('all') ? 'all' : language.toLowerCase()}-${folder.startsWith('all') ? 'all' : folder.toLowerCase()}.min.json.gzip`
		filenamelist.push(filename);
		const filepath = `../dist/data/gzips/${filename}`;
		execSync(`node ./generate.js gzipfilename:${filepath} ${language} ${folder}`, { cwd: 'src', stdio: [0, 1, 2] });
		console.log();
	}
}

// remove unused gzips/scripts
fs.readdirSync('./dist/data/gzips').forEach(file => {
	if(!filenamelist.includes(file)) {
		try { fs.unlinkSync(`./dist/data/gzips/${file}`);                       } catch(e) {}
		try { fs.unlinkSync(`./dist/data/scripts/${getBaseFilename(file)}.js`); } catch(e) {}
		console.log(`removed unused ${getBaseFilename(file)}`);
	}
})

/* ====== SCRIPT ====== */

// data loaders
for(const outputpath of filenamelist) {
	execSync(`npx webpack --config webpack/webpack.data.config.js --env basename=${getBaseFilename(outputpath)}`, { stdio:[0, 1, 2] });
	console.log();
}

// main scripts
execSync('npm run build none filename:genshindb-none.js', { stdio:[0, 1, 2] });
execSync('npm run build standard filename:genshindb-standard.js', { stdio:[0, 1, 2] });