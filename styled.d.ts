import 'styled-components/native'

declare module 'styled-components/native' {
	export interface DefaultTheme {
		colors: {
			primary: string
			lightPrimary: string
			darkPrimary: string

			placeholder: string
			neutral: string
			darkNeutral: string

			background: string
			backgroundSecondary: string
			border: string
			line: string

			success: string
			warning: string
			danger: string

			tabBarBackground: string
			tabBarBackgroundActive: string
			tabBarIconActive: string
			tabBarIconInactive: string
		}
		spacing: {
			sp0: number
			sp1: number
			sp2: number
			sp3: number
			sp4: number
			sp5: number
			sp6: number
			sp7: number
			sp8: number
			sp9: number
		}
		border: {
			xxsmall: number
			xsmall: number
			small: number
			medium: number
			large: number
			xlarge: number
			xxlarge: number
			full: number
		}
		iconSize: {
			small: number
			medium: number
			large: number
		}
	}
}
