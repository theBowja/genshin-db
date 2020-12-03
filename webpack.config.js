const path = require('path');

module.exports = {
	entry: './src/main.js',
	target: 'node',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'genshindb.js',

		library: 'GenshinDB',
		libraryTarget: 'var'
	}
}