import { DefaultTheme, css } from 'styled-components/native'

interface Position {
	position?: 'absolute' | 'relative'
	top?: keyof DefaultTheme['spacing']
	left?: keyof DefaultTheme['spacing']
}

const position = css<Position>`
	position: ${({ position }) => position};
	${({ top, theme }) => top && { top: theme.spacing[top] }}
	${({ left, theme }) => left && { top: theme.spacing[left] }}
`

export type { Position }
export { position }
