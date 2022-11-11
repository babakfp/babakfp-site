import { error } from '@sveltejs/kit'

const PostTypes = {
	BLOG: 'blog',
	DOCS: 'docs',
}

/**
	* @param {string[]} requiredMetadatas - Required metadatas for the post-type
	* @param {object{}} availableMetadatas - Posts available metadatas
	* @param {string} path - Path to the file
	* @returns {string|undefined} - Returns the error message
*/
const validateMissingMetadata = (requiredMetadatas, availableMetadatas, path) => {
	for (const metadata of requiredMetadatas) {
		if ( !availableMetadatas?.hasOwnProperty(metadata) ) {
			return `Missing metadata (${metadata}) in (${path})`
			break
		}
	}
}

/**
	* @param {string[]} postType
	* @returns {string[]} - Returns the required metadatas for validation
*/
const getRequiredMetadatas = (postType) => {
	if (postType === PostTypes.BLOG) {
		return ['title', 'description', 'modifiedAt', 'publishedAt']
	}
	return ['title']
}

/**
	* Creates slug based of markdown file name
	* @param {string} postType
	* @param {string} path - Markdown file path
	* @returns {string}
*/
const convertPathToSlug = (postType, path) => {
	return path
		.replace(`/src/lib/content/${postType}/`, '')
		.replace('.md', '')
		.replace('/index', '')
}

const getGlobPaths = async (postType) => {
	if (postType === PostTypes.BLOG) {
		return await import.meta.glob([
			'/src/lib/content/blog/**/*.md',
			'!/src/lib/content/blog/**/_*.md',
			'!/src/lib/content/blog/**/_*/*.md',
		])
	}
	if (postType === PostTypes.DOCS) {
		return await import.meta.glob([
			'/src/lib/content/docs/**/*.md',
			'!/src/lib/content/docs/**/_*.md',
			'!/src/lib/content/docs/**/_*/*.md',
		])
	}
}

/**
	* @param {string} postType
	* @returns {{metadata, slug}[]}
*/
export const getMarkdownPosts = async (postType) => {
	
	/** @type {string[]} */
	const files = await getGlobPaths(postType)

	/** @type {object[]} */
	const posts = await Promise.all(
		/**
			* @arg {string} path
			* @arg {function} resolver
		*/
		Object.entries(files).map(async ([path, resolver]) => {

			/** @type {string{}} */
			const { metadata } = await resolver()

			/** @type {string} */
			const slug = convertPathToSlug(postType, path)

			let isMetadataInvalid = validateMissingMetadata( getRequiredMetadatas(postType), metadata, path )
			if (isMetadataInvalid) throw error(500, isMetadataInvalid)

			return { metadata, slug, path }
		})
	)

	return posts
}

/**
	* @param {string} postType
*/
export const getMarkdownPostData = async (postType, params) => {
	let content
	let metadata

	/** @type {string[]} */
	const files = await getGlobPaths(postType)
	const paths = await Object.keys(files)

	if (paths.includes(`/src/lib/content/${postType}/${params.slug}.md`) &&
		paths.includes(`/src/lib/content/${postType}/${params.slug}/index.md`)
	) {
		throw error(500, `Found duplicate routes ('/${postType}/${params.slug}.md') and ('/${postType}/${params.slug}/index.md')`)
	}

	if (!paths.includes(`/src/lib/content/${postType}/${params.slug}.md`) &&
		!paths.includes(`/src/lib/content/${postType}/${params.slug}/index.md`)
	) {
		throw error(404)
	}

	for (let [path, resolver] of Object.entries(files)) {
		if (
			path === `/src/lib/content/${postType}/${params.slug}.md` ||
			path === `/src/lib/content/${postType}/${params.slug}/index.md`
		) {
			const post = await resolver()
			content = post.default
			metadata = post.metadata
			break
		}
	}

	let isMetadataInvalid = validateMissingMetadata( getRequiredMetadatas(postType), metadata, params.slug )
	if (isMetadataInvalid) throw error(500, isMetadataInvalid)

	return { content, metadata }
}
