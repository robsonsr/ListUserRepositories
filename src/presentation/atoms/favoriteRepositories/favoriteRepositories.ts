import { AtomEffect, DefaultValue, atom } from 'recoil'

import { Repository } from '@domain/models'
import { storage } from '@infrastructure/storage/storage'

type FavoriteRepositoriesState = Repository[]

const persistAtom: AtomEffect<any> = ({ node, setSelf, onSet }) => {
	const loadPersisted = async () => {
		try {
			const savedValue = await storage.getItem(node.key)
			if (savedValue != null) {
				setSelf(savedValue)
			}
		} catch (error) {
			console.error(`Error loading ${node.key} from AsyncStorage`, error)
			setSelf(new DefaultValue())
		}
	}

	loadPersisted()

	onSet((newValue) => {
		if (newValue instanceof DefaultValue) {
			storage.removeItem(node.key)
		} else {
			storage.setItem(node.key, newValue)
		}
	})
}

const favoriteRepositoriesState = atom<FavoriteRepositoriesState>({
	key: 'favoriteRepositoriesState',
	default: [],
	effects: [persistAtom],
})

export { favoriteRepositoriesState }
export type { FavoriteRepositoriesState }
