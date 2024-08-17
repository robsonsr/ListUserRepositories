import { TextProps } from 'react-native'

import styled from 'styled-components/native'

import * as T from '../theme'

type Variants =
	| 'heading1SemiBold'
	| 'heading2SemiBold'
	| 'heading3Medium'
	| 'heading4SemiBold'
	| 'heading5Regular'
	| 'paragraphyMdRegular'
	| 'paragraphyMdMedium'
	| 'paragraphySmRegular'
	| 'paragraphySmMedium'

interface TypographProps extends TextProps, T.Space, T.TextColors, T.Text {
	variant?: Variants
}

const calculateLineHeight = (fontSize: number, ratio: number = 1.4): string => {
	return `${Math.round(fontSize * ratio)}px`
}

const Typograph = styled.Text<TypographProps>`
	${T.space}
	${T.textColors}
	${T.text}
    ${({ variant, color, theme }) => {
		const paragraphyMdRegular = {
			fontFamily: theme.fonts.weight.regular,
			fontSize: 14,
			lineHeight: calculateLineHeight(14),
			color: color ? theme.colors[color] : theme.colors.darkNeutral,
		}

		if (variant === 'heading1SemiBold')
			return {
				fontFamily: theme.fonts.weight.SemiBold,
				fontSize: 21,
				lineHeight: calculateLineHeight(21),
				color: color ? theme.colors[color] : theme.colors.neutral,
			}

		if (variant === 'heading2SemiBold')
			return {
				fontFamily: theme.fonts.weight.SemiBold,
				fontSize: 18,
				lineHeight: calculateLineHeight(18),
				color: color ? theme.colors[color] : theme.colors.neutral,
			}

		if (variant === 'heading3Medium')
			return {
				fontFamily: theme.fonts.weight.medium,
				fontSize: 18,
				lineHeight: calculateLineHeight(18),
				color: color ? theme.colors[color] : theme.colors.neutral,
			}

		if (variant === 'heading4SemiBold')
			return {
				fontFamily: theme.fonts.weight.SemiBold,
				fontSize: 16,
				lineHeight: calculateLineHeight(16),
				color: color ? theme.colors[color] : theme.colors.neutral,
			}

		if (variant === 'heading5Regular')
			return {
				fontFamily: theme.fonts.weight.regular,
				fontSize: 16,
				lineHeight: calculateLineHeight(16),
				color: color ? theme.colors[color] : theme.colors.neutral,
			}

		if (variant === 'paragraphyMdRegular') paragraphyMdRegular

		if (variant === 'paragraphyMdMedium')
			return {
				fontFamily: theme.fonts.weight.medium,
				fontSize: 14,
				lineHeight: calculateLineHeight(14),
				color: color ? theme.colors[color] : theme.colors.darkNeutral,
			}

		if (variant === 'paragraphySmRegular')
			return {
				fontFamily: theme.fonts.weight.regular,
				fontSize: 12,
				lineHeight: calculateLineHeight(12),
				color: color ? theme.colors[color] : theme.colors.placeholder,
			}

		if (variant === 'paragraphySmMedium')
			return {
				fontFamily: theme.fonts.weight.medium,
				fontSize: 12,
				lineHeight: calculateLineHeight(12),
				color: color ? theme.colors[color] : theme.colors.darkNeutral,
			}

		return paragraphyMdRegular
	}}
`
export { Typograph }
