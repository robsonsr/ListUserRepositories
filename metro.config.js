const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')

const defaultConfig = getDefaultConfig(__dirname)
const defaultResolver = defaultConfig.resolver
const defaultTransformer = defaultConfig.transformer
const { assetExts, sourceExts } = defaultResolver

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
	transformer: {
		...defaultTransformer,
		babelTransformerPath: require.resolve('react-native-svg-transformer/react-native'),
	},
	resolver: {
		assetExts: assetExts.filter((ext) => ext !== 'svg'),
		sourceExts: [...sourceExts, 'svg'],
	},
}

module.exports = mergeConfig(defaultConfig, config)
