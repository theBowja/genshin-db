const helper = require('../helper.js');
const fs = require('fs');
const execSync = require('child_process').execSync;

const namespace = 'tcg';


// const packagejson = require('../../package.json');

const file = helper.readAndCacheFile(namespace, './package.json', 'json');

console.log(file);


helper.restoreFilesFromCache(namespace);

	// Read and cache the files we want to change.

	// Make changes to the files and save it.

	// Run extra scripts.

	// Publish the package
	// execSync('npm publish', { stdio:[0, 1, 2] });

	// Restore the cached copy of the file and save it.

	// Run extra scripts.