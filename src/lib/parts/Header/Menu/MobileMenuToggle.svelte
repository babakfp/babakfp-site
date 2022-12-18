<script>
	import MenuToggle from "$comps/MenuToggle.svelte"
	import { isMenuOpen } from "$stores/menu.js"
</script>

<MenuToggle
	on:click={() => ($isMenuOpen = !$isMenuOpen)}
	isOpen={$isMenuOpen}
	id="MobileMenuToggle"
	ariaLabel="Mobile Menu Toggle"
>
	<svelte:fragment slot="icon-open">
		<!-- prettier-ignore -->
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
		</svg>
	</svelte:fragment>
	<svelte:fragment slot="icon-close">
		<!-- prettier-ignore -->
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
		</svg>
	</svelte:fragment>
</MenuToggle>
