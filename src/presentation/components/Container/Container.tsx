import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Box, BoxProps } from '../Box'

const Container = (props: BoxProps) => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: 'white' }} edges={['right', 'left', 'top']}>
			<Box {...props} flex={1} bg="background" />
		</SafeAreaView>
	)
}

export { Container }
