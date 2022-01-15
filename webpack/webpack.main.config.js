const path = require('path');

module.exports = env => ({
	entry: './src/main.js',
	// target: 'web', // not needed
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: typeof env.filename === 'string' ? (env.filename + (env.filename.endsWith('.js') ? '' : '.js')) : 'genshindb.js',

		library: 'GenshinDb',
		libraryTarget: 'umd',
		umdNamedDefine: true,
		globalObject: `(typeof self !== 'undefined' ? self : this)`

	},
	resolve: {
		alias: {
			[path.resolve(__dirname, '../src/min/data.min.json')]: path.resolve(__dirname, '../src/min/data.min.json.gzip')
		}
	},
	module: {
		rules: [{
			test: /\.gzip$/,
			use: 'arraybuffer-loader'
		}]
	}

});