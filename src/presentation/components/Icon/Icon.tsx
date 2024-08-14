import React, { memo } from 'react'

import { DefaultTheme, useTheme } from 'styled-components/native'

import { Search } from './Search'
import { StarOutline } from './Star'
import { Heart, HeartOutline } from './Heart'
import { Branch } from './Branch'
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
}

interface IconProps {
	name: keyof typeof IconList
	size?: keyof DefaultTheme['iconSize']
	color?: keyof DefaultTheme['colors']
}

const Icon = memo(({ name, size = 'medium', color = 'primary' }: IconProps) => {
	const { colors, iconSize } = useTheme()

	const IconFounded = IconList[name]

	if (!IconFounded) throw 'Invalid icon name'

	return <IconFounded color={colors[color]} size={iconSize[size]} />
})

export { Icon }
export type { BaseProps, IconProps }
