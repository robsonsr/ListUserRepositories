import { rnAsyncStorageAdapter } from './rnAsyncStorageAdapter'

interface Storage {
	setItem: (key: string, item: any) => Promise<void>
	getItem: <T>(key: string) => Promise<T | undefined>
	removeItem: (key: string) => Promise<void>
}

const storage: Storage = rnAsyncStorageAdapter

export { storage }
export type { Storage }
