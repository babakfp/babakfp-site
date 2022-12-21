import { getPackagesData } from "$utils/getPackagesData.js"

export async function load({ fetch }) {
	return await getPackagesData()
}
