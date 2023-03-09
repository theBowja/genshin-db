// Script to build the js/gzip stuff in the dist folder.

// This script should be called from the root directory.

const fs = require('fs');
const path = require('path');
const design = require('../../src/design.json');
const languagesArr = require('../../src/language.js').languages;
const foldersArr = require('../../src/folder.js').folders;

const execSync = require('child_process').execSync;

// Gets the filename without extension
function getBaseFilename(filename) {
	if(!filename.includes('.')) return filename;
	return filename.substring(0, filename.indexOf('.'));
}

const argv = require('yargs-parser')(process.argv.slice(2), {
	default: { outdir: 'dist' }
});
const outdir = argv.outdir ; // The directory where data/gzips, data/scripts, and genshindb-none.js will be outputted.

/* ====== GZIP ====== */

const filenamelist = [];
fs.mkdirSync(path.resolve(outdir, 'data/gzips'), { recursive: true });
for(const language of languagesArr) {
	for(const folder of foldersArr) {
		const filename = `${language.toLowerCase()}-${folder.toLowerCase()}.min.json.gzip`
		filenamelist.push(filename);
		const filepath = path.resolve(outdir, `data/gzips/${filename}`);
		execSync(`npm run combineData -- --gzipfilepath ${filepath} --language ${language} --folder ${folder}`, { stdio: [0, 1, 2] });
		console.log();
	}
}

// remove unused gzips/scripts
fs.readdirSync(path.resolve(outdir, 'data/gzips')).forEach(file => {
	if(!filenamelist.includes(file)) {
		try { fs.unlinkSync(path.resolve(outdir, `data/gzips/${file}`));                       } catch(e) {}
		try { fs.unlinkSync(path.resolve(outdir, `data/scripts/${getBaseFilename(file)}.js`)); } catch(e) {}
		console.log(`removed unused ${getBaseFilename(file)}`);
	}
})

/* ====== SCRIPT ====== */

// data loader scripts
for(const gzipfilename of filenamelist) {
	execSync(`npx webpack --config scripts/webpack/webpack.data.config.js --env outdir=${path.resolve(outdir, `data/scripts`)} --env gzipfilepath=${path.resolve(outdir, `data/gzips/${gzipfilename}`)} --env basename=${getBaseFilename(gzipfilename)}`, { stdio:[0, 1, 2] });
	console.log();
}

// main script
execSync(`npm run build -- --folder none --language none --filename genshindb-nodata.js --outdir ${outdir}`);