declare module 'react-native-config' {
	export interface NativeConfig {
		URL: string
		ACCESS_TOKEN?: string
	}

	export const Config: NativeConfig
	export default Config
}
