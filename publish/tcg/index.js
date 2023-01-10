const helper = require('../helper.js');
const fs = require('fs');
const execSync = require('child_process').execSync;

const namespace = 'tcg';



const packagejson = helper.readAndCacheFile(namespace, './package.json', 'json');
const replacementpackagejson = require('./package.json');
for (let [key, value] of Object.entries(replacementpackagejson))
	packagejson[key] = value;

helper.writeFile('./package.json', JSON.stringify(packagejson, null, '\t'));



console.log(packagejson);


helper.restoreFilesFromCache(namespace);

	// Read and cache the files we want to change.

	// Make changes to the files and save it.

	// Run extra scripts.

	// Publish the package
	// execSync('npm publish', { stdio:[0, 1, 2] });

	// Restore the cached copy of the file and save it.

	// Run extra scripts.