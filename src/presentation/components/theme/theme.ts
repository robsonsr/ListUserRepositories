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

	blue: '#3276C6',
	red: '#FF4343',
	yellow: '#F5DA79',
}

const theme: DefaultTheme = {
	colors: {
		lightPrimary: palette.lightTurquoise,
		primary: palette.turquoise,
		darkPrimary: palette.darkTurquoise,

		placeholder: palette.lightGray,
		inputText: palette.darkGray,
		inputIcon: palette.lightGray,

		neutral: palette.gray,
		darkNeutral: palette.darkGray,

		background: palette.white,
		backgroundSecondary: palette.matte,
		border: palette.lighterGray,
		borderActive: palette.turquoise,
		line: palette.lighterGray,

		success: palette.green,
		warning: palette.goldenYellow,
		danger: palette.reddishPink,

		tabBarBackground: palette.white,
		tabBarBackgroundActive: palette.turquoise,
		tabBarIconActive: palette.white,
		tabBarIconInactive: palette.lightGray,

		iconActive: palette.turquoise,
		iconNeutral: palette.lightGray,

		blue: palette.blue,
		red: palette.red,
		yellow: palette.yellow,
		gray: palette.gray,
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
		small: 8,
		medium: 16,
		large: 32,
		xlarge: 48,
		xxlarge: 64,
		full: windowHeight,
	},
	iconSize: {
		small: 16,
		medium: 24,
		large: 32,
	},

	shadow: {
		small: {
			shadowColor: '#000000',
			shadowOffset: {
				width: 0,
				height: 1,
			},
			shadowOpacity: 0.16,
			shadowRadius: 1.51,
			elevation: 2,
		},
		medium: {
			shadowColor: '#000000',
			shadowOffset: {
				width: 0,
				height: 3,
			},
			shadowOpacity: 0.17,
			shadowRadius: 3.05,

			elevation: 4,
		},
		large: {
			shadowColor: '#000000',
			shadowOffset: {
				width: 0,
				height: 6,
			},
			shadowOpacity: 0.2,
			shadowRadius: 5.62,

			elevation: 8,
		},
	},
	fonts: {
		weight: {
			regular: 'Poppins-Regular',
			medium: 'Poppins-Medium',
			SemiBold: 'Poppins-SemiBold',
		},
	},
}

export { theme }
