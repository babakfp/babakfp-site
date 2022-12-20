<script>
	import OutClick from "svelte-outclick"
	import { browser } from "$app/environment"
	import { navigating } from "$app/stores"
	import { isSidebarOpen } from "$stores/sidebar.js"
	import SidebarMenu from "./SidebarMenu.svelte"
	import PopupBackdrop from "$comps/PopupBackdrop.svelte"

	$: $navigating, ($isSidebarOpen = false)

	$: if (browser) {
		if ($isSidebarOpen) {
			document.body.classList.add("overflow-y-hidden")
		} else {
			document.body.classList.remove("overflow-y-hidden")
		}
	}
</script>

<PopupBackdrop isVisible={$isSidebarOpen} />

<nav>
	<OutClick
		tag="div"
		id="sidebar-wrapper"
		class="
			z-40 | fixed | left-0 top-header-height bottom-0 | w-full max-w-64 pb-12 | bg-gray-800 | border-t border-t-transparent border-r border-r-white/5 | overflow-y-auto
			duration-300 ease-in-out | -translate-x-full {$isSidebarOpen && 'translate-x-0'}
			xl:[all:unset] xl:!block xl:!fixed xl:!top-header-height xl:!bottom-0 xl:!w-64 xl:!overflow-y-auto
		"
		on:outclick={() => ($isSidebarOpen = false)}
		excludeQuerySelectorAll="#SidebarToggle"
	>
		<SidebarMenu />
	</OutClick>
</nav>

<style lang="postcss">
	:global(#sidebar-wrapper) {
		@screen xl {
			&::-webkit-scrollbar {
				@apply w-1.5 h-1.5;
				&-track {
					@apply bg-gray-800;
				}
				&-thumb {
					@apply bg-gray-700;
				}
			}
		}
	}
</style>
