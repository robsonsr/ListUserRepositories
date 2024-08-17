import React from 'react'

import { MutableSnapshot } from 'recoil'

import { fireEvent, renderWithTheme, screen } from '@infrastructure/testUtils'
import { favoriteRepositoriesState } from '@presentation/atoms/favoriteRepositories'

import { FavoriteRepositoriesScreen } from '../'
import { favorites } from '../__fixtures__/favorites'

const initializeState = (mutableSnapshot: MutableSnapshot) => {
	mutableSnapshot.set(favoriteRepositoriesState, favorites)
}

const setup = () => {
	renderWithTheme(<FavoriteRepositoriesScreen />, {
		initializeState,
	})
}

describe('FavoriteRespositoriesScreen', () => {
	test('SHOULD render two favorites correctly', () => {
		setup()

		expect(screen.getByText('Meus favoritos')).toBeTruthy()
		expect(screen.getByText('spotfy')).toBeTruthy()
		expect(screen.getByText('gitify')).toBeTruthy()
		expect(screen.getAllByTestId('repository-card').length).toBe(2)
	})

	test('SHOULD remove from favorites correclty WHEN the card is clicked', () => {
		setup()

		expect(screen.getAllByTestId('repository-card').length).toBe(2)
		expect(screen.getByText('spotfy')).toBeTruthy()
		expect(screen.getByText('gitify')).toBeTruthy()

		fireEvent.press(screen.getByText('spotfy'))

		expect(screen.getAllByTestId('repository-card').length).toBe(1)
		expect(screen.queryByText('spotfy')).not.toBeTruthy()
		expect(screen.getByText('gitify')).toBeTruthy()
	})
})
