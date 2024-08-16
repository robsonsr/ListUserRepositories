import { CSSProperties } from 'react'

import { css } from 'styled-components/native'

interface Text {
	textAlign?: CSSProperties['textAlign']
}

const text = css<Text>`
	${({ textAlign }) => ({
		textAlign,
	})}
`
export type { Text }
export { text }
