import { TextProps } from 'react-native'

import styled from 'styled-components/native'

import * as T from '../theme'

const FONT_FAMILIES = {
	Poppins: {
		regular: 'Poppins-Regular',
		medium: 'Poppins-Medium',
		SemiBold: 'Poppins-SemiBold',
	},
}

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

interface TypographProps extends TextProps, T.Space, T.TextColors {
	variant?: Variants
}

const Typograph = styled.Text<TypographProps>`
	${T.space}
	${T.textColors}
    ${({ variant, color, theme }) => {
		const paragraphyMdRegular = {
			fontFamily: FONT_FAMILIES.Poppins.regular,
			fontSize: 14,
			color: color ? theme.colors[color] : theme.colors.darkNeutral,
		}

		if (variant === 'heading1SemiBold')
			return {
				fontFamily: FONT_FAMILIES.Poppins.SemiBold,
				fontSize: 21,
				color: color ? theme.colors[color] : theme.colors.neutral,
			}

		if (variant === 'heading2SemiBold')
			return {
				fontFamily: FONT_FAMILIES.Poppins.SemiBold,
				fontSize: 18,
				color: color ? theme.colors[color] : theme.colors.neutral,
			}

		if (variant === 'heading3Medium')
			return {
				fontFamily: FONT_FAMILIES.Poppins.medium,
				fontSize: 18,
				color: color ? theme.colors[color] : theme.colors.neutral,
			}

		if (variant === 'heading4SemiBold')
			return {
				fontFamily: FONT_FAMILIES.Poppins.SemiBold,
				fontSize: 16,
				color: color ? theme.colors[color] : theme.colors.neutral,
			}

		if (variant === 'heading5Regular')
			return {
				fontFamily: FONT_FAMILIES.Poppins.regular,
				fontSize: 16,
				color: color ? theme.colors[color] : theme.colors.neutral,
			}

		if (variant === 'paragraphyMdRegular') paragraphyMdRegular

		if (variant === 'paragraphyMdMedium')
			return {
				fontFamily: FONT_FAMILIES.Poppins.medium,
				fontSize: 14,
				color: color ? theme.colors[color] : theme.colors.darkNeutral,
			}

		if (variant === 'paragraphySmRegular')
			return {
				fontFamily: FONT_FAMILIES.Poppins.regular,
				fontSize: 12,
				color: color ? theme.colors[color] : theme.colors.placeholder,
			}

		if (variant === 'paragraphySmMedium')
			return {
				fontFamily: FONT_FAMILIES.Poppins.medium,
				fontSize: 12,
				color: color ? theme.colors[color] : theme.colors.darkNeutral,
			}

		return paragraphyMdRegular
	}}
`
export { Typograph }
