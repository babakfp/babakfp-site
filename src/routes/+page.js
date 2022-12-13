import { error } from '@sveltejs/kit'
const pinnedRepos = ['svelte-outclick', 'tailwindcss-addons', 'farsgamer']

export async function load({ fetch }) {
	try {
		const repos = await Promise.all([
			fetch('https://api.github.com/repos/babakfp/svelte-outclick').then(res => res.json()),
			fetch('https://api.github.com/repos/babakfp/tailwindcss-addons').then(res => res.json()),
		])
		return { repos }
	} catch (_) {
		throw error(500, 'Unsuccessful fetching the data from GitHub!')
	}
}
