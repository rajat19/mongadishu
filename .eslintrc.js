module.exports = {
	'env': {
		'node': true,
		'commonjs': true,
		'es6': true,
		'mocha': true
	},
	'extends': 'eslint:recommended',
	'parserOptions': {
		'ecmaVersion': 2018
	},
	'rules': {
		'no-console': [0],
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		]
	}
};
