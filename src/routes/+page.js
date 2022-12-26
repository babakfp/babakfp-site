import { getPackagesData } from "$utils/getPackagesData.js"
import wordpressRepositoryPlugins from "$db/wordpressRepositoryPlugins.json" assert { type: "json" }
import rtlThemePlugins from "$db/rtlThemePlugins.json" assert { type: "json" }
import frontendPortfolios from "$db/frontendPortfolios.json" assert { type: "json" }

export async function load({ fetch }) {
	return {
		...(await getPackagesData(fetch)),
		wordpressRepositoryPlugins,
		rtlThemePlugins,
		frontendPortfolios,
	}
}
