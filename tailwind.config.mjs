/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:
			{
				// Colors used in the project
				background: "#ECE6E1",
				text: "#4D4D4D",
				white: "#FFFFFF",
				main: "#0B73FD",
				accent: "#F77200",
				text_dimmed: "rgba(77,77,77,0.5)"
			},

			screens:
			{
				// Breakpoints for the project
				phone:"0px", // Default breakpoint
				tablet:"768px",
				desktop:"1280px"
			}
		},
	},
	plugins: [],
}
