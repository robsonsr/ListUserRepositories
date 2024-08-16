import { ApolloClient, InMemoryCache } from '@apollo/client'
import Config from 'react-native-config'

const apolloClient = new ApolloClient({
	uri: Config.URL,
	cache: new InMemoryCache(),
	headers: {
		Authorization: `bearer ${Config.ACCESS_TOKEN}`,
	},
})

export { apolloClient }
