var path = require('path');

var babel = require('rollup-plugin-babel');

var commonjs = require('rollup-plugin-commonjs');
var nodeResolve = require('rollup-plugin-node-resolve');
var eslint = require('rollup-plugin-eslint');

var env = require('./env.js');

var config = {
	entry: path.join(__dirname, '../src/index.js'),
	plugins: [
		eslint(),
		nodeResolve({
	      	jsnext: true,
	      	main: true
	    }),
	    commonjs({
	    	include: 'node_modules/**',
	    }),
	    babel({
	    	exclude: 'node_modules/**'
	    })
	]
};

if (env === 'dev') {
	module.exports = Object.assign({
		format: 'umd',
		moduleName: 'DeviceFingerprint',
		dest: path.join(__dirname, '../dist/device-fingerprint.js')
	}, config);
} else {
	module.exports = config;
}
