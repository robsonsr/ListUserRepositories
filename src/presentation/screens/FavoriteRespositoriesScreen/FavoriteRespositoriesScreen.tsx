import React from 'react'
import { FlatList } from 'react-native'

import { Container, RepositoryCard, Typograph } from '@components'
import { useHandleFavorites } from '@presentation/hooks/useHandleFavorites'

const FavoritesRespositoriesScreen = () => {
	const { favorites, handleFavorites } = useHandleFavorites()

	return (
		<Container p="sp4">
			<FlatList
				ListHeaderComponent={
					<>
						<Typograph variant="heading1SemiBold" mt="sp4">
							Meus favoritos
						</Typograph>
					</>
				}
				data={favorites}
				renderItem={({ item }) => {
					return <RepositoryCard respository={item} onPress={handleFavorites} isFavorite={favorites.includes(item)} />
				}}
				keyExtractor={({ id }) => id.toString()}
			/>
		</Container>
	)
}

export { FavoritesRespositoriesScreen }
