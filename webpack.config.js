const path = require('path');

module.exports = {
	entry: './src/main.js',
	// target: 'web', // not needed
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'genshindb.js',

		library: 'GenshinDB',
		libraryTarget: 'umd',
		umdNamedDefine: true,
		globalObject: `(typeof self !== 'undefined' ? self : this)`

	}
}