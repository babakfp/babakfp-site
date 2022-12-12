<script>
	import { fly } from "svelte/transition"
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
	<div class="relative flex items-center justify-center w-24 h-9 overflow-hidden bg-gray-800 highlight-white/5 rounded shadow">
		{#key title}
			<div class="absolute" in:fly={{ x: 96, duration: 500 }} out:fly={{ x: -96, duration: 500 }}>{title}</div>
		{/key}
	</div>
</a>
