/**
 * This script should be located in the `publish` directory of the project root.
 * 
 * Examples:
 *   npm run publish tcg
 *   npm run publish english
 */

const fs = require('fs');
const execSync = require('child_process').execSync;

const validNames = fs.readdirSync('./', { withFileTypes: true }).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name);

const argsArr = process.argv.slice(2).filter(e => validNames.includes(e));

for (const topublish of argsArr) {
	// const files = fs.readdirSync(`./${topublish}`);
	require(`./${topublish}/index.js`);
	// console.log(files);




	// Read and cache the files we want to change.

	// Make changes to the files and save it.

	// Run extra scripts.

	// Publish the package
	// execSync('npm publish', { stdio:[0, 1, 2] });

	// Restore the cached copy of the file and save it.

	// Run extra scripts.
}