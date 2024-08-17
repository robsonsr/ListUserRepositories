import React from 'react'

import { Box, MessageState, Typograph } from '@components'

interface UserNotFoundStateProps {
	login: string
}

const UserNotFoundState = ({ login }: UserNotFoundStateProps) => {
	return (
		<Box justifyContent="center" alignItems="center" mt="sp5">
			<Typograph mt="sp2" variant="heading4SemiBold" color="primary">
				"{login}"
			</Typograph>
			<MessageState
				title="Nenhum usuário encontrado"
				description="Verifique se a escrita está correta ou tente novamente"
			/>
		</Box>
	)
}

export { UserNotFoundState }
