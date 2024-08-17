import { useCallback } from 'react'

import { useRecoilState } from 'recoil'

import { Repository } from '@domain/models'
import { favoriteRepositoriesState } from '@presentation/atoms/favoriteRepositories'

const useHandleFavorites = () => {
	const [favorites, setFavorites] = useRecoilState(favoriteRepositoriesState)

	const toggleFavorites = useCallback(
		(repository: Repository) => {
			setFavorites((prev) => {
				const alreadyFavorited = prev.some((item) => item.id === repository.id)

				if (alreadyFavorited) return [...prev.filter((item) => item.id !== repository.id)]
				return [repository, ...prev]
			})
		},
		[setFavorites],
	)

	return {
		favorites,
		toggleFavorites,
	}
}

export { useHandleFavorites }
