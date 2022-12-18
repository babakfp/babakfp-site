<script>
	import { fly } from "svelte/transition"
	import { page } from "$app/stores"

	let title = "babakfp"
	let href = "/"

	$: {
		if ($page.url.pathname.startsWith("/blog")) {
			title = "blog"
			href = "/blog"
		} else if ($page.url.pathname.startsWith("/docs")) {
			title = "documentation"
			href = "/docs"
		} else {
			title = "babakfp"
			href = "/"
		}
	}
</script>

<a
	class="relative overflow-hidden flex items-center | w-full h-full | font-mono text-sm text-white font-black uppercase xl:px-4 xl:text-base"
	{href}
>
	{#key title}
		<div class="absolute" in:fly={{ y: 32, duration: 300 }} out:fly={{ y: -32, duration: 300 }}>
			{title}
		</div>
	{/key}
</a>
