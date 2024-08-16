import React, { memo, useMemo } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { BottomTabBarProps } from '@react-navigation/bottom-tabs'

import { Icon, IconProps, Pressable, Row } from '../'

const TAB_BAR_HEIGHT = 69

interface ButtonOptions {
	iconName: IconProps['name']
}

const buttonsOptions: ButtonOptions[] = [
	{
		iconName: 'user',
	},
	{
		iconName: 'heart',
	},
]

const BottomTabBar = memo(({ state, navigation }: BottomTabBarProps) => {
	const insets = useSafeAreaInsets()

	const [height, paddingBottom] = useMemo(() => [TAB_BAR_HEIGHT + insets.bottom / 2, insets.bottom / 2], [insets.bottom])

	return (
		<Row bg="tabBarBackground" shadow="large" height={height}>
			{state.routes.map((route, index) => {
				const isFocused = state.index === index

				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key,
						canPreventDefault: true,
					})

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name, route.params)
					}
				}

				return (
					<Pressable
						onPress={onPress}
						key={`tab-bar-button-${buttonsOptions[index].iconName}`}
						flex={1}
						justifyContent="center"
						alignItems="center"
						bg={isFocused ? 'tabBarBackgroundActive' : 'tabBarBackground'}
						pb={paddingBottom}
					>
						<Icon name={buttonsOptions[index].iconName} color={isFocused ? 'tabBarIconActive' : 'tabBarIconInactive'} />
					</Pressable>
				)
			})}
		</Row>
	)
})

export { BottomTabBar }
