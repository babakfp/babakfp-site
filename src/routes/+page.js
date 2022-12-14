import { error } from '@sveltejs/kit'
const pinnedRepos = ['svelte-outclick', 'tailwindcss-addons', 'farsgamer']

export async function load({ fetch }) {
	try {
		const repos = await Promise.all([
			fetch('https://api.github.com/repos/babakfp/svelte-outclick').then(res => res.json()),
			fetch('https://api.github.com/repos/babakfp/tailwindcss-addons').then(res => res.json()),
		])
		const npmDownloads = await Promise.all([
			fetch(' https://api.npmjs.org/downloads/point/last-week/svelte-outclick').then(res => res.json()),
			fetch(' https://api.npmjs.org/downloads/point/last-week/tailwindcss-addons').then(res => res.json()),
		])

		// Add weeklyDownloads to package
		repos.map(repo => {
			repo.weeklyDownloads = npmDownloads.filter(dl => dl.package === repo.name)[0]?.downloads
		})
		
		return { repos }
	} catch (_) {
		console.log(_)
		throw error(500, 'Unsuccessful fetching the data from GitHub!')
	}
}
