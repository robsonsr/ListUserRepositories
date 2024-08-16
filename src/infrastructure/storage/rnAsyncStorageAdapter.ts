import AsyncStorage from '@react-native-async-storage/async-storage'

import { Storage } from './storage'

const setItem: Storage['setItem'] = async (key: string, item: any): Promise<void> => {
	const parsed = JSON.stringify(item)
	await AsyncStorage.setItem(key, parsed)
}

const getItem: Storage['getItem'] = async <T>(key: string): Promise<T | undefined> => {
	const stringValue = await AsyncStorage.getItem(key)
	if (stringValue) {
		const parsed = JSON.parse(stringValue)
		return parsed as T
	}

	return undefined
}

const removeItem: Storage['removeItem'] = async (key: string): Promise<void> => {
	await AsyncStorage.removeItem(key)
}

const rnAsyncStorageAdapter: Storage = {
	setItem,
	getItem,
	removeItem,
}

export { rnAsyncStorageAdapter }
