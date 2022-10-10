import { extendTheme } from '@chakra-ui/react'
import colorTokens from './colorTokens'
import components from './components'

const systemFonts =
	'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'

const theme = extendTheme({
	fonts: {
		body: `Golos Text, ${systemFonts}`,
		heading: `Golos Text, ${systemFonts}`,
	},
	fontSizes: {
		small: '0.9375rem',
		medium: '1.0625rem',
		large: '1.1875rem',
	},
	letterSpacings: {
		normal: '-0.03rem',
		wide: '0rem',
		wider: '0.02rem',
		widest: '0.04rem',
	},
	transition: {
		duration: {
			faster: '75ms',
			fast: '100ms',
			normal: '150ms',
			slow: '200ms',
			slower: '300ms',
		},
	},
	shadows: {
		'dark-lg':
			'rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px',
	},
	styles: {
		global: {
			body: {
				bg: 'bg',
				color: 'text',
				fontSize: 'md',
				letterSpacing: 'normal',
				scrollBehavior: 'smooth',
				overflowX: 'hidden',
				overflowY: 'scroll',
			},
			'*, *::before, &::after': {
				borderColor: 'border',
			},
			h1: {
				color: 'text-secondary',
			},
		},
	},
	semanticTokens: {
		colors: colorTokens,
	},
	components,
})

export default theme
