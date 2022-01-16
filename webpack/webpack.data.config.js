const path = require('path');

module.exports = env => ({
	entry: {
		[env.basename]: './webpack/dataLoader.js'
	},

	// target: 'web', // not needed
	output: {
		path: path.resolve(__dirname, '../dist/data/scripts'),
		filename: `${env.basename}.js`,

		library: ['GenshinDbData', '[name]'],
		libraryTarget: 'umd',
		umdNamedDefine: true,
		globalObject: `(typeof self !== 'undefined' ? self : this)`

	},
	resolve: {
		alias: {
			[path.resolve(__dirname, './data.min.json')]: path.resolve(__dirname, `../dist/data/gzips/${env.basename}.min.json.gzip`)
		}
	},
	module: {
		rules: [{
			test: /\.gzip$/,
			use: 'arraybuffer-loader'
		}]
	},

	performance: {
		hints: false,
	    maxEntrypointSize: 512000,
	    maxAssetSize: 512000
	}
});