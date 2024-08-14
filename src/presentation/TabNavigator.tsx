import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { BottomTabBar, Box, Typograph } from '@components'

enum TabScreenNames {
	ListRepositoriesScreen = 'ListRepositoriesScreen',
	FavoritesRepositoriesScreen = 'FavoritesRepositoriesScreen',
}

type TabParamList = {
	[TabScreenNames.ListRepositoriesScreen]?: undefined
	[TabScreenNames.FavoritesRepositoriesScreen]?: undefined
}

const Screen1 = () => {
	return (
		<Box>
			<Typograph>List</Typograph>
		</Box>
	)
}

const Screen2 = () => {
	return (
		<Box>
			<Typograph>Favorites</Typograph>
		</Box>
	)
}

const Tab = createBottomTabNavigator<TabParamList>()

const TabNavigator = () => {
	return (
		<Tab.Navigator
			tabBar={BottomTabBar}
			screenOptions={{
				headerShown: false,
			}}
		>
			<Tab.Screen
				name={TabScreenNames.ListRepositoriesScreen}
				component={Screen1}
			/>
			<Tab.Screen
				name={TabScreenNames.FavoritesRepositoriesScreen}
				component={Screen2}
			/>
		</Tab.Navigator>
	)
}

export { TabNavigator, TabScreenNames }
export type { TabParamList }
