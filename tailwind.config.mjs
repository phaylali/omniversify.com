/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'space-blue': '#0B3D91',
				'space-black': '#0C0C0C',
				'space-gray': '#1C1C1C',
			  },
		},
	},
	plugins: [],
}
