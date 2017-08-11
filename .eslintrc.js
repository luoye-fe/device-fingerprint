module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module'
	},
	env: {
		browser: true,
	},
	// https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
	extends: 'standard',
	// add your custom rules here
	rules: {
		indent: [2, 'tab'],
		semi: 0,
		'no-tabs': 0,
		'no-console': 0,
		'arrow-parens': 0,
	  	// allow paren-less arrow functions
	  	'arrow-parens': 0,
	  	// allow async-await
	  	'generator-star-spacing': 0
	}
};
