import { readable } from 'svelte/store'

export const docsMenuItems = readable([
	{
		title: 'Svelte OutClick',
		href: '/docs/svelte-outclick',
		github: 'https://github.com/babakfp/svelte-outclick',
		items: [
			{
				title: 'Introduction',
				href: '/docs/svelte-outclick',
			},
			{
				title: 'CHANGELOG',
				href: '/docs/svelte-outclick/changelog',
			},
		],
	},
	{
		title: 'TailwindCSS Addons',
		href: '/docs/tailwindcss-addons',
		github: 'https://github.com/babakfp/tailwindcss-addons',
		items: [
			{
				title: 'Introduction',
				href: '/docs/tailwindcss-addons',
			},
			{
				title: 'CHANGELOG',
				href: '/docs/tailwindcss-addons/changelog',
			},
			{
				title: 'Presets',
				href: '/docs/tailwindcss-addons/presets',
			},
			{
				title: 'Base',
				href: '/docs/tailwindcss-addons/base',
			},
			{
				title: 'Utilities',
				subItems: [
					{
						title: 'Direction',
						href: '/docs/tailwindcss-addons/direction',
					},
					{
						title: 'User Drag',
						href: '/docs/tailwindcss-addons/user-drag',
					},
					{
						title: 'Flip',
						href: '/docs/tailwindcss-addons/flip',
					},
					{
						title: 'Hide & Show',
						href: '/docs/tailwindcss-addons/hide',
					},
					{
						title: 'Input Resets',
						href: '/docs/tailwindcss-addons/input-resets',
					},
					{
						title: 'Inset Center',
						href: '/docs/tailwindcss-addons/inset',
					},
					{
						title: 'Overflow Unset',
						href: '/docs/tailwindcss-addons/overflow',
					},
					{
						title: 'Short Placements',
						href: '/docs/tailwindcss-addons/short-placements',
					},
				],
			},
			{
				title: 'Variants',
				subItems: [
					{
						title: 'Not Variants',
						href: '/docs/tailwindcss-addons/not-variants',
					},
				],
			},
		],
	},
])
