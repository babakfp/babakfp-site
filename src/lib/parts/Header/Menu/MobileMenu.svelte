<script>
	import OutClick from 'svelte-outclick'
	import { browser } from '$app/environment'
	import { navigating, page } from '$app/stores'
	import { isMainMenuOpen, mainMenuItems } from '$stores/mainMenu.js'

	$: $navigating, ($isMainMenuOpen = false)

	$: if (browser) {
		if ($isMainMenuOpen) {
			document.body.classList.add('overflow-y-hidden')
		} else {
			document.body.classList.remove('overflow-y-hidden')
		}
	}
</script>

<nav class="z-40 | fixed inset-0 top-header-height | bg-gray-900/50 backdrop-blur-lg | duration-150
	hide {$isMainMenuOpen && 'show'} xl:hidden
">
	<OutClick on:outclick={()=> $isMainMenuOpen = false} excludeQuerySelectorAll="#MobileMenuToggle">
		<div class="w-full py-6 | bg-gray-800/95 | overflow-y-auto
			duration-300 ease-in-out | -translate-y-full {$isMainMenuOpen && 'translate-y-0'}
		">
			<ul>
				{#each $mainMenuItems as item}
					<li>
						<a class="group | flex items-center gap-3 | py-2 px-4" href={item.href}>
							<div class="flex items-center justify-center | w-7.5 h-7.5 | bg-white/5 rounded | text-gray-400 | duration-150 [ group-hover:bg-white/10 group-hover:text-white ]">
								{@html item.svg}
							</div>
							<span class="uppercase font-code | duration-150 group-hover:text-white">{item.title}</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</OutClick>
</nav>
