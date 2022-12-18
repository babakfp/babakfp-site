<script>
	import MenuToggle from "$comps/MenuToggle.svelte"
	import { isMenuOpen } from "$stores/menu.js"
	import IconX from "$icons/IconX.svelte"
	import IconMenu from "$icons/IconMenu.svelte"
</script>

<MenuToggle
	on:click={() => ($isMenuOpen = !$isMenuOpen)}
	isOpen={$isMenuOpen}
	id="MobileMenuToggle"
	ariaLabel="Mobile Menu Toggle"
>
	<svelte:fragment slot="icon-open">
		<IconMenu class="text-2xl" />
	</svelte:fragment>
	<svelte:fragment slot="icon-close">
		<IconX class="text-2xl" />
	</svelte:fragment>
</MenuToggle>
