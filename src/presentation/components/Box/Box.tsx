import { ViewProps } from 'react-native'

import styled from 'styled-components/native'

import * as T from '../theme'

interface BoxProps extends ViewProps, T.Space, T.Flex, T.Size, T.BackgroundColors, T.Border, T.Shadow {}

const Box = styled.View<BoxProps>`
	${T.space}
	${T.flex} 
    ${T.size}
    ${T.backgroundColors}
    ${T.border}
	${T.shadow}
`

export { Box }
export type { BoxProps }
