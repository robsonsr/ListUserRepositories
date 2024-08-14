import { theme } from '@components'
import { TabNavigator } from '@presentation/TabNavigator'

import { NavigationContainer } from '@react-navigation/native'

import React from 'react'

import { ThemeProvider } from 'styled-components/native'

function App(): React.JSX.Element {
	return (
		<ThemeProvider theme={theme}>
			<NavigationContainer>
				<TabNavigator />
			</NavigationContainer>
		</ThemeProvider>
	)
}

export default App
