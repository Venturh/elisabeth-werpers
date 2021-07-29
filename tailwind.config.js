const colors = require('tailwindcss/colors');

function getShadow(color) {
	return `-1px 1px ${color}, -2px 2px ${color}, -3px 3px ${color},
		-4px 4px ${color}, -5px 5px ${color}, -6px 6px ${color}, -7px 7px ${color},
		-8px 8px ${color}`;
}

module.exports = {
	darkMode: 'class',
	mode: 'jit',
	purge: ['./**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			'bg-primary': 'var(--bg-primary)',
			'bg-secondary': 'var(--bg-secondary)',
			accent: 'var(--accent)',
			'text-primary': 'var(--text-primary)',
			'text-secondary': 'var(--text-secondary)',
			brand: colors.indigo,
			'brand-darker': 'var(--brand-darker)',
			'brand-lighter': 'var(--brand-lighter)',
			'brand-contrast': 'var(--brand-contrast)',
			error: 'var(--error)',
			success: 'var(--success)',
			black: colors.black,
			white: colors.white,
			tansparent: 'transparent',
			...colors,
		},
		fontFamily: {
			sans: ['Prompt'],
			serif: ['Prompt'],
			mono: ['Prompt'],
			display: ['Prompt'],
			body: ['Prompt'],
		},
		extend: {
			backgroundColor: {
				primary: 'var(--bg-primary)',
				secondary: 'var(--bg-secondary)',
			},
			textColor: {
				primary: 'var(--text-primary)',
				secondary: 'var(--text-secondary)',
			},
			maxWidth: {
				xsm: '21rem',
				'2.5xl': '45rem',
			},
			boxShadow: {
				'twitch-accent': getShadow('#e4e4e7'),
			},
			screens: {
				gridBp: { raw: '(min-height: 500px)' },
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
	],
};
