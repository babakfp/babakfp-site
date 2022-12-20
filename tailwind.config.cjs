const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")
const tailwindcssAddons = require("tailwindcss-addons")
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette")

removeDeprecatedColors(colors)

module.exports = {
	content: ["./src/**/*.{html,svelte,md}"],
	presets: [tailwindcssAddons()],
	theme: {
		extend: {
			spacing: {
				"header-height": "4rem",
			},
		},
		colors: {
			current: "currentColor",
			transparent: "transparent",
			white: "#FFFFFF",
			primary: colors.sky[600],
			link: colors.sky[500],
			gray: {
				// 50: colors.slate[50],
				// 100: colors.slate[100],
				// 200: colors.slate[200],
				300: colors.slate[300],
				400: colors.slate[400],
				500: colors.slate[500],
				600: colors.slate[600],
				700: colors.slate[700],
				800: colors.slate[800],
				// 900: colors.slate[900],
			},
			sky: colors.sky,
			indigo: colors.indigo,
			star: "#f59e0b",
		},
		container: {
			center: true,
			padding: "1rem",
		},
		borderRadius: {
			none: "0px",
			DEFAULT: "0.5rem",
			full: "9999px",
		},
		fontFamily: {
			sans: ['"Inter"', defaultTheme.fontFamily.sans],
			mono: ['"DankMono"', defaultTheme.fontFamily.mono],
		},
		fontWeight: {
			// thin: '100',
			// extralight: '200',
			// light: '300',
			regular: "400",
			// medium: '500',
			semibold: "600",
			// bold: '700',
			// extrabold: '800',
			black: "900",
		},
		backdropBlur: {
			DEFAULT: "8px",
			lg: "16px",
			"3xl": "64px",
		},
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				".tap-highlight-transparent": {
					"-webkit-tap-highlight-color": "transparent",
				},
			})
		},
		function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					highlight: value => ({ "box-shadow": `inset 0 0 0 1px ${value}` }),
				},
				{ values: flattenColorPalette(theme("backgroundColor")), type: "color" }
			)
		},
	],
}

function removeDeprecatedColors(colors) {
	// Removing deprecated colors
	delete colors.lightBlue
	delete colors.warmGray
	delete colors.trueGray
	delete colors.coolGray
	delete colors.blueGray
}
