import { error } from "@sveltejs/kit"

export async function load({ fetch }) {
	try {
		const githubRepositories = await Promise.all([
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
		githubRepositories.map(repo => {
			repo.weeklyDownloads = packagesDownloads.filter(dl => dl.package === repo.name)[0]?.downloads
		})

		return { githubRepositories }
	} catch (err) {
		console.log(err)
		throw error(500, "Unsuccessful fetching the data from GitHub!")
	}
}
