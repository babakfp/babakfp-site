<script>
	import { sidebarItems } from "$stores/sidebar.js"
	import Card from "$comps/Card.svelte"
	import IconRepo from "$icons/IconRepo.svelte"
</script>

<svelte:head>
	<title>Documentation</title>
</svelte:head>

<ul class="grid gap-4 | mt-8">
	{#each $sidebarItems as { rootUrl, name }}
		<li>
			<Card href={rootUrl} arrowCenter={true}>
				<h2 class="text-white text-lg font-semibold font-mono">
					<IconRepo class="text-xl text-gray-400" />
					{name}
				</h2>
			</Card>
		</li>
	{/each}
</ul>
