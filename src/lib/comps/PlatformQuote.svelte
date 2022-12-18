<script>
	import IconGithub from "$icons/IconGithub.svelte"
	export let platform // github|devto
</script>

<div
	class="platform-quote platform-quote--{platform} | relative | p-6 | rounded shadow | sm:p-8
	{platform === 'github' && 'bg-[black]/50 backdrop-blur highlight-white/10'}
	{platform === 'devto' && 'bg-gray-800 highlight-white/5'}
"
>
	<div
		class="inline-flex items-center gap-2 | p-1 | bg-white/5 rounded | select-none | sm:top-2 sm:left-2
		{platform === 'github' && 'pr-2'}
		{platform === 'devto' && 'px-2'}
	"
	>
		{#if platform === "github"}
			<IconGithub class="text-xl duration-150 group-hover:fill-white" />
		{/if}

		<span class="text-xs uppercase !m-0">{platform}</span>
	</div>

	<div class="!mt-6">
		<slot />
	</div>
</div>

<style lang="postcss">
	.platform-quote--github :global(blockquote) {
		@apply pl-4 border-l-2 border-white/20;
	}
</style>
