import { DefaultTheme, css } from 'styled-components/native'

interface Border {
	radius?: keyof DefaultTheme['border']
	topLeftRadius?: keyof DefaultTheme['border']
	topRightRadius?: keyof DefaultTheme['border']
	bottomLeftRadius?: keyof DefaultTheme['border']
	bottomRightRadius?: keyof DefaultTheme['border']
	borderWidth?: number
	borderColor?: keyof DefaultTheme['colors']
}

const border = css<Border>`
	${({ radius, theme }) =>
		radius && {
			borderRadius: theme.border[radius],
		}}
	${({ topLeftRadius, theme }) =>
		topLeftRadius && {
			borderTopLeftRadius: theme.border[topLeftRadius],
		}}
	${({ topRightRadius, theme }) =>
		topRightRadius && {
			borderTopRightRadius: theme.border[topRightRadius],
		}}
	${({ bottomLeftRadius, theme }) =>
		bottomLeftRadius && {
			borderBottomLeftRadius: theme.border[bottomLeftRadius],
		}}
	${({ bottomRightRadius, theme }) =>
		bottomRightRadius && {
			borderBottomRightRadius: theme.border[bottomRightRadius],
		}}
	${({ borderWidth }) => borderWidth && { borderWidth }}
	${({ borderColor, theme }) => borderColor && { borderColor: theme.colors[borderColor] }}
`

export type { Border }
export { border }
