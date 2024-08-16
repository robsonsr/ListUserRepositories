import { CSSProperties } from 'react'
import { css } from 'styled-components/native'

const applyProperty = ({ property, value }: { property: keyof CSSProperties; value?: number | string }) => {
	if (value === undefined || value === null) return {}
	return {
		[property]: value,
	}
}

interface Size {
	height?: CSSProperties['height']
	minHeight?: CSSProperties['minHeight']
	maxHeight?: CSSProperties['maxHeight']
	width?: CSSProperties['width']
	minWidth?: CSSProperties['minWidth']
	maxWidth?: CSSProperties['maxWidth']
}

const size = css<Size>`
	${({ height }) => applyProperty({ property: 'height', value: height })}
	${({ minHeight }) => applyProperty({ property: 'minHeight', value: minHeight })}
    ${({ maxHeight }) => applyProperty({ property: 'maxHeight', value: maxHeight })}
	${({ width }) => applyProperty({ property: 'width', value: width })}
    ${({ minWidth }) => applyProperty({ property: 'minWidth', value: minWidth })}
    ${({ maxWidth }) => applyProperty({ property: 'minWidth', value: maxWidth })}
`

export type { Size }
export { size }
