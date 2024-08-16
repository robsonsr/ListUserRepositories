import { DefaultTheme } from 'styled-components/native'

type Colors = keyof DefaultTheme['colors'] | string

const isHexColor = (color: string): boolean => {
	const hexColorRegex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/
	return hexColorRegex.test(color)
}

const applyColor = (color: Colors, theme: DefaultTheme) => {
	if (isHexColor(color)) return color
	return theme.colors[color as keyof DefaultTheme['colors']]
}

export { applyColor }
