import React from 'react'

import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components/native'

import { MockedProvider, MockedResponse } from '@apollo/client/testing'
import { theme } from '@components'
import { fireEvent, render, screen, waitFor } from '@testing-library/react-native'

const renderWithTheme = (component: React.JSX.Element, mocks?: MockedResponse[]) => {
	return render(
		<RecoilRoot>
			<MockedProvider mocks={mocks ?? []} addTypename={false}>
				<ThemeProvider theme={theme}>{component}</ThemeProvider>
			</MockedProvider>
		</RecoilRoot>,
	)
}

export { renderWithTheme, fireEvent, screen, waitFor }
