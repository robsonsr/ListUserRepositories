import React from 'react'

import { BottomTabBarProps } from '@react-navigation/bottom-tabs'

import { Icon, IconProps, Pressable, Row } from '../'

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

const BottomTabBar = ({ state, navigation }: BottomTabBarProps) => {
	return (
		<Row bg="tabBarBackground" height={69}>
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
						key={`tab-bar-button-${
							buttonsOptions[index].iconName
						}-${index.toString()}`}
						flex={1}
						justifyContent="center"
						alignItems="center"
						bg={
							isFocused
								? 'tabBarBackgroundActive'
								: 'tabBarBackground'
						}
					>
						<Icon
							name={buttonsOptions[index].iconName}
							color={
								isFocused
									? 'tabBarIconActive'
									: 'tabBarIconInactive'
							}
						/>
					</Pressable>
				)
			})}
		</Row>
	)
}

export { BottomTabBar }
