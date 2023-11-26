/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {		
		extend: {
			colors:{
				'matte-blue':'#77b5f2',
				'silver': 'silver'
			}
		},
	},
	plugins: [],
}
