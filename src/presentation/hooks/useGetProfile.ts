import { useCallback, useState } from 'react'

import { useLazyQuery } from '@apollo/client'
import { Profile, Repository } from '@domain/models'
import { GET_PROFILE, GetProfileResponse, PageInfo, Variables } from '@graphql/queries'

const useGetProfile = () => {
	const [profile, setProfile] = useState<Profile>()
	const [repositories, setRepositories] = useState<Repository[]>([])
	const [isLoadingMore, setIsLoadingMore] = useState(false)
	const [pageInfo, setPageInfo] = useState<PageInfo>()

	const [fetch, { loading: isInitialLoading, error, fetchMore }] = useLazyQuery<GetProfileResponse, Variables>(GET_PROFILE)

	const getRepositories = useCallback(
		async (login: string) => {
			setProfile(undefined)
			setRepositories([])

			const { error, data } = await fetch({ variables: { login, after: '' } })

			const profile = data?.user
			const repositories = data?.user.repositories.edges
			const newPageInfo = data?.user.repositories.pageInfo

			if (profile) setProfile(profile)
			if (repositories) {
				const newRepositories = repositories.map(({ node }) => node)
				setRepositories((prev) => [...prev, ...newRepositories])
				setPageInfo(newPageInfo)
			}

			return {
				profile: data?.user,
				error,
			}
		},
		[fetch],
	)

	const getMoreRepositories = useCallback(
		async (login: string) => {
			setIsLoadingMore(true)

			if (pageInfo?.hasNextPage) {
				const { data } = await fetchMore({ variables: { login, after: pageInfo?.endCursor } })
				const repositories = data?.user.repositories.edges
				const newPageInfo = data?.user.repositories.pageInfo

				const newRepositories = repositories.map(({ node }) => node)
				setRepositories((prev) => [...prev, ...newRepositories])

				setPageInfo(newPageInfo)
			}
			setIsLoadingMore(false)
		},
		[fetchMore, pageInfo],
	)

	return {
		isLoading: isInitialLoading || isLoadingMore,
		isInitialLoading,
		isLoadingMore,
		getRepositories,
		getMoreRepositories,
		profile,
		repositories,
		error,
	}
}

export { useGetProfile }
