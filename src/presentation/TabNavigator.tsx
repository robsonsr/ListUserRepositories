/* eslint-disable react/no-unstable-nested-components */
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { BottomTabBar } from '@components'

import { FavoriteRepositoriesScreen, ListRepositoriesScreen } from './screens/'

enum TabScreenNames {
	ListRepositories = 'ListRepositories',
	FavoritesRespositoriesScreen = 'FavoritesRespositoriesScreen',
}

type TabParamList = {
	[TabScreenNames.ListRepositories]?: undefined
	[TabScreenNames.FavoritesRespositoriesScreen]?: undefined
}

const Tab = createBottomTabNavigator<TabParamList>()

const TabNavigator = () => {
	return (
		<Tab.Navigator
			tabBar={(props) => <BottomTabBar {...props} />}
			screenOptions={{
				headerShown: false,
			}}
		>
			<Tab.Screen name={TabScreenNames.ListRepositories} component={ListRepositoriesScreen} />
			<Tab.Screen name={TabScreenNames.FavoritesRespositoriesScreen} component={FavoriteRepositoriesScreen} />
		</Tab.Navigator>
	)
}

export { TabNavigator, TabScreenNames }
export type { TabParamList }
