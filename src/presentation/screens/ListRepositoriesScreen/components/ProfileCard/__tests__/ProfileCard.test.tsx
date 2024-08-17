import React from 'react'

import { renderWithTheme, screen } from '@infrastructure/testUtils'

import { ProfileCard } from '../'
import { profile } from '../__fixtures__/profile'

const setup = () => {
	renderWithTheme(<ProfileCard profile={profile} />)
}

describe('ProfileCard', () => {
	test('SHOULD render correctly', () => {
		setup()

		expect(screen.getByText(profile.name)).toBeTruthy()
		expect(screen.getByText(`@${profile.login}`)).toBeTruthy()
		expect(screen.getByText(profile.bio)).toBeTruthy()
	})
})
