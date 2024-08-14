import { Dimensions } from 'react-native'

import { DefaultTheme } from 'styled-components/native'

const windowHeight = Dimensions.get('window').height

const palette = {
	lightTurquoise: '#D4EDEE',
	turquoise: '#32C0C6',
	darkTurquoise: '#329599',

	white: '#FFFFFF',
	lighterGray: '#E3E6E9',
	lightGray: '#8C8C8C',
	gray: '#616161',
	darkGray: '#4E4E4E',

	matte: '#F3F3F5',
	green: '#5CB85C',
	goldenYellow: '#FFB22B',
	reddishPink: '#FC4B6C',
}

const theme: DefaultTheme = {
	colors: {
		lightPrimary: palette.lightTurquoise,
		primary: palette.turquoise,
		darkPrimary: palette.darkTurquoise,

		placeholder: palette.lightGray,
		neutral: palette.gray,
		darkNeutral: palette.darkGray,

		background: palette.white,
		backgroundSecondary: palette.matte,
		border: palette.lighterGray,
		line: palette.lighterGray,

		success: palette.green,
		warning: palette.goldenYellow,
		danger: palette.reddishPink,
	},
	spacing: {
		sp0: 0,
		sp1: 2,
		sp2: 4,
		sp3: 8,
		sp4: 16,
		sp5: 32,
		sp6: 64,
		sp7: 128,
		sp8: 256,
		sp9: 512,
	},
	border: {
		xxsmall: 2,
		xsmall: 4,
		small: 8.0,
		medium: 16,
		large: 32,
		xlarge: 48,
		xxlarge: 64,
		full: windowHeight,
	},
	iconSize: {
		small: 15,
		medium: 20,
		large: 35,
	},
}

export { theme }
