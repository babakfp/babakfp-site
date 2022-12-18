<script>
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
			: 'top-0 translate-y-4 xl:-translate-y-full xl:group-hover:translate-y-4'}
			xl:translate-x-full xl:scale-0
			xl:duration-300 | xl:group-hover:scale-100 xl:group-hover:-translate-x-4
		"
	>
		{#if isExternal}
			<!-- prettier-ignore -->
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
				<path d="M127.8 306.9c-9.369 9.371-9.369 24.57 0 33.94l11.31 11.31c9.37 9.371 24.57 9.372 33.94.001l64.57-64.57 41.37 41.38C283.6 333.6 289.8 336 296 336c3.094 0 6.219-.594 9.188-1.812C314.2 330.5 320 321.7 320 312V184c0-13.2-10.7-24-24-24H168c-9.7 0-18.5 5.8-22.2 14.8s-1.6 19.3 5.2 25.3l41.37 41.38-64.57 65.42zM0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96c0-35.34-28.65-64-64-64H64C28.65 32 0 60.66 0 96zm48 0c0-8.82 7.178-16 16-16h320c8.822 0 16 7.18 16 16v320c0 8.82-7.178 16-16 16H64c-8.822 0-16-7.18-16-16V96z" />
			</svg>
		{:else}
			<!-- prettier-ignore -->
			<svg class="hidden" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
			</svg>
		{/if}
	</div>
</a>
