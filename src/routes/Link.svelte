<script>
	export let href
</script>

<svelte:element
	this={href ? "a" : "button"}
	class="group relative inline-flex items-center gap-2 py-2 px-4 rounded text-sm bg-gray-800/50 backdrop-blur highlight-white/5 select-none duration-150 hover:bg-gray-700/50"
	{href}
	target={href ? "_blank" : null}
	rel={href ? "noreferrer" : null}
>
	<slot />

	{#if href}
		<div
			class="absolute -top-1 -right-2 | w-5 h-5 flex items-center justify-center | bg-gray-800 highlight-white/5 rounded text-gray-400 duration-300 ease-in-out sm:hide sm:scale-0 sm:group-hover:show sm:group-hover:scale-100"
		>
			<!-- prettier-ignore -->
			<svg class="text-xs" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
			</svg>
		</div>
	{/if}
</svelte:element>
