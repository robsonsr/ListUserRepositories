import React from 'react'

import { MockedResponse } from '@apollo/client/testing'
import { GET_PROFILE } from '@graphql'
import { fireEvent, renderWithTheme, screen, waitFor } from '@infrastructure/testUtils'

import { ListRepositoriesScreen } from '../'
import { firstResponse, secondResponse } from '../__fixtures__/user'

const mockFirstResponse: MockedResponse = {
	request: {
		query: GET_PROFILE,
		variables: { login: 'robsonsr', after: '' },
	},
	result: {
		data: firstResponse,
	},
}

const mocksFetchMore: MockedResponse = {
	request: {
		query: GET_PROFILE,
		variables: { login: 'robsonsr', after: 's1t' },
	},
	result: {
		data: secondResponse,
	},
}

const setup = () => {
	renderWithTheme(<ListRepositoriesScreen />, [mockFirstResponse, mocksFetchMore])
}

describe('ListRepositoriesScreen', () => {
	test('SHOULD render correctly', () => {
		setup()

		expect(screen.getByText('Procure pelo Nome ou Nome de Usuário')).toBeTruthy()
		expect(screen.getByText('Encontre os repositórios de algum usuário digitando no campo abaixo')).toBeTruthy()
		expect(screen.getByPlaceholderText('Buscar usuário')).toBeTruthy()
	})

	test('SHOULD render correctly WHEN search by login ', async () => {
		setup()

		const inputSearch = await screen.getByPlaceholderText('Buscar usuário')

		jest.useFakeTimers()

		fireEvent.changeText(inputSearch, 'robsonsr')

		jest.advanceTimersByTime(1000)

		jest.useRealTimers()

		await waitFor(() => {
			expect(screen.getByText('Robson')).toBeTruthy()
		})

		expect(screen.getByText('@robsonsr')).toBeTruthy()
		expect(screen.getByText('Bio qualquer')).toBeTruthy()
		expect(screen.getByText('spotfy')).toBeTruthy()
	})

	// @TODO: por algum motivo fetchMore não reponde com o mock correto
	test.skip('SHOULD fetch list correctly WHEN scroll', async () => {
		setup()

		const inputSearch = await screen.getByPlaceholderText('Buscar usuário')

		jest.useFakeTimers()

		fireEvent.changeText(inputSearch, 'robsonsr')

		jest.advanceTimersByTime(1000)

		await waitFor(() => {
			expect(screen.getByText('Robson')).toBeTruthy()
		})

		expect(screen.getByText('@robsonsr')).toBeTruthy()
		expect(screen.getByText('Bio qualquer')).toBeTruthy()
		expect(screen.getByText('spotfy')).toBeTruthy()

		expect(screen.queryByText('journey')).not.toBeTruthy()

		const list = screen.getByTestId('repository-list')

		fireEvent(list, 'onEndReached')

		await waitFor(() => {
			expect(screen.queryByText('journey')).toBeTruthy()
		})

		jest.useRealTimers()
	})

	test('SHOULD favorite correctly', async () => {
		setup()

		const inputSearch = await screen.getByPlaceholderText('Buscar usuário')

		jest.useFakeTimers()

		fireEvent.changeText(inputSearch, 'robsonsr')

		jest.advanceTimersByTime(1000)
		jest.useRealTimers()

		await waitFor(() => {
			expect(screen.getByText('Robson')).toBeTruthy()
		})

		expect(screen.getByTestId('icon-spotfy').props).toHaveProperty('borderColor', 'backgroundSecondary')

		fireEvent.press(screen.getByText('spotfy'))

		expect(screen.getByTestId('icon-spotfy').props).toHaveProperty('borderColor', 'primary')
	})
})
