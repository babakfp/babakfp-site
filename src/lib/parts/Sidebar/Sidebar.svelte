<script>
	import OutClick from "svelte-outclick"
	import { browser } from "$app/environment"
	import { navigating } from "$app/stores"

	import { isSideMenuOpen } from "$stores/menu.js"
	import SidebarMenu from "./SidebarMenu.svelte"

	$: $navigating, ($isSideMenuOpen = false)

	$: if (browser) {
		if ($isSideMenuOpen) {
			document.body.classList.add("overflow-y-hidden")
		} else {
			document.body.classList.remove("overflow-y-hidden")
		}
	}
</script>

<nav
	class="z-40 | fixed inset-0 top-header-height | bg-gray-900/50 backdrop-blur-lg | duration-150
		hide {$isSideMenuOpen && 'show'}
		xl:[all:unset] xl:!block
	"
>
	<OutClick
		tag="div"
		id="sidebar-wrapper"
		class="
			w-full max-w-64 h-full pb-12 | bg-gray-800/95 | border-t border-t-transparent border-r border-r-white/5 | overflow-y-auto
			duration-300 ease-in-out | -translate-x-full {$isSideMenuOpen && 'translate-x-0'}
			xl:[all:unset] xl:!block xl:!fixed xl:!top-header-height xl:!bottom-0 xl:!w-64 xl:!overflow-y-auto
		"
		on:outclick={() => ($isSideMenuOpen = false)}
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
