import { gql } from '@apollo/client'
import { Repository } from '@domain/models'

interface Edge<T> {
	cursor: string
	node: T
}

interface PageInfo {
	endCursor: string
	hasNextPage: string
}

interface GithubUser {
	id: string
	login: string
	name: string
	avatarUrl: string
	bio: string
	repositories: {
		totalCount: number
		edges: Edge<Repository>[]
		pageInfo: PageInfo
	}
}

interface GetProfileResponse {
	user: GithubUser
}

interface Variables {
	login: string
	after?: string
}

const GET_PROFILE = gql`
	query GetProfile($login: String!, $after: String!) {
		user(login: $login) {
			id
			name
			login
			avatarUrl
			bio
			repositories(first: 10, after: $after) {
				totalCount
				edges {
					cursor
					node {
						id
						name
						description
						updatedAt
						primaryLanguage {
							id
							name
							color
						}
					}
				}
				pageInfo {
					endCursor
					hasNextPage
				}
			}
		}
	}
`

export { GET_PROFILE }
export type { GetProfileResponse, Variables, Edge, PageInfo }
