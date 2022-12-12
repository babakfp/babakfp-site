<script>
	import { page } from '$app/stores'

	let title = 'babakfp'
	let href = '/'

	$: {
		if ($page.url.pathname.startsWith('/blog')) {
			title = 'blog'
			href = '/blog'
		} else if ($page.url.pathname.startsWith('/docs')) {
			title = 'docs'
			href = '/docs'
		} else {
			title = 'babakfp'
			href = '/'
		}
	}
</script>

<a class="flex items-center | h-full | font-mono text-sm text-white font-black uppercase xl:px-4 xl:text-base" {href}>
	<span class="p-1.5 px-2 bg-gray-800 highlight-white/5 rounded shadow xl:px-4">
		{title}
	</span>
</a>
