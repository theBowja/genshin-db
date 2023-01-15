// THIS SCRIPT GENERATES THE EXAMPLES.MD FILE
// uses util.inspect which is NODE only

const fs = require('fs');
const util = require('util');

const genshindb = require('../../src/main.js');

function codeStart() { return '```js\n'; };
function codeEnd() { return '\n```\n'; };
const libname = 'genshindb';

let header = `# Examples\n\nFirst start off with:\n${codeStart()}const ${libname} = require('genshin-db');${codeEnd()}`

let folders = [
	{
		function: 'characters',
		params: ['names, { matchCategories: true }',
				 'ganyu',
				 'ayaka/.costs',
				 'amber, { resultLanguage: \'JP\' }',
				 'アンバー, { queryLanguages: \'Japanese\', resultLanguage: \'Spanish\' }',
				 'childe, { matchAliases: true }',
				 'carmen, { matchAliases: true }',
				 'arrowhead, { matchCategories: true }',
				 'arrow, { dumpResult: true, matchCategories: true, resultLanguage: \'jp\' }',
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
				 'lost prayers',
				 'staff homa/.costs',
				 'iron point/.costs',
				 'decarabian, { matchCategories: true }',
				 'slime condensate, { matchCategories: true }',
				 'dull blade/.stats(49)', 'sac sword/.stats(80, \'+\')', 'wolf grave/.stats(90)'],
	},
	{
		function: 'materials',
		params: ['ballad', 'talent material, { matchCategories: true }',
				 'fish, { matchNames: false, matchCategories: true }',
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
		function: 'domains',
		params: ['flame', 'cecilia garden, { matchCategories: true }', 'inazuma, { matchCategories: true }',
				 'anemo, { matchCategories: true }',
		         'artifact, { matchCategories: true }', 'wednesday, { matchCategories: true }',
		         'fatui pyro agent, { matchCategories: true }']
	},
	{
		function: 'enemies',
		params: ['large electro slime', 'boss, { matchCategories: true }']
	},
	{
		function: 'outfits',
		params: ['outrider', 'jean, { matchCategories: true }']
	},
	{
		function: 'windgliders',
		params: ['storm']
	},
	{
		function: 'animals',
		params: ['shiba', 'birds, { matchCategories: true }', 'true, { matchNames: false, matchCategories: true }']
	},
	{
		function: 'namecards',
		params: ['klee']
	},
	{
		function: 'geographies',
		params: ['library', 'liyue, { matchCategories: true }']
	},
	{
		function: 'adventureranks',
		params: ['20', '60']
	},
	// { // these are not part of the standard db
	// 	function: 'achievements',
	// 	params: ['chill', 'challenger I, { matchCategories: true }']
	// },
	// {
	// 	function: 'achievementgroups',
	// 	params: ['challenger II']
	// },
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
		try {
			let result = util.inspect(eval(call), false, null);
			output += `<summary>${summary}</summary>\n`
			output += '\n' + codeStart() + result + codeEnd() + '\n'
			if(result === 'undefined') {
				console.log('missing '+call);
			}
		} catch(e) {
			console.log('missing '+call);
		}
		output += '</details>\n';
	});

});


fs.writeFileSync(`../../examples/EXAMPLES.md`, output);
console.log('finished updating EXAMPLES.md');