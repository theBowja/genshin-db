let data = require('./data.min.json');

const tmp = "undefined" != typeof self ? self : this;
if(tmp && tmp.GenshinDb && tmp.GenshinDb.addData) {
	tmp.GenshinDb.addData(data, true);
}

module.exports = data;