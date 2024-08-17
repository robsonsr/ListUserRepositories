import React, { memo } from 'react'

import { Box, Icon, Row, Typograph } from '@components'
import { Card, CardProps } from '@components/Card'
import { Repository } from '@domain/models'
import { Patterns, dateUtil } from '@infrastructure/dateUtil'

interface RepositoryCardProps extends Omit<CardProps, 'onPress'> {
	respository: Repository
	isFavorite: boolean
	onPress: (repository: Repository) => void
}

const RepositoryCard = memo(({ respository, isFavorite, onPress, ...props }: RepositoryCardProps) => {
	return (
		<Card
			mt="sp3"
			onPress={() => {
				onPress(respository)
			}}
			{...props}
		>
			<Row justifyContent="space-between">
				<Box flex={1}>
					<Typograph numberOfLines={1} variant="heading2SemiBold">
						{respository.name}
					</Typograph>
				</Box>

				<Box
					borderWidth={1}
					radius="full"
					height={32}
					width={32}
					alignItems="center"
					justifyContent="center"
					borderColor={isFavorite ? 'primary' : 'backgroundSecondary'}
					bg={isFavorite ? 'background' : 'backgroundSecondary'}
					testID={`icon-${respository.name}`}
				>
					<Icon name="heart" size="small" color={isFavorite ? 'iconActive' : 'iconNeutral'} />
				</Box>
			</Row>

			<Typograph variant="paragraphyMdRegular" mt="sp2">
				{respository?.description ? respository.description : 'N/A'}
			</Typograph>

			<Row alignItems="center" m="sp2">
				{respository.primaryLanguage?.name && (
					<>
						<Box height={16} width={16} bg={respository.primaryLanguage?.color} radius="full" />
						<Typograph variant="paragraphyMdRegular" mt="sp2" ml="sp2">
							{respository.primaryLanguage?.name}
						</Typograph>
					</>
				)}
			</Row>
			{respository?.updatedAt && (
				<Typograph>Updated on {dateUtil.format(respository.updatedAt, Patterns.dMMMyyyy)}</Typograph>
			)}
		</Card>
	)
})

export { RepositoryCard }
