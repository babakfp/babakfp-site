import { repos as reposBackup } from "$db/repos.js"

export async function load({ fetch }) {
	try {
		const repos = await Promise.all([
			fetch("https://api.github.com/repos/babakfp/svelte-outclick").then(res => res.json()),
			fetch("https://api.github.com/repos/babakfp/tailwindcss-addons").then(res => res.json()),
		])

		const packagesDownloads = await Promise.all([
			fetch("https://api.npmjs.org/downloads/point/last-week/svelte-outclick").then(res =>
				res.json()
			),
			fetch("https://api.npmjs.org/downloads/point/last-week/tailwindcss-addons").then(res =>
				res.json()
			),
		])

		// Add weeklyDownloads to package
		repos.map(repo => {
			repo.weeklyDownloads = packagesDownloads.filter(dl => dl.package === repo.name)[0]?.downloads
		})

		if (repos[0].message) {
			repos = reposBackup
		}

		return { repos }
	} catch (_) {
		console.log("Unsuccessful fetching the data from GitHub and NPM!")
		return { repos: reposBackup }
	}
}
