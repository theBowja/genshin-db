/**
 * The Library's valid options
 */
class Options {
    /**
     * 
     * @param {boolean} dumpResult - If true, returns additional data such as the query, folder, what matched, the options, and the filename. The results of the search is found in the 'result' property. 
     * @param {boolean} matchNames - Allows normal matching for the data of all names. Default true.
     * @param {boolean} matchAltNames - Allows the matching of alternate or custom names.
     * @param {boolean} matchAliases - Allows the matching of aliases.
     * @param {boolean} matchCategories - Allows the matching of categories. If true, returns an array of the categories that matched.
     * @param {boolean} verboseCategories - Used if a category is matched. If true, then replaces each string name in the array with the data object instead
     * @param {Array<String>} queryLanguages - The languages you wish your query will be searched in. See [Supported Languages](https://github.com/theBowja/genshin-db/blob/main/readme.md#genshindbsetoptionsopts)
     * @param {String} resultLanguage - Output language that your results will be in. 
     */
    constructor(dumpResult, matchNames, matchAltNames, matchAliases, matchCategories, verboseCategories, queryLanguages, resultLanguage) {
        this.dumpResult = dumpResult;
        this.matchNames = matchNames;
        this.matchAltNames = matchAltNames;
        this.matchAliases = matchAliases;
        this.matchCategories = matchCategories;
        this.verboseCategories = verboseCategories;
        this.queryLanguages = queryLanguages;
        this.resultLanguage = resultLanguage;
    }
}

module.exports = Options;