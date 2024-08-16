import React, { Suspense } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { NavigationContainer } from '@react-navigation/native'

import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components/native'

import { ApolloProvider } from '@apollo/client'
import { FullLoading, theme } from '@components'
import { apolloClient } from '@infrastructure/apolloClient'
import { TabNavigator } from '@presentation/TabNavigator'

function App(): React.JSX.Element {
	return (
		<RecoilRoot>
			<ApolloProvider client={apolloClient}>
				<SafeAreaProvider>
					<ThemeProvider theme={theme}>
						<Suspense fallback={<FullLoading />}>
							<NavigationContainer>
								<TabNavigator />
							</NavigationContainer>
						</Suspense>
					</ThemeProvider>
				</SafeAreaProvider>
			</ApolloProvider>
		</RecoilRoot>
	)
}

export default App
