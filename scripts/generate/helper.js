const fs = require('fs');
const languagejs = require('../../src/language.js');
const design = require('../../src/design.json');
const folderjs = require('../../src/folder.js');

function sanitizeLanguages(languages, log=true) {
	let specificlanguages = [];
	if (languages.includes('all')) {
		specificlanguages = languagejs.languages;
		if (log) console.log('Specified languages: all');
	} else if (languages.includes('none')) {
		specificlanguages = [];
		if (log) console.log('Specified languages: none');
	} else {
		specificlanguages = languagejs.format(languages);
		if (log) console.log(`Specified languages: ${specificlanguages.length === 0 ? 'none' : specificlanguages.join(' ')}`);
	}
	specificlanguages = [...new Set(specificlanguages)];
	return specificlanguages;
}

function sanitizeFolders(folders, log=true) {
	let specificfolders = [];
	let logFolders = [];
	for (const argFolder of folders) {
		if (argFolder === 'all') {
			specificfolders = design.folders;
			logFolders = ['all'];
			break;
		} else if (argFolder === 'none') {
			specificfolders = [];
			logFolders = ['none'];
			break;
		} else if (argFolder === 'standard') {
			specificfolders = specificfolders.concat(design.standard);
			logFolders.push('standard');
		} else if (argFolder === 'tcg') {
			specificfolders = specificfolders.concat(design.tcg);
			logFolders.push('tcg');
		} else {
			const tmp = folderjs.format(argFolder);
			if (tmp) {
				specificfolders.push(tmp);
				logFolders.push(tmp);
			}
		}
	}
	logFolders = [...new Set(logFolders)];
	specificfolders = [...new Set(specificfolders)];
	if (log) console.log(`Specified folders: ${logFolders.length === 0 ? 'none' : logFolders.join(' ')}`);
	return specificfolders;
}

function writeJsonIfDifferent(path, data) {
	let existing = {};
	try { existing = require(path); } catch {};
	if(JSON.stringify(existing) !== JSON.stringify(data)) {
		if(path.lastIndexOf('/') !== -1)
			fs.mkdirSync(path.substring(0, path.lastIndexOf('/')), { recursive: true });
		fs.writeFileSync(path, JSON.stringify(data, null, '\t'));
	}
}

module.exports = {
	sanitizeLanguages: sanitizeLanguages,
	sanitizeFolders: sanitizeFolders,
	writeJsonIfDifferent: writeJsonIfDifferent
}