<script>
	import Card from "$comps/Card.svelte"
	import IconRepo from "$icons/IconRepo.svelte"

	export let href
	export let title
	export let description
	export let stars
	export let weeklyDownloads
</script>

<Card {href} isExternal={true}>
	<h3 class="text-white text-lg font-semibold font-mono">
		<IconRepo class="text-xl text-gray-400" />
		{title}
	</h3>
	{#if description}
		<p class="mt-2 text-sm leading-6">{description}</p>
	{/if}

	{#if stars > 0 || weeklyDownloads > 0}
		<div class="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-gray-400 text-xs font-mono">
			{#if stars > 0}
				<span>{stars} Stars</span>
			{/if}
			{#if weeklyDownloads > 0}
				<span>{weeklyDownloads} Weekly downloads</span>
			{/if}
		</div>
	{/if}
</Card>
