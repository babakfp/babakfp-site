<script>
	import Card from '$comps/Card.svelte'

	export let href
	export let title
	export let description
	export let stars
	export let weeklyDownloads
</script>

<Card
	{href}
	isExternal={true}
>
	<h3 class="text-white text-lg font-semibold font-mono">
		<svg viewBox="0 0 16 16" class="w-5 h-5 fill-gray-400" aria-hidden="true">
			<path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
		</svg>
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
