const fs = require('fs');
const path = require('path');
const helper = require('./helper.js');

const argv = require('yargs-parser')(process.argv.slice(2), {
	alias: { folder: ['folders'], language: ['languages'] },
	array: [ 'folders', 'languages' ],
	default: { folders: ['standard'], languages: ['all'], outdir: 'src/min' }
});

let specificlanguages = helper.sanitizeLanguages(argv.languages);
let specificfolders = helper.sanitizeFolders(argv.folders);

const gzipfilepath = argv.gzipfilepath;
if (gzipfilepath) console.log('Specified gzipfilepath: ' + gzipfilepath);

const outdir = argv.outdir ; // The directory where data.min.json and data.min.json.gzip will be outputted.

combineData();

function combineData() {
	console.log("Combining and minifying data, index, image, stats, curve, url, version");
	let mydata = {}, myindex = {}, myimage = {}, mystats = {}, mycurve = {}, myurl = {}, myversion = {};

	for(const lang of specificlanguages) {
		mydata[lang] = {};
		myindex[lang] = {};
		for(const folder of specificfolders) {
			if (!fs.existsSync(`../../src/data/${lang}/${folder}`)) continue;
			mydata[lang][folder] = {};
			myindex[lang][folder] = require(`../../src/data/index/${lang}/${folder}.json`);

			fs.readdirSync(`../../src/data/${lang}/${folder}`)
				.filter(filename => filename.endsWith('.json'))
				.map(filename => filename.substring(0, filename.length-5))
				.sort()
				.forEach(filename => {
					mydata[lang][folder][filename] = require(`../../src/data/${lang}/${folder}/${filename}`);
				});
		}
	}
	for(const folder of specificfolders) {
		if(fs.existsSync(`../../src/data/image/${folder}.json`))
			myimage[folder] = require(`../../src/data/image/${folder}.json`);
		if(fs.existsSync(`../../src/data/stats/${folder}.json`))
			mystats[folder] = require(`../../src/data/stats/${folder}.json`);
		if(fs.existsSync(`../../src/data/curve/${folder}.json`))
			mycurve[folder] = require(`../../src/data/curve/${folder}.json`);
		if(fs.existsSync(`../../src/data/url/${folder}.json`))
			myurl[folder] = require(`../../src/data/url/${folder}.json`);
		if(fs.existsSync(`../../src/data/version/${folder}.json`))
			myversion[folder] = require(`../../src/data/version/${folder}.json`);
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


	const genshindbroot = path.resolve(__dirname, '../../');
	const outputdir = path.resolve(genshindbroot, outdir);
	if (gzipfilepath) {
		fs.mkdirSync(path.dirname(gzipfilepath), { recursive: true });
		fs.writeFileSync(gzipfilepath, gzip);
	} else {
		fs.mkdirSync(outputdir, { recursive: true });
		fs.writeFileSync(path.resolve(outputdir, `data.min.json.gzip`), gzip);
	}

	if (!gzipfilepath) fs.mkdirSync(outputdir, { recursive: true });
	if (!gzipfilepath) fs.writeFileSync(path.resolve(outputdir, `data.min.json`), all);
}

function roundFour(num) {
	return Math.round((num + Number.EPSILON) * 10000) / 10000;
}