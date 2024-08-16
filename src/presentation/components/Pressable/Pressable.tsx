import { TouchableOpacityProps } from 'react-native'

import styled from 'styled-components/native'

import { BackgroundColors, Border, Flex, Position, Size, Space, backgroundColors, border, flex, position, size, space } from '../theme'

interface PressableProps extends TouchableOpacityProps, Space, Position, Flex, BackgroundColors, Size, Border {}

const Pressable = styled.TouchableOpacity<PressableProps>`
	${space}
	${position}
	${flex} 
	${backgroundColors}
	${size}
	${border}
`
export { Pressable }
export type { PressableProps }
