import React from 'react'
import { ActivityIndicator } from 'react-native'

import { useTheme } from 'styled-components/native'

import { Box } from '@components/Box'

const FullLoading = () => {
	const theme = useTheme()

	return (
		<Box flex={1} justifyContent="center" alignItems="center" bg="background">
			<ActivityIndicator size="large" color={theme.colors.primary} />
		</Box>
	)
}

export { FullLoading }
