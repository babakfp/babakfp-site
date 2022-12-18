<script>
	import { page } from "$app/stores"
	import MenuToggle from "$comps/MenuToggle.svelte"
	import { isSidebarOpen } from "$stores/sidebar.js"
	import IconList from "$icons/IconList.svelte"
	import IconX from "$icons/IconX.svelte"
</script>

{#if $page.url.pathname.startsWith("/docs") && $page.url.pathname !== "/docs"}
	<MenuToggle
		on:click={() => ($isSidebarOpen = !$isSidebarOpen)}
		isOpen={$isSidebarOpen}
		id="SidebarToggle"
		ariaLabel="Sidebar Toggle"
	>
		<svelte:fragment slot="icon-open">
			<IconList class="text-2xl" />
		</svelte:fragment>
		<svelte:fragment slot="icon-close">
			<IconX class="text-2xl" />
		</svelte:fragment>
	</MenuToggle>
{/if}
