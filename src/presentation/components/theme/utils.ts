/* eslint-disable @typescript-eslint/no-shadow */

import { CSSProperties, DefaultTheme, css } from 'styled-components/native'

type MarginProps = 'm' | 'ml' | 'mr' | 'mb' | 'mt' | 'mv' | 'mh'
type PaddingProps = 'p' | 'pl' | 'pr' | 'pb' | 'pt' | 'pv' | 'ph'
type SpaceProps = MarginProps | PaddingProps

type Space = {
	[spaceProp in SpaceProps]?: keyof DefaultTheme['spacing']
}

const space = css<Space>`
	${({ m, theme }) => m && { margin: theme.spacing[m] }}
	${({ mt, theme }) => mt && { marginTop: theme.spacing[mt] }}
    ${({ mb, theme }) => mb && { marginBottom: theme.spacing[mb] }}
    ${({ ml, theme }) => ml && { marginLeft: theme.spacing[ml] }}
    ${({ mr, theme }) => mr && { marginRight: theme.spacing[mr] }}
	${({ mv, theme }) =>
		mv && {
			marginTop: theme.spacing[mv],
			marginBottom: theme.spacing[mv],
		}}
	${({ mh, theme }) =>
		mh && {
			marginRight: theme.spacing[mh],
			marginLeft: theme.spacing[mh],
		}}
    ${({ p, theme }) => p && { padding: theme.spacing[p] }}
	${({ pt, theme }) => pt && { paddingTop: theme.spacing[pt] }}
    ${({ pb, theme }) => pb && { paddingBottom: theme.spacing[pb] }}
    ${({ pl, theme }) => pl && { paddingLeft: theme.spacing[pl] }}
    ${({ pr, theme }) => pr && { paddingRight: theme.spacing[pr] }}
	${({ pv, theme }) =>
		pv && {
			paddingTop: theme.spacing[pv],
			paddingBottom: theme.spacing[pv],
		}}
	${({ ph, theme }) =>
		ph && {
			paddingRight: theme.spacing[ph],
			paddingLeft: theme.spacing[ph],
		}}
`

interface Flex {
	flex?: CSSProperties['flex']
	flexDirection?: CSSProperties['flexDirection']
	justifyContent?: CSSProperties['justifyContent']
	alignItems?: CSSProperties['alignItems']
	alignSelf?: CSSProperties['alignSelf']
	alignContent?: CSSProperties['alignContent']
	flexWrap?: CSSProperties['flexWrap']
	flexBasis?: CSSProperties['flexBasis']
	flexGrow?: CSSProperties['flexGrow']
	flexShrink?: CSSProperties['flexShrink']
}

const flex = css<Flex>`
	${({ flex }) => flex !== undefined && { flex }}
	${({ flexDirection }) => flexDirection && { flexDirection }}
	${({ justifyContent }) => justifyContent && { justifyContent }}
    ${({ alignItems }) => alignItems && { alignItems }}
    ${({ alignSelf }) => alignSelf && { alignSelf }}
    ${({ alignContent }) => alignContent && { alignContent }}
    ${({ flexWrap }) => flexWrap && { flexWrap }}
    ${({ flexBasis }) => flexBasis && { flexBasis }}
    ${({ flexGrow }) => flexGrow && { flexGrow }}
    ${({ flexShrink }) => flexShrink && { flexShrink }}
`

interface Size {
	height?: CSSProperties['height']
	minHeight?: CSSProperties['minHeight']
	maxHeight?: CSSProperties['maxHeight']
	width?: CSSProperties['width']
	minWidth?: CSSProperties['minWidth']
	maxWidth?: CSSProperties['maxWidth']
}

const size = css<Size>`
	${({ height }) => height && { height }}
	${({ minHeight }) => minHeight && { minHeight }}
    ${({ maxHeight }) => maxHeight && { maxHeight }}
	${({ width }) => width && { width }}
    ${({ minWidth }) => minWidth && { minWidth }}
    ${({ maxWidth }) => maxWidth && { maxWidth }}
`

interface TextColors {
	color?: keyof DefaultTheme['colors']
}

const textColors = css<TextColors>`
	${({ color, theme }) => color && { color: theme.colors[color] }}
`

interface BackgroundColors {
	bg?: keyof DefaultTheme['colors']
}

const backgroundColors = css<BackgroundColors>`
	${({ bg, theme }) => bg && { backgroundColor: theme.colors[bg] }}
`
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
	${({ borderColor, theme }) =>
		borderColor && { borderColor: theme.colors[borderColor] }}
`

interface Position {
	position?: 'absolute' | 'relative'
	top?: keyof DefaultTheme['spacing']
	left?: keyof DefaultTheme['spacing']
}

const position = css<Position>`
	position: ${({ position }) => position};
	top: ${({ theme, top }) => top && theme.spacing[top]}px;
	left: ${({ theme, left }) => left && theme.spacing[left]}px;
`

export type {
	Space,
	Position,
	Flex,
	Size,
	TextColors,
	BackgroundColors,
	Border,
}
export { space, position, flex, size, textColors, backgroundColors, border }
