<script>
	export let href
	export let isExternal = false
	export let className = null
	export { className as class }
	export let arrowCenterRight = false
</script>

<a
	class="
		{className}
		group | relative block p-4 | bg-gray-800/50 backdrop-blur highlight-white/5 rounded | overflow-hidden duration-300 | hover:bg-gray-800/80 hover:highlight-white/10
	"
	{href}
	target={isExternal ? "_blank" : null}
>
	<slot />

	<div
		class="
		absolute right-0 translate-x-full scale-0 | flex items-center justify-center rounded-full w-10 h-10 bg-gray-800 highlight-white/5 text-gray-400 | duration-300 | group-hover:scale-100
		group-hover:-translate-x-4
		{arrowCenterRight ? 'inset-y-center' : 'top-0 -translate-y-full group-hover:translate-y-4'}
	"
	>
		{#if isExternal}
			<!-- prettier-ignore -->
			<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
			</svg>
		{:else}
			<!-- prettier-ignore -->
			<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
			</svg>
		{/if}
	</div>
</a>
