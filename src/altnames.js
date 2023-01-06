const { FoldersEnum } = require('./folder.js');
const { LanguagesEnum } = require('./language.js');
const { getIndex } = require('./getdata.js');

// object to export
let altnames = {}


let altnameindex = { count: 0 };

/* type checking of altnameindex
{
	count: number;
	[folder: FoldersEnum]?: {
		[language: LanguagesEnum]?: {
			[altname: string]: filename; // filename is a string
		}
	}	
}
*/

let baselimits = {
	maxLength: 100,
	maxCount: 1000
};


function isValidFolder(folder) {
	return typeof folder === 'string' && FoldersEnum[folder];
}
function isValidLanguage(language) {
	return typeof language === 'string' && LanguagesEnum[language];
}
function isValidAltName(altname) {
	return typeof altname === 'string' && altname.length > 0 && altname.length <= baselimits.maxLength;
}
function isValidFilename(filename, language, folder) {
	if(typeof filename !== 'string') return false;
	const index = getIndex(language, folder);
	return index !== undefined && index.namemap[filename] !== undefined;
}

function isEmpty(obj) {
	for(let x in obj) { if(obj.hasOwnProperty(x)) return false; }
	return true;
}

altnames.setLimit = function(limits) {
	if(typeof limits.maxLength  === 'number')
		baselimits.maxLength = limits.maxLength;
	if(typeof limits.maxCount === 'number')
		baselimits.maxCount = limits.maxCount;
}

// see examples at the bottom of this script
altnames.addAltName = function(language, folder, altname, filename) {
	if(!isValidLanguage(language) || !isValidFolder(folder)) return false;
	if(!isValidAltName(altname) || !isValidFilename(filename, language, folder)) return false;
	if(altnameindex.count >= baselimits.maxCount) return false;

	if(!altnameindex[language])
		altnameindex[language] = {};
	if(!altnameindex[language][folder])
		altnameindex[language][folder] = {};
	altnameindex[language][folder][altname]	= filename;
	altnameindex.count++;
	return true;
}

altnames.removeAltNames = function(language, folder, altname) {
	if(!isValidLanguage(language) || !isValidFolder(folder)) return false;
	if(typeof altname !== 'undefined' && typeof altname !== 'string') return false;

	try {
		if(altname !== undefined) {
			altnameindex.count--;
			delete altnameindex[language][folder][altname];
		} else {
			altnameindex.count -= Object.keys(altnameindex[language][folder]).length;
			delete altnameindex[language][folder];
		}

		if(isEmpty(altnameindex[language][folder])) delete altnameindex[language][folder];
		if(isEmpty(altnameindex[language])) delete altnameindex[language];
	} catch(e) {}
	return true;
}

// get string[] of all altnames for a language/folder. empty array if doesn't exist.
altnames.getAltNamesList = function(language, folder) {
	if(altnameindex[language] && altnameindex[language][folder])
		return Object.keys(altnameindex[language][folder]);
	else
		return [];
}

altnames.getFilename = function(language, folder, altname) {
	if(altnameindex[language] && altnameindex[language][folder] && altnameindex[language][folder][altname])
		return altnameindex[language][folder][altname];
	else
		return undefined;
}

// add default altnames
altnames.addAltName('English', 'characters', 'Childe', 'tartaglia');
altnames.addAltName('English', 'talents', 'Childe', 'tartaglia');
altnames.addAltName('English', 'constellations', 'Childe', 'tartaglia');

altnames.addAltName('English', 'characters', 'Baal', 'raidenshogun');
altnames.addAltName('English', 'talents', 'Baal', 'raidenshogun');
altnames.addAltName('English', 'constellations', 'Baal', 'raidenshogun');

altnames.addAltName('English', 'talents', 'Anemo Traveler', 'traveleranemo');
altnames.addAltName('English', 'talents', 'Electro Traveler', 'travelerelectro');
altnames.addAltName('English', 'talents', 'Geo Traveler', 'travelergeo');
altnames.addAltName('English', 'constellations', 'Anemo Traveler', 'traveleranemo');
altnames.addAltName('English', 'constellations', 'Electro Traveler', 'travelerelectro');
altnames.addAltName('English', 'constellations', 'Geo Traveler', 'travelergeo');

altnames.addAltName('English', 'enemies', 'Dvalin', 'stormterror');

module.exports = altnames;