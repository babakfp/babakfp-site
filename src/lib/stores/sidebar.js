import { readable } from "svelte/store"

export const docsMenuItems = readable([
	{
		name: "svelte-outclick",
		rootUrl: "/docs/svelte-outclick",
		primaryLinks: [
			{
				title: "Demo",
				href: "https://svelte-outclick.vercel.app",
				isExternal: true,
			},
			{
				title: "GitHub",
				href: "https://github.com/babakfp/svelte-outclick",
				isExternal: true,
			},
			{
				title: "NPM",
				href: "https://www.npmjs.com/package/svelte-outclick",
				isExternal: true,
			},
		],
		items: [
			{
				title: "Getting Started",
				items: [
					{
						title: "Introduction",
						href: "/docs/svelte-outclick",
					},
					{
						title: "CHANGELOG",
						href: "/docs/svelte-outclick/changelog",
					},
				],
			},
		],
	},
	{
		name: "tailwindcss-addons",
		rootUrl: "/docs/tailwindcss-addons",
		primaryLinks: [
			{
				title: "GitHub",
				href: "https://github.com/babakfp/tailwindcss-addons",
				isExternal: true,
			},
			{
				title: "NPM",
				href: "https://www.npmjs.com/package/tailwindcss-addons",
				isExternal: true,
			},
		],
		items: [
			{
				title: "Getting Started",
				items: [
					{
						title: "Introduction",
						href: "/docs/tailwindcss-addons",
					},
					{
						title: "CHANGELOG",
						href: "/docs/tailwindcss-addons/changelog",
					},
				],
			},
			{
				title: "Presets",
				// items: [
				// 	{
				// 		title: "Presets",
				href: "/docs/tailwindcss-addons/presets",
				// 	},
				// ],
			},
			{
				title: "Base",
				// items: [
				// 	{
				// 		title: "Base",
				href: "/docs/tailwindcss-addons/base",
				// 	},
				// ],
			},
			{
				title: "Utilities",
				items: [
					{
						title: "Direction",
						href: "/docs/tailwindcss-addons/direction",
					},
					{
						title: "User Drag",
						href: "/docs/tailwindcss-addons/user-drag",
					},
					{
						title: "Flip",
						href: "/docs/tailwindcss-addons/flip",
					},
					{
						title: "Hide & Show",
						href: "/docs/tailwindcss-addons/hide",
					},
					{
						title: "Input Resets",
						href: "/docs/tailwindcss-addons/input-resets",
					},
					{
						title: "Inset Center",
						href: "/docs/tailwindcss-addons/inset",
					},
					{
						title: "Overflow Unset",
						href: "/docs/tailwindcss-addons/overflow",
					},
					{
						title: "Short Placements",
						href: "/docs/tailwindcss-addons/short-placements",
					},
				],
			},
			{
				title: "Variants",
				items: [
					{
						title: "Not Variants",
						href: "/docs/tailwindcss-addons/not-variants",
					},
				],
			},
		],
	},
])
