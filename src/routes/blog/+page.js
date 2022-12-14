import { getMarkdownPosts } from "$utils/markdown.js"

export async function load() {
	let posts = await getMarkdownPosts("blog")
	return { posts }
}
