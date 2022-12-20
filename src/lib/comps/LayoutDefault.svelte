<script>
	import { page } from "$app/stores"
	import { fly } from "svelte/transition"
</script>

{#key $page.url.pathname}
	<div in:fly={{ y: -32, duration: 500, delay: 100 }}>
		<slot />
	</div>
{/key}
