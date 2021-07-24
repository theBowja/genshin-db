// THIS SCRIPT GENERATES THE EXAMPLES.MD FILE
// uses util.inspect which is NODE only

const fs = require('fs');
const util = require('util');
const genshindb = require('./src/main.js');

function codeStart() { return '```js\n'; };
function codeEnd() { return '\n```\n'; };
const libname = 'genshindb';

let header = `# Examples\n\nFirst start off with:\n${codeStart()}const ${libname} = require('genshin-db');${codeEnd()}`

let folders = [
	{
		function: 'characters',
		params: ['names, { matchCategories: true }', 'ganyu', 'amber, { resultLanguage: \'JP\' }',
				 'アンバー, { queryLanguages: \'Japanese\', resultLanguage: \'Spanish\' }', 'childe, { matchAliases: true }',
				 'carmen, { matchAliases: true }',
				 'december, { matchCategories: true }', 'pyro, { matchCategories: true }',
				 'geo dmg, { matchCategories: true }', 'liyue, { matchCategories: true }',
				 'sword, { matchCategories: true }',
				 'klee/.stats(90)', 'klee/.stats(80)', 'klee/.stats(80, \'+\')', 'aether/.stats(12)']
	},
	{
		function: 'talents',
		params: ['names, { matchCategories: true }', 'ninguang', 'ningguang/.costs', 'klee/.passive3', 'mona/.combat1',
				 'mona/.combat2', 'mona/.combatsp', 'mona/.combat3', 'ballad, { matchCategories: true }',
				 'dvalin sigh, { matchCategories: true }', 'arrowhead, { matchCategories: true }'],
	},
	{
		function: 'constellations',
		params: ['amber', 'childe/.c3', 'traveler geo'],
	},
	{
		function: 'weapons',
		params: ['names, { matchCategories: true }',
				 'lost prayers', 'decarabian, { matchCategories: true }',
				 'dull blade/.stats(49)', 'sac sword/.stats(80, \'+\')', 'wolf grave/.stats(90)'],
	},
	{
		function: 'weaponmaterialtypes',
		params: ['chains', 'fri, { matchCategories: true }'],
	},
	{
		function: 'talentmaterialtypes',
		params: ['ballad', 'satur, { matchCategories: true }'],
	},
	{
		function: 'materials',
		params: ['ballad', 'talent material, { matchCategories: true }',
				 'weapon material, { matchCategories: true, verboseCategories: true }/.filter(ele => ele.rarity === "2").map(ele => ele.name)',
				 'dvalin sigh', 'iron', 'monday, { matchCategories: true }', 'ingredient, { matchCategories: true }',
		         'liyue, { matchCategories: true }'],
	},
	{
		function: 'artifacts',
		params: ['flame', '5, { matchCategories: true }', 'noblesse/[\'2pc\']'],
	},
	{
		function: 'foods',
		params: ['temptation', '4, { matchCategories: true }', 'def, { matchCategories: true }',
		         'cabbage, { matchCategories: true }', 'diluc, { matchAliases: true }'],
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

let output = header+'\n';
output += '## Table of Contents\n\n';

folders.forEach(folder => {
	output += `- [${libname}.${folder.function}(query[, opts])](#${libname.toLowerCase()}${folder.function}query-opts)\n`;
});

folders.forEach(folder => {
	output += `\n## ${libname}.${folder.function}(query[, opts])]\n\n`;
	folder.params.forEach(param => {
		output += '<details>\n';
		let [inside, outside] = param.split('/')
		let [query, ...opts] = inside.split(',');
		opts = (opts.length === 0) ? '' : ','+opts;
		//genshin.talents('klee').passive3
		let summary = `${libname}.${folder.function}('<b>${query}'${opts}</b>)${outside ? `<b>${outside}</b>` : ''}`;
		let call = `${libname}.${folder.function}('${query}'${opts})${outside ? outside : ''}`;
		let result = util.inspect(eval(call), false, null);
		output += `<summary>${summary}</summary>\n`
		output += '\n' + codeStart() + result + codeEnd() + '\n'

		output += '</details>\n';
	});

});


fs.writeFileSync(`./EXAMPLES.md`, output);
console.log('finished EXAMPLES.md');