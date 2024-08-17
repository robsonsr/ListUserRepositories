import React, { memo } from 'react'

import { DefaultTheme, useTheme } from 'styled-components/native'

import { Branch } from './Branch'
import { Heart, HeartOutline } from './Heart'
import { Search } from './Search'
import { StarOutline } from './Star'
import { User } from './User'

const IconList = {
	search: Search,
	starOutline: StarOutline,
	heart: Heart,
	heartOutline: HeartOutline,
	branch: Branch,
	user: User,
}

interface BaseProps {
	size?: number
	color?: string
	testID?: string
}

interface IconProps {
	name: keyof typeof IconList
	size?: keyof DefaultTheme['iconSize']
	color?: keyof DefaultTheme['colors']
	testID?: string
}

const Icon = memo(({ name, size = 'medium', color = 'primary', testID }: IconProps) => {
	const { colors, iconSize } = useTheme()

	const IconFounded = IconList[name]

	if (!IconFounded) throw 'Invalid icon name'

	return <IconFounded color={colors[color]} size={iconSize[size]} testID={testID} />
})

export { Icon }
export type { BaseProps, IconProps }
