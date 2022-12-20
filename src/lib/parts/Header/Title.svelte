<script>
	import { fly } from "svelte/transition"
	import { page } from "$app/stores"

	let title = "BABAKFP"
	let href = "/"

	$: {
		if ($page.url.pathname.startsWith("/blog")) {
			title = "BLOG"
			href = "/blog"
		} else if ($page.url.pathname.startsWith("/docs")) {
			title = "DOCS"
			href = "/docs"
		} else {
			title = "BABAKFP"
			href = "/"
		}
	}
</script>

<a
	class="relative overflow-hidden flex items-center | w-full h-full | font-mono text-sm text-white font-black xl:px-4 xl:text-base"
	{href}
>
	<span class="hide" aria-hidden="true">{title}</span>

	{#key title}
		<div class="absolute" in:fly={{ y: 32, duration: 300 }} out:fly={{ y: -32, duration: 300 }}>
			{title}
		</div>
	{/key}
</a>
