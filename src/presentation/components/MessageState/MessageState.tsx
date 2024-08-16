import React from 'react'
import { Box } from '@components/Box'
import { Typograph } from '@components/Typograph'

interface Props {
	title: string
	description: string
}

const MessageState = ({ title, description }: Props) => {
	return (
		<Box justifyContent="center" alignItems="center">
			<Typograph variant="heading4SemiBold" textAlign="center">
				{title}
			</Typograph>

			<Typograph variant="paragraphyMdRegular" textAlign="center">
				{description}
			</Typograph>
		</Box>
	)
}

export { MessageState }
