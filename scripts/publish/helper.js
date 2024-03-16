const fs = require('fs');
const path = require('path');
const helper = {};

// The main script should be called from project root.

const cache = {};

helper.readAndCacheFile = function(namespace, pathfromprojectroot, filetype) {
	if (cache[namespace] === undefined) cache[namespace] = {};

	switch (filetype) {
		case 'json':
		    cache[namespace][pathfromprojectroot] =  fs.readFileSync(`./${pathfromprojectroot}`);
			return require(`../../${pathfromprojectroot}`);

		case 'md':
		case 'txt':
		case 'd.ts':
			cache[namespace][pathfromprojectroot] = fs.readFileSync(`./${pathfromprojectroot}`).toString();
			return cache[namespace][pathfromprojectroot];
	}
	return undefined;
};

helper.writeFile = function(pathfromprojectroot, contents) {
	fs.writeFileSync(`./${pathfromprojectroot}`, contents);
};

helper.restoreFilesFromCache = function(namespace) {
	if (cache[namespace] === undefined) return;

	for (let [filepath, contents] of Object.entries(cache[namespace])) {
		fs.writeFileSync(`./${filepath}`, contents); // from project root
	}
};

let isBackedUp = false;
helper.backupGeneratedFiles = function() {
	if (isBackedUp) return console.log('ERROR backupGeneratedFiles: There are already existing files backed up');
	fs.renameSync(`./src/min/data.min.json`, `./src/min/data.min.json.tmp`); // from projectroot
	fs.renameSync(`./src/min/data.min.json.gzip`, `./src/min/data.min.json.gzip.tmp`); // from projectroot
	isBackedUp = true;
};

helper.restoreGeneratedFiles = function() {
	if (!isBackedUp) return console.log('ERROR restoreGeneratedFiles: No files have been backed up.');
	fs.renameSync(`./src/min/data.min.json.tmp`, `./src/min/data.min.json`); // from projectroot
	fs.renameSync(`./src/min/data.min.json.gzip.tmp`, `./src/min/data.min.json.gzip`); // from projectroot
	isBackedUp = false;
};

module.exports = helper