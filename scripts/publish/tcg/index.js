const helper = require('../helper.js');
const fs = require('fs');
const execSync = require('child_process').execSync;

const namespace = 'tcg';

// This script should not be run directly.

// Backup generated files.
helper.backupGeneratedFiles();

// Read and cache the files we want to change.
const packagejson = helper.readAndCacheFile(namespace, './package.json', 'json');

// Make changes to the files.
const replacementpackagejson = require('./replacementpackage.json');
for (let [key, value] of Object.entries(replacementpackagejson))
	packagejson[key] = value;

// Save the files.
helper.writeFile('./package.json', JSON.stringify(packagejson, null, '\t'));

// Build genshin-db and re-generate dynamic files.
execSync('npm run makeIndex -- --folders tcg', { stdio: [0, 1, 2] });
execSync('npm run combineData -- --folders tcg', { stdio: [0, 1, 2] });

// Publish the scoped package.
execSync('npm publish --access public', { stdio:[0, 1, 2] });

// Restore the cached copy of all the files.
helper.restoreFilesFromCache(namespace);

// Restore generated files.
helper.restoreGeneratedFiles();