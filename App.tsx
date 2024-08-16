import React, { Suspense } from 'react'
import { FullLoading, theme } from '@components'
import { TabNavigator } from '@presentation/TabNavigator'

import { NavigationContainer } from '@react-navigation/native'

import { SafeAreaProvider } from 'react-native-safe-area-context'

import { ThemeProvider } from 'styled-components/native'

import { ApolloProvider } from '@apollo/client'
import { apolloClient } from '@infrastructure/apolloClient'
import { RecoilRoot } from 'recoil'

function App(): React.JSX.Element {
	return (
		<RecoilRoot>
			<Suspense fallback={<FullLoading />}>
				<ApolloProvider client={apolloClient}>
					<SafeAreaProvider>
						<ThemeProvider theme={theme}>
							<NavigationContainer>
								<TabNavigator />
							</NavigationContainer>
						</ThemeProvider>
					</SafeAreaProvider>
				</ApolloProvider>
			</Suspense>
		</RecoilRoot>
	)
}

export default App
