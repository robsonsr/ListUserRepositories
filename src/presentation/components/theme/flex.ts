/* eslint-disable @typescript-eslint/no-shadow */
import { CSSProperties } from 'react'
import { css } from 'styled-components/native'

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
	${({ flex, flexDirection, justifyContent, alignItems, alignSelf, alignContent, flexWrap, flexBasis, flexGrow, flexShrink }) => ({
		flex,
		flexDirection,
		justifyContent,
		alignItems,
		alignSelf,
		alignContent,
		flexWrap,
		flexBasis,
		flexGrow,
		flexShrink,
	})}
`
export type { Flex }
export { flex }
