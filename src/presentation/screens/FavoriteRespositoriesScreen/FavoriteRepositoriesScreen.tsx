import React from 'react'

import { Container, RepositoryCard, Typograph } from '@components'
import { useHandleFavorites } from '@presentation/hooks/useHandleFavorites'

import * as S from './styles'

const FavoriteRepositoriesScreen = () => {
	const { favorites, toggleFavorites } = useHandleFavorites()

	return (
		<Container>
			<S.FavoritesList
				ListHeaderComponent={
					<Typograph variant="heading1SemiBold" mt="sp4">
						Meus favoritos
					</Typograph>
				}
				data={favorites}
				renderItem={({ item }) => {
					return (
						<RepositoryCard
							testID="repository-card"
							respository={item}
							onPress={toggleFavorites}
							isFavorite={favorites.includes(item)}
						/>
					)
				}}
				keyExtractor={({ id }) => id}
				showsVerticalScrollIndicator={false}
			/>
		</Container>
	)
}

export { FavoriteRepositoriesScreen }
