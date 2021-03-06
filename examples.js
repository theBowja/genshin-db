// THIS SCRIPT GENERATES THE EXAMPLES.MD FILE

const fs = require('fs');
const util = require('util');
const genshin = require('./src/main.js');

function codeStart() { return '```js\n'; };
function codeEnd() { return '\n```\n'; };

let header = `# Examples\n\nFirst start off with:\n${codeStart()}const genshin = require('genshin-db');${codeEnd()}`

let folders = [
	{
		function: 'characters',
		params: ['amber', 'carmen', 'december', 'pyro', 'geo dmg', 'liyue', 'sword', 'ballad']
	},
	{
		function: 'talents',
		params: ['ninguang', 'klee/.passive3', 'mona/.combatsp'],
	},
	{
		function: 'constellations',
		params: ['amber', 'childe/.c3'],
	},
	{
		function: 'weapons',
		params: ['lost prayers', 'decarabian'],
	},
	{
		function: 'weaponmaterialtypes',
		params: ['chains', 'fri'],
	},
	{
		function: 'talentmaterialtypes',
		params: ['ballad', 'satur'],
	},
	{
		function: 'artifacts',
		params: ['flame'],
	},
	{
		function: 'recipes',
		params: ['temptation', '4', 'warrior', 'cabbage', 'atK', 'diluc'],
	},
	{
		function: 'elements',
		params: [],
	},
	{
		function: 'rarity',
		params: [],
	},
];

// converts an object into a pretty string. garbage.
function convertToText(obj, indent) {

}


let output = header+'\n';
output += '## Table of Contents\n\n';

folders.forEach(folder => {
	output += `- [genshin.${folder.function}(query[, opts])](#genshin${folder.function}query-opts)\n`;
});

folders.forEach(folder => {
	output += `\n## genshin.${folder.function}(query[, opts])]\n\n`;
	folder.params.forEach(param => {
		output += '<details>\n';
		let [inside, outside] = param.split('/')
		//genshin.talents('klee').passive3
		let summary = `genshin.${folder.function}('<b>${inside}</b>')${outside ? `<b>${outside}</b>` : ''}`;
		let call = `genshin.${folder.function}('${inside}')${outside ? outside : ''}`;
		let result = util.inspect(eval(call), false, null);
		output += `<summary>${summary}</summary>\n`
		output += '\n' + codeStart() + result + codeEnd() + '\n'

		output += '</details>\n';
	});

});


fs.writeFileSync(`./EXAMPLES.md`, output);
