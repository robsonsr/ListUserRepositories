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
		<ApolloProvider client={apolloClient}>
			<RecoilRoot>
				<SafeAreaProvider>
					<ThemeProvider theme={theme}>
						<Suspense fallback={<FullLoading />}>
							<NavigationContainer>
								<TabNavigator />
							</NavigationContainer>
						</Suspense>
					</ThemeProvider>
				</SafeAreaProvider>
			</RecoilRoot>
		</ApolloProvider>
	)
}

export default App
