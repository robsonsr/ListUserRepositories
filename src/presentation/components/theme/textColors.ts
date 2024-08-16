import { DefaultTheme, css } from 'styled-components/native'

import { applyColor } from './utils'

interface TextColors {
	color?: keyof DefaultTheme['colors']
}

const textColors = css<TextColors>`
	${({ color, theme }) => color && { color: applyColor(color, theme) }}
`

export { textColors }
export type { TextColors }
