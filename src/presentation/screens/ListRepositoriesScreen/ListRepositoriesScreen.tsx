import React, { useCallback, useEffect, useState } from 'react'
import { ListRenderItem, RefreshControl } from 'react-native'

import { Box, Container, InputSearch, RepositoryCard, Typograph } from '@components'
import { Repository } from '@domain/models'
import { useGetProfile } from '@presentation/hooks/useGetProfile'
import { useHandleFavorites } from '@presentation/hooks/useHandleFavorites'

import { ProfileCard } from './components/ProfileCard'
import { UserNotFoundState } from './components/UserNotFoundState'
import * as S from './styles'

const ListRepositoriesScreen = () => {
	const [search, setSearch] = useState('')

	const { getRepositories, getMoreRepositories, profile, repositories, isLoading, error, hasNextPage } =
		useGetProfile()
	const { favorites, toggleFavorites } = useHandleFavorites()

	const handleGetProfile = useCallback(async () => {
		if (search) {
			const { error } = await getRepositories(search)

			if (error) {
				// log event etc...
			}
		}
	}, [getRepositories, search])

	const handleGetMoreRepositories = useCallback(async () => {
		if (!hasNextPage || !search || isLoading || repositories.length === 0) return

		const { error } = await getMoreRepositories(search)
		if (error) {
			// log event etc...
		}
	}, [getMoreRepositories, hasNextPage, isLoading, repositories.length, search])

	const renderItem: ListRenderItem<Repository> = useCallback(
		({ item }) => {
			const isFavorite = favorites.some((favorited) => item.id === favorited.id)
			return <RepositoryCard respository={item} onPress={toggleFavorites} isFavorite={isFavorite} />
		},
		[favorites, toggleFavorites],
	)

	useEffect(() => {
		handleGetProfile()
	}, [handleGetProfile])

	const hasProfile = !isLoading && profile
	const hasRepositories = repositories.length > 0

	return (
		<Container bg="primary" flex={1}>
			<S.ReposityList
				testID="repository-list"
				refreshControl={<RefreshControl refreshing={isLoading} />}
				ListHeaderComponent={
					<Box>
						<Typograph variant="heading1SemiBold">Procure pelo Nome ou Nome de Usuário</Typograph>

						<Typograph variant="heading5Regular" mt="sp3">
							Encontre os repositórios de algum usuário digitando no campo abaixo
						</Typograph>

						<InputSearch placeholder="Buscar usuário" onChangeText={setSearch} value={search} />

						{error && <UserNotFoundState login={search} />}

						{hasProfile && <ProfileCard profile={profile} />}

						{hasRepositories && (
							<Typograph variant="heading1SemiBold" color="primary" mt="sp4">
								Repositórios
							</Typograph>
						)}
					</Box>
				}
				data={repositories}
				renderItem={renderItem}
				keyExtractor={({ id }) => id.toString()}
				onEndReached={handleGetMoreRepositories}
				onEndReachedThreshold={0.8}
			/>
		</Container>
	)
}

export { ListRepositoriesScreen }
