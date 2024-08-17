import React from 'react'

import { renderWithTheme, screen } from '@infrastructure/testUtils'

import { UserNotFoundState } from '../'

const setup = () => {
	renderWithTheme(<UserNotFoundState login="usuario123" />)
}

describe('UserNotFoundState', () => {
	test('SHOULD render correctly', () => {
		setup()

		expect(screen.getByText('"usuario123"')).toBeTruthy()
		expect(screen.getByText('Nenhum usuário encontrado')).toBeTruthy()
		expect(screen.getByText('Verifique se a escrita está correta ou tente novamente')).toBeTruthy()
	})
})
