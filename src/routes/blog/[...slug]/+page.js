import { getMarkdownPostData, getMarkdownPosts } from '$utils/markdown.js'

export async function load({ params }) {
	const { content, metadata } = await getMarkdownPostData('blog', params)
	return {
		content,
		metadata,
		posts: await getMarkdownPosts('blog'),
	}
}
