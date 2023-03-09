const fuzzysort = require('fuzzysort');

// enum for folders. // make sure update index.d.ts too
// not really used internally. mainly for altnames api
const FoldersEnum = {
	characters     : 'characters',
	outfits        : 'outfits',
	talents        : 'talents',
	constellations : 'constellations',
	
	weapons        : 'weapons',

	foods          : 'foods',
	materials      : 'materials',
	crafts         : 'crafts',
	weaponmaterialtypes: 'weaponmaterialtypes',
	talentmaterialtypes: 'talentmaterialtypes',

	artifacts      : 'artifacts',
	domains        : 'domains',
	enemies        : 'enemies',

	rarity         : 'rarity',
	elements       : 'elements',

	achievements   : 'achievements',
	achievementgroups: 'achievementgroups',

	windgliders    : 'windgliders',
	animals        : 'animals',
	namecards      : 'namecards',
	geographies    : 'geographies',
	adventureranks : 'adventureranks',

	tcgactioncards:    'tcgactioncards',
	tcgcardbacks:      'tcgcardbacks',
	tcgcardboxes:      'tcgcardboxes',
	tcgcharactercards: 'tcgcharactercards',
	tcgdetailedrules:  'tcgdetailedrules',
	tcgkeywords:       'tcgkeywords',
	tcglevelrewards:   'tcglevelrewards',
	tcgstatuseffects:  'tcgstatuseffects',
	tcgsummons:        'tcgsummons'
};

const folders = Object.values(FoldersEnum);

function autocompleteFolder(input) {
    let result = fuzzysort.go(input, folders, { limit: 1 })[0];
    return result === undefined ? undefined : result.target;
}

/**
 * @param folders - a string or array of strings
 * @returns - autocompleted full name of the folder. see FoldersEnum.
 *            undefined if none of the strings are valid folders.
 */
function format(folders) {
    if(typeof folders === 'string') {
        return autocompleteFolder(folders);
    } else if(Array.isArray(folders)) {
        let tmp = [];
        for(let f of folders) {
            f = format(f);
            if(f && !tmp.includes(f)) tmp.push(f);
        }
        if(tmp.length) return tmp;
    }
    return undefined;
}

module.exports = {
	FoldersEnum: FoldersEnum,
	folders: folders, // Object.values(FoldersEnum)
	format: format
};