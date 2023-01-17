/**
 * This script should be called from project root.
 * This script should be located in the `scripts/publish` directory of the project root.
 * 
 * Examples:
 *   npm run publish tcg
 *   npm run publish english
 */

const fs = require('fs');
const path = require('path');
const execSync = require('child_process').execSync;

// The directory names are valid input parameters to this script.
const validNames = fs.readdirSync(__dirname, { withFileTypes: true }).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name);

const argsArr = process.argv.slice(2).filter(e => validNames.includes(e));

for (const topublish of argsArr) {
	console.log(`Publishing ${topublish}...`);
	require(`./${topublish}/index.js`);
}
console.log(`Finished publishing packages.`);