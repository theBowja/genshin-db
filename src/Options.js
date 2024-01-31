/**
 * The Library's valid options
 */
class Options {
    /**
     * 
     * 
     * @param {boolean} dumpResult - If true, returns additional data such as the query, folder, what matched, the options, and the filename. The results of the search is found in the 'result' property. 
     * @param {boolean} matchNames - Allows autocomplete matching of data names.
     * @param {boolean} matchAltNames - Allows autocomplete matching of alternate or custom names.
     * @param {boolean} matchAliases - Allows autocomplete matching of data-defined aliases.
     * @param {boolean} matchCategories - Allows autocomplete matching of categories. If true, returns an array of the categories that matched.
     * @param {boolean} verboseCategories - Used if a category is matched. If true, then replaces each string name in the array with the data object instead
     * @param {Array<String>} queryLanguages - The languages you wish your query will be searched in. See [Supported Languages](https://github.com/theBowja/genshin-db/blob/main/readme.md#genshindbsetoptionsopts)
     * @param {String} resultLanguage - Output language that your results will be in. 
     * @param {boolean} v4Props - Adds genshin-db v4 data properties to the return result of the API.
     * @param {boolean} v4PropsOnly - Same as v4Props but removes v5 data properties.
     * @param {boolean} matchExactOnly - 
     */
    constructor(dumpResult=undefined,
                matchNames=undefined,
                matchAltNames=undefined,
                matchAliases=undefined,
                matchCategories=undefined,
                verboseCategories=undefined,
                queryLanguages=undefined,
                resultLanguage=undefined,
                v4Props=undefined,
                v4PropsOnly=undefined,
                matchExactOnly=undefined) {
        this.dumpResult = dumpResult;
        this.matchNames = matchNames;
        this.matchAltNames = matchAltNames;
        this.matchAliases = matchAliases;
        this.matchCategories = matchCategories;
        this.verboseCategories = verboseCategories;
        this.queryLanguages = queryLanguages;
        this.resultLanguage = resultLanguage;
        this.v4Props = v4Props;
        this.v4PropsOnly = v4PropsOnly;
    }
}

module.exports = Options;