<script>
	import { sidebarItems } from "$stores/sidebar.js"
	import LayoutDefault from "$comps/LayoutDefault.svelte"
	import CardRepo from "$comps/CardRepo.svelte"
	import IconRepo from "$icons/IconRepo.svelte"
	export let data
</script>

<svelte:head>
	<title>Documentation</title>
</svelte:head>

<LayoutDefault>
	<ul class="grid gap-4">
		{#each data.repos as repo}
			<li>
				<CardRepo {...repo} url="/docs/{repo.name}" isExternal={false} />
			</li>
		{/each}
	</ul>
</LayoutDefault>
