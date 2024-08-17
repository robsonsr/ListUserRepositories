import { FlatList } from 'react-native'

import { styled } from 'styled-components/native'

import { Repository } from '@domain/models'

const ReposityList = styled(FlatList<Repository>).attrs(({ theme }) => ({
	contentContainerStyle: {
		paddingHorizontal: theme.spacing.sp4,
		paddingVertical: theme.spacing.sp5,
	},
}))``

export { ReposityList }
