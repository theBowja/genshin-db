const fs = require('fs');

const cache = {};

function readAndCacheFile(namespace, pathfromprojectroot, filetype) {
	if (cache[namespace] === undefined) cache[namespace] = {};

	switch (filetype) {
		case 'json':
			const file = require(`../${pathfromprojectroot}`);
		    cache[namespace][pathfromprojectroot] = JSON.stringify(file, null, '\t');
			return file;

		case 'md':
		case 'txt':

			return '';
	}
	return undefined;
}

function restoreFilesFromCache(namespace) {
	if (cache[namespace] === undefined) return;

	for (let [filepath, contents] of Object.entries(cache[namespace])) {
		fs.writeFileSync(`../${filepath}`, contents);
	}
}

module.exports = {
	readAndCacheFile: readAndCacheFile,
	restoreFilesFromCache: restoreFilesFromCache
};