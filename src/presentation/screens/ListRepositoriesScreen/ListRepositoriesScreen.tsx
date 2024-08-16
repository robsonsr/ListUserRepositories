import React, { useCallback, useEffect, useState } from 'react'
import { Container, InputSearch, Typograph } from '@components'
import { UserNotFoundState } from './components/UserNotFoundState'
import { ProfileCard } from './components/ProfileCard'

import { useGetProfile } from '@presentation/hooks/useGetProfile'
import { FlatList, RefreshControl } from 'react-native'
import { RepositoryCard } from '../../components'

import { useHandleFavorites } from '@presentation/hooks/useHandleFavorites'

const ListRepositoriesScreen = () => {
	const [search, setSearch] = useState('')

	const { getRepositories, getMoreRepositories, isInitialLoading, isLoadingMore, isLoading, profile, repositories } = useGetProfile()
	const { favorites, handleFavorites } = useHandleFavorites()

	const handleGetProfile = useCallback(async () => {
		if (search) {
			const { error } = await getRepositories(search)

			if (error) {
				// log event etc...
			}
		}
	}, [getRepositories, search])

	const handleGetMoreRepositories = useCallback(() => {
		if (!search || isLoadingMore || repositories.length === 0) return

		getMoreRepositories(search)
	}, [getMoreRepositories, isLoadingMore, repositories.length, search])

	useEffect(() => {
		handleGetProfile()
	}, [handleGetProfile])

	const profileNotFound = !isLoading && !profile && search
	const hasProfile = !isLoading && profile
	const hasRepositories = repositories.length > 0

	return (
		<Container p="sp4" bg="primary" flex={1}>
			<FlatList
				refreshControl={<RefreshControl refreshing={isInitialLoading || isLoadingMore} />}
				ListHeaderComponent={
					<>
						<Typograph variant="heading1SemiBold">Procure pelo Nome ou Nome de Usuário</Typograph>

						<Typograph variant="heading5Regular" mt="sp3">
							Encontre os repositórios de algum usuário digitando no campo abaixo
						</Typograph>

						<InputSearch placeholder="Buscar usuário" onChangeText={setSearch} value={search} />

						{profileNotFound && <UserNotFoundState login={search} />}

						{hasProfile && <ProfileCard profile={profile} />}

						{hasRepositories && (
							<Typograph variant="heading1SemiBold" color="primary" mt="sp4">
								Repositórios
							</Typograph>
						)}
					</>
				}
				data={repositories}
				renderItem={({ item }) => {
					const isFavorite = favorites.some((favorited) => item.id === favorited.id)
					return <RepositoryCard respository={item} onPress={handleFavorites} isFavorite={isFavorite} />
				}}
				keyExtractor={({ id }) => id.toString()}
				onEndReached={handleGetMoreRepositories}
				onEndReachedThreshold={0.8}
			/>
		</Container>
	)
}

export { ListRepositoriesScreen }
