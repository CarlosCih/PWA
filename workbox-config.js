module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{css,js,html,jpg,png,json,md}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};