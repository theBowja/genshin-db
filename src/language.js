// @ts-check
const fuzzysort = require('fuzzysort');
const { languageMap, LanguagesEnum, languages, languageCodes, localeMap, languageDict } = require('./constants');


function autocompleteLanguage(input, dict) {
    let result = fuzzysort.go(input, dict, { limit: 1 })[0];
    if(result !== undefined)
    	result = result.target.length < 4 ? languageMap[result.target] : result.target;
    return result;
}

/**
 * @param langs - a string or array of strings
 * @returns - autocompleted full name of the language. see languageMap.
 *            undefined if none of the strings are valid languages.
 */
function format(langs) {
    if(typeof langs === 'string') {
        return autocompleteLanguage(langs, languageDict);
    } else if(Array.isArray(langs)) {
        let tmp = [];
        for(let l of langs) {
            l = format(l);
            if(l && !tmp.includes(l)) tmp.push(l);
        }
        if(tmp.length) return tmp;
    }
    return undefined;
}

module.exports = {
	LanguagesEnum,
	languages, // array of strings
	languageCodes,
	languageMap,
	localeMap,
	format
};