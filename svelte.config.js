import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import { mdsvex, escapeSvelte } from 'mdsvex'
import { getHighlighter } from 'shiki'

const mdsvexHighlight = async (code, lang) => {
	try {
		const highlighter = await getHighlighter({ theme: 'rose-pine', langs: ['html', 'css', 'js', 'svelte', 'php', 'cmd'] })
		const result = highlighter.codeToHtml(code, { lang })
		return result
	} catch (error) {
		console.log(error)
	}
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
		alias: {
      $comps: 'src/lib/comps',
      $parts: 'src/lib/parts',
      $utils: 'src/lib/utils',
      $stores: 'src/lib/stores',
      $styles: 'src/lib/styles',
    },
  },
  preprocess: [
		preprocess({ postcss: true }),
		mdsvex({
			extensions: ['.md'],
			highlight: {
				highlighter: async (code, lang) => {
					const highlightedCode = await mdsvexHighlight(code, lang)
					return highlightedCode ? escapeSvelte(highlightedCode) : ''
				},
			},
		}),
  ],
	extensions: ['.svelte', '.md'],
}

export default config
