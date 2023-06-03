/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				red: 'hsl(0, 97%, 63%)',
				darkBlue: 'hsl(223, 30%, 9%)',
				grayishBlue: 'hsl(223, 23%, 46%)',
				semiDarkBlue: 'hsl(223, 36%, 14%)'
			},
			fontFamily: {
				sans: ['Outfit', 'sans-serif']
			}
		}
	},
	plugins: []
};
