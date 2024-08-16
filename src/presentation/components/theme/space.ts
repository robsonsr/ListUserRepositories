import { DefaultTheme, css } from 'styled-components/native'

type MarginProps = 'm' | 'ml' | 'mr' | 'mb' | 'mt' | 'mv' | 'mh'
type PaddingProps = 'p' | 'pl' | 'pr' | 'pb' | 'pt' | 'pv' | 'ph'
type SpaceProps = MarginProps | PaddingProps

type Space = {
	[spaceProp in SpaceProps]?: keyof DefaultTheme['spacing'] | number
}

const toPixel = (number: number) => `${number}px`

const getSpacingValue = (theme: DefaultTheme, space?: keyof DefaultTheme['spacing'] | number) => {
	if (!space) return '0px'
	if (typeof space === 'number') return toPixel(space)
	return toPixel(theme.spacing[space])
}

const space = css<Space>`
	${({ m, theme }) => (m ? { margin: getSpacingValue(theme, m) } : {})}
	${({ mt, theme }) => (mt ? { marginTop: getSpacingValue(theme, mt) } : {})}
    ${({ mb, theme }) => !!mb && { marginBottom: getSpacingValue(theme, mb) }}
    ${({ ml, theme }) => !!ml && { marginLeft: getSpacingValue(theme, ml) }}
    ${({ mr, theme }) => !!mr && { marginRight: getSpacingValue(theme, mr) }}

	${({ mv, theme }) =>
		!!mv && {
			marginTop: getSpacingValue(theme, mv),
			marginBottom: getSpacingValue(theme, mv),
		}}

	${({ mh, theme }) =>
		!!mh && {
			marginRight: getSpacingValue(theme, mh),
			marginLeft: getSpacingValue(theme, mh),
		}}

    ${({ p, theme }) => !!p && { padding: getSpacingValue(theme, p) }}
	${({ pt, theme }) => !!pt && { paddingTop: getSpacingValue(theme, pt) }}
    ${({ pb, theme }) => !!pb && { paddingBottom: getSpacingValue(theme, pb) }}
    ${({ pl, theme }) => !!pl && { paddingLeft: getSpacingValue(theme, pl) }}
    ${({ pr, theme }) => !!pr && { paddingRight: getSpacingValue(theme, pr) }}

	${({ pv, theme }) =>
		!!pv && {
			paddingTop: getSpacingValue(theme, pv),
			paddingBottom: getSpacingValue(theme, pv),
		}}

	${({ ph, theme }) =>
		!!ph && {
			paddingRight: getSpacingValue(theme, ph),
			paddingLeft: getSpacingValue(theme, ph),
		}}
`

export { space }
export type { Space }
