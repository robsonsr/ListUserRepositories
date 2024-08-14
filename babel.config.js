module.exports = {
	presets: ['module:@react-native/babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
				alias: {
					'@infrastructure': './src/infrastructure',
					'@data': './src/data',
					'@domain': './src/domain',
					'@components': './src/presentation/components',
					'@modules': './src/presentation/modules',
					'@images': './src/presentation/images',
					'@presentation': './src/presentation',
				},
			},
		],
	],
}
