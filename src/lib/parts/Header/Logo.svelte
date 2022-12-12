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
	<div class="relative overflow-hidden p-1.5 px-2 bg-gray-800 highlight-white/5 rounded shadow xl:px-4">
		<div class="opacity-0 pointer-events-none">{title}</div>
		{#key title}
			<div class="absolute inset-center" in:fly={{ x: 32, duration: 500 }} out:fly={{ x: -32, duration: 500 }}>{title}</div>
		{/key}
	</div>
</a>
