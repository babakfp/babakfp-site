import { getMarkdownPostData } from '$utils/markdown.js'

export async function load({ params }) {
	const { content, metadata } = await getMarkdownPostData('docs', params)
	return { content, metadata }
}
