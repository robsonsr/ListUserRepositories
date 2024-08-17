module.exports = {
	root: true,
	extends: ['@react-native', 'prettier'],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				printWidth: 120,
			},
		],
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': 'off',
		'max-len': 'off',
	},
}
