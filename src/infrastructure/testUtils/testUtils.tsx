import React from 'react'

import { MutableSnapshot, RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components/native'

import { MockedProvider, MockedResponse } from '@apollo/client/testing'
import { theme } from '@components'
import { fireEvent, render, screen, waitFor } from '@testing-library/react-native'

type Options = {
	mocks?: MockedResponse[]
	initializeState?: (mutableSnapshot: MutableSnapshot) => void
}

const renderWithTheme = (component: React.JSX.Element, { mocks = [], initializeState }: Options = {}) => {
	return render(
		<RecoilRoot initializeState={initializeState}>
			<MockedProvider mocks={mocks} addTypename={false}>
				<ThemeProvider theme={theme}>{component}</ThemeProvider>
			</MockedProvider>
		</RecoilRoot>,
	)
}

export { renderWithTheme, fireEvent, screen, waitFor }
