const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")
const tailwindcssAddons = require("tailwindcss-addons")

module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts,md}"],
	presets: [tailwindcssAddons()],
	theme: {
		extend: {
			spacing: {
				"header-height": "4rem",
			},
		},
		colors: {
			transparent: "transparent",
			white: "#FFFFFF",
			primary: colors.sky[600],
			"primary-light": colors.sky[500],
			gray: colors.slate,
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
		({ matchUtilities, theme }) => {
			matchUtilities(
				{
					highlight: value => ({ "box-shadow": `inset 0 0 0 1px ${value}` }),
				},
				{ values: flattenColorPalette(theme("backgroundColor")), type: "color" }
			)
		},
		({ matchUtilities, theme }) => {
			matchUtilities(
				{
					"highlight-top": value => ({ "box-shadow": `inset 0 1px 0 0 ${value}` }),
				},
				{ values: flattenColorPalette(theme("backgroundColor")), type: "color" }
			)
		},
	],
}

function flattenColorPalette(colors) {
	return Object.assign(
		{},
		...Object.entries(colors ?? {}).flatMap(([color, values]) =>
			typeof values == "object"
				? Object.entries(flattenColorPalette(values)).map(([number, hex]) => ({
						[color + (number === "DEFAULT" ? "" : `-${number}`)]: hex,
				  }))
				: [{ [`${color}`]: values }]
		)
	)
}
