let data = require('./data.min.json');

const tmp = "undefined" != typeof self ? self : this;
if(tmp && tmp.GenshinDb && tmp.GenshinDb.addData && data) {
	tmp.GenshinDb.addData(data, true);
}

module.exports = function(genshindb, overwrite, cleanup = true) {
	if(genshindb && genshindb.addData && data) {
		genshindb.addData(data, overwrite);
		if(cleanup) data = undefined;
	}

	return data;
};