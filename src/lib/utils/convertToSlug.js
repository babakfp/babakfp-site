export const convertToSlug = text => {
	return text.toLowerCase()
		.replace(/[^A-Za-z0-9]+/g, '-')
}
