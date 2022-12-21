<script>
	import Card from "$comps/Card.svelte"
	import IconRepo from "$icons/IconRepo.svelte"

	export let name
	export let url
	export let description
	export let stars
	export let downloads
	export let version
	export let isExternal = true
</script>

<Card href={url} {isExternal}>
	<h3 class="text-white text-lg font-semibold font-mono">
		<IconRepo class="text-xl text-gray-400" />
		{name}
	</h3>
	{#if description}
		<p class="mt-2 text-sm leading-6">{description}</p>
	{/if}

	{#if stars > 0 || downloads > 0 || version}
		<div class="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-gray-400 text-xs font-mono">
			{#if stars > 0}
				<span>{stars} Stars</span>
			{/if}
			{#if downloads > 0}
				<span>{downloads} Weekly downloads</span>
			{/if}
			{#if version}
				<span>Version {version}</span>
			{/if}
		</div>
	{/if}
</Card>
