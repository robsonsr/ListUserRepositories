module.exports = {
	presets: ['module:@react-native/babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
				alias: {
					'@components': './src/presentation/components',
					'@infrastructure': './src/infrastructure',
					'@queries': './src/queries',
					'@domain': './src/domain',
					'@modules': './src/presentation/modules',
					'@images': './src/presentation/images',
					'@presentation': './src/presentation',
				},
			},
		],
	],
}
