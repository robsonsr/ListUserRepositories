import React, { memo } from 'react'
import { Card } from '@components/Card'
import { Box, Column, Row, Typograph } from '@components'
import { Profile } from '@domain/models'
import { Image } from 'react-native'

interface ProfileCardProps {
	profile: Profile
}

const ProfileCard = memo(({ profile }: ProfileCardProps) => {
	return (
		<Card mt="sp4">
			<Row>
				<Box bg="backgroundSecondary" radius="full" height={48} width={48} justifyContent="center" alignItems="center">
					<Image source={{ uri: profile.avatarUrl }} height={48} width={48} borderRadius={48} />
				</Box>

				<Column ml="sp2">
					<Typograph variant="heading2SemiBold">{profile.name ? profile.name : 'N/A'}</Typograph>
					<Typograph variant="paragraphyMdRegular">@{profile.login}</Typograph>
				</Column>
			</Row>

			<Typograph variant="paragraphyMdRegular" mt="sp2">
				{profile.bio ? profile.bio : 'Sem descrição'}
			</Typograph>
		</Card>
	)
})

export { ProfileCard }
