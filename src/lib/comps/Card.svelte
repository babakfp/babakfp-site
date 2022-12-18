<script>
	import IconArrowUpRightSquare from "$icons/IconArrowUpRightSquare.svelte"

	export let href
	export let isExternal = false
	export let className = null
	export { className as class }
	export let arrowCenter = false
</script>

<a
	class="
		{className}
		group | relative block p-4 overflow-hidden | backdrop-blur highlight-white/5 shadow rounded | duration-300 | hover:bg-white/5 hover:highlight-white/10
	"
	{href}
	target={isExternal ? "_blank" : null}
>
	<slot />

	<div
		class="
			absolute right-0 -translate-x-4 | flex items-center justify-center | text-gray-400
			{arrowCenter
			? 'inset-y-center'
			: 'top-0 translate-y-4 sm:-translate-y-full sm:group-hover:translate-y-4'}
			sm:translate-x-full sm:scale-0
			sm:duration-300 | sm:group-hover:scale-100 sm:group-hover:-translate-x-4
		"
	>
		{#if isExternal}
			<IconArrowUpRightSquare />
		{/if}
	</div>
</a>
