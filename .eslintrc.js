module.exports = {
	root: true,
	extends: ['@react-native', 'prettier'],
	rules: {
		// Note: you must disable the base rule as it can report incorrect errors
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': 'off',
		'max-len': 'off',
	},
}
