import { DefaultTheme, css } from 'styled-components/native'
import { applyColor } from './utils'

type Bg = keyof DefaultTheme['colors'] | string

interface BackgroundColors {
	bg?: Bg
}

const backgroundColors = css<BackgroundColors>`
	${({ bg, theme }) => bg && { backgroundColor: applyColor(bg, theme) }}
`

export { backgroundColors }

export type { BackgroundColors }
