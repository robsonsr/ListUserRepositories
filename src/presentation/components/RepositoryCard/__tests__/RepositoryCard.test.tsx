import React from 'react'

import { Patterns, dateUtil } from '@infrastructure/dateUtil'
import { fireEvent, renderWithTheme, screen } from '@infrastructure/testUtils'

import { RepositoryCard } from '../'
import { repository } from '../__fixtures__/repository'

const onPressMock = jest.fn()

interface Setup {
	isFavorite?: boolean
}

const setup = ({ isFavorite = false }: Setup = {}) => {
	renderWithTheme(
		<RepositoryCard
			repository={repository}
			isFavorite={isFavorite}
			onPress={onPressMock}
			testID="repository-card"
		/>,
	)
}

describe('RepositoryCard', () => {
	test('SHOULD render correctly', () => {
		setup()

		expect(screen.getByText(repository.description)).toBeTruthy()
		expect(screen.getByText(repository.primaryLanguage.name)).toBeTruthy()
		expect(screen.getByTestId(`icon-${repository.name}`).props).toHaveProperty('borderColor', 'backgroundSecondary')
		expect(screen.getByText(`Updated on ${dateUtil.format(repository.updatedAt, Patterns.dMMMyyyy)}`)).toBeTruthy()
	})

	test('WHEN isFavorite SHOULD render correctly', () => {
		setup({ isFavorite: true })

		expect(screen.getByTestId(`icon-${repository.name}`).props).toHaveProperty('borderColor', 'primary')
	})

	test('SHOULD be able to click', () => {
		setup()

		fireEvent.press(screen.getByText(repository.name))
		expect(onPressMock).toHaveBeenCalledWith(repository)
	})
})
