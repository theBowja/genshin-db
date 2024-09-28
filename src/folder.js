const fuzzysort = require('fuzzysort');
const { folders, FoldersEnum } = require('./constants');

function autocompleteFolder(input) {
    let result = fuzzysort.go(input, folders, { limit: 1 })[0];
    return result === undefined ? undefined : result.target;
}

/**
 * @param folders - a string or array of strings
 * @returns {string | string[] | undefined} - autocompleted full name of the folder. see FoldersEnum.
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
	FoldersEnum,
	folders, // Object.values(FoldersEnum)
	format
};