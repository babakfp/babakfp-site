<script>
	import OutClick from 'svelte-outclick'
	import { browser } from '$app/environment'
	import { navigating } from '$app/stores'

	import { isSideMenuOpen } from '$stores/menu.js'
	import SidebarMenu from './SidebarMenu/SidebarMenu.svelte'

	$: $navigating, ($isSideMenuOpen = false)

	$: if (browser) {
		if ($isSideMenuOpen) {
			document.body.classList.add('overflow-y-hidden')
		} else {
			document.body.classList.remove('overflow-y-hidden')
		}
	}
</script>

<nav class=" z-40 | fixed inset-0 top-header-height | bg-gray-900/50 backdrop-blur-lg | duration-150
	hide {$isSideMenuOpen && 'show'}
	xl:[all:unset] xl:!-mt-4 xl:!col-start-1 xl:!col-end-4
">
	<OutClick on:outclick={()=> $isSideMenuOpen = false} excludeQuerySelectorAll="#SidebarToggle">
		<div class="w-full max-w-xs h-full pb-12 | bg-gray-800/95 | border-t border-t-transparent border-r border-r-white/5 | overflow-y-auto
			duration-300 ease-in-out | -translate-x-full {$isSideMenuOpen && 'translate-x-0'}
			xl:[all:unset] xl:!sticky xl:!top-[calc(theme(spacing.header-height)+theme(spacing.8))]
		">
			<SidebarMenu />
		</div>
	</OutClick>
</nav>
