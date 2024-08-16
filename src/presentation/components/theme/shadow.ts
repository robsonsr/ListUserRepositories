import { Platform } from 'react-native'

import { DefaultTheme, css } from 'styled-components/native'

interface Shadow {
	shadow?: keyof DefaultTheme['shadow']
}

const shadow = css<Shadow>`
	${({ shadow, theme }) => {
		if (!shadow) return

		const shadowToApply = theme.shadow[shadow]
		return Platform.select({
			android: {
				// @TODO: https://github.com/styled-components/styled-components/issues/3254
				// Bug do styled components, devemos transformar o valor em uma string para evitar warning
				elevation: `${shadowToApply.elevation}`,
			},
			ios: {
				shadowColor: shadowToApply.shadowColor,
				shadowOpacity: `${shadowToApply.shadowOpacity}`,
				shadowRadius: shadowToApply.shadowRadius,
				// @TODO: https://github.com/styled-components/styled-components/issues/1522
				shadowOffset: `${shadowToApply.shadowOffset.width}px ${shadowToApply.shadowOffset.height}px`,
			},
		})
	}}
`

export type { Shadow }
export { shadow }
