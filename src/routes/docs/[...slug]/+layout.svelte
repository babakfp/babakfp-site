<script>
	import { page } from "$app/stores"
	import { fly } from "svelte/transition"
	import Sidebar from "$parts/Sidebar/Sidebar.svelte"
</script>

<div class="max-w-prose mx-auto xl:max-w-none xl:grid xl:grid-cols-12 xl:gap-12">
	<Sidebar />
	{#key $page.url.pathname}
		<article class="xl:col-start-4 xl:col-end-13" in:fly={{ y: -32, duration: 500, delay: 100 }}>
			<slot />
		</article>
	{/key}
</div>
