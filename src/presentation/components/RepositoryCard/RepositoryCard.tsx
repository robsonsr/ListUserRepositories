import React, { memo } from 'react'

import { Box, Icon, Row, Typograph } from '@components'
import { Card, CardProps } from '@components/Card'
import { Repository } from '@domain/models'
import { Patterns, dateUtil } from '@infrastructure/dateUtil'

interface RepositoryCardProps extends Omit<CardProps, 'onPress'> {
	repository: Repository
	isFavorite: boolean
	onPress: (repository: Repository) => void
}

const RepositoryCard = memo(({ repository, isFavorite, onPress, ...props }: RepositoryCardProps) => {
	return (
		<Card
			mt="sp3"
			onPress={() => {
				onPress(repository)
			}}
			{...props}
		>
			<Row justifyContent="space-between">
				<Box flex={1} mr="sp3">
					<Typograph numberOfLines={1} variant="heading2SemiBold">
						{repository.name}
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
					testID={`icon-${repository.name}`}
				>
					<Icon name="heart" size="small" color={isFavorite ? 'iconActive' : 'iconNeutral'} />
				</Box>
			</Row>

			<Typograph variant="paragraphyMdRegular" mt="sp2">
				{repository?.description ? repository.description : 'N/A'}
			</Typograph>

			<Row alignItems="center" mt="sp3">
				{repository.primaryLanguage?.name && (
					<>
						<Box height={16} width={16} bg={repository.primaryLanguage?.color} radius="full" />

						<Typograph variant="paragraphyMdRegular" ml="sp2">
							{repository.primaryLanguage?.name}
						</Typograph>
					</>
				)}
			</Row>
			{repository?.updatedAt && (
				<Typograph mt="sp2">Updated on {dateUtil.format(repository.updatedAt, Patterns.dMMMyyyy)}</Typograph>
			)}
		</Card>
	)
})

export { RepositoryCard }
