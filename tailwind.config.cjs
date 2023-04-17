/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				black: '#0D0D0D',
				cream: '#F5FFF8',
				gray: {
					200: '#FAFAFA',
					500: '#D9D9D9'
				},
				primary: {
					200: '#00FF5C',
					500: '#00854D',
					800: '#0A3329'
				}
			}
		},
	},
	plugins: [],
}