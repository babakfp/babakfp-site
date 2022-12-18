<script>
	import { page } from "$app/stores"
	import MenuToggle from "$comps/MenuToggle.svelte"
	import { isSideMenuOpen } from "$stores/sidebar.js"
</script>

{#if $page.url.pathname.startsWith("/docs") && $page.url.pathname !== "/docs"}
	<MenuToggle
		on:click={() => ($isSideMenuOpen = !$isSideMenuOpen)}
		isOpen={$isSideMenuOpen}
		id="SidebarToggle"
		ariaLabel="Sidebar Toggle"
	>
		<svelte:fragment slot="icon-open">
			<!-- prettier-ignore -->
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
			</svg>
		</svelte:fragment>
		<svelte:fragment slot="icon-close">
			<!-- prettier-ignore -->
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</svelte:fragment>
	</MenuToggle>
{/if}
