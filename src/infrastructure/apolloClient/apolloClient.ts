import Config from 'react-native-config'

import { ApolloClient, InMemoryCache } from '@apollo/client'

const apolloClient = new ApolloClient({
	uri: Config.URL,
	cache: new InMemoryCache(),
	headers: {
		Authorization: `bearer ${Config.ACCESS_TOKEN}`,
	},
})

export { apolloClient }
