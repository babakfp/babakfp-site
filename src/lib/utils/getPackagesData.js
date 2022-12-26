import { packages } from "$db/packages.js"

const packageNames = ["svelte-outclick", "tailwindcss-addons"]

export const getPackagesData = async fetch => {
	try {
		const repos = await getRepos(fetch)
		const downloads = await getDownloads(fetch)
		const versions = await getVersions(fetch)

		const data = []
		for (let i = 0; i < packageNames.length; i++) {
			data.push({
				...(Object.keys(repos[i]).length > 0 ? repos[i] : packages[i]),
				...versions[i],
				...downloads[i],
			})
		}

		return { repos: data }
	} catch (error) {
		return { repos: packages }
	}
}

async function getRepos(fetch) {
	const repos = []
	for (const packageName of packageNames) {
		try {
			const res = await fetch(`https://api.github.com/repos/babakfp/${packageName}`)
			const data = await res.json()
			// Github returns a message key if we exit the API limit
			if (data.message) {
				await repos.push({})
			} else {
				await repos.push({
					name: data.name,
					url: data.html_url,
					description: data.description,
					stars: data.stargazers_count,
					// license: data.license?.spdx_id,
				})
			}
		} catch {
			// If the fetch fails, we don't want to show an error.
			repos.push({})
		}
	}
	return repos
}

async function getDownloads(fetch) {
	const downloads = []
	for (const packageName of packageNames) {
		try {
			const res = await fetch(`https://api.npmjs.org/downloads/point/last-week/${packageName}`)
			const data = await res.json()
			await downloads.push({
				downloads: data.downloads,
			})
		} catch {
			// If the fetch fails, we don't want to show an error.
			downloads.push({})
		}
	}
	return downloads
}

async function getVersions(fetch) {
	const versions = []
	for (const packageName of packageNames) {
		try {
			const res = await fetch(`https://registry.npmjs.org/${packageName}`)
			const data = await res.json()
			await versions.push({
				version: data["dist-tags"].latest,
			})
		} catch {
			// If the fetch fails, we don't want to show an error.
			versions.push({})
		}
	}
	return versions
}
