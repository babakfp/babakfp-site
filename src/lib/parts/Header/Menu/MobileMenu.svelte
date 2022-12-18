<script>
	import OutClick from "svelte-outclick"
	import { browser } from "$app/environment"
	import { navigating, page } from "$app/stores"
	import { isMenuOpen, menuItems } from "$stores/menu.js"
	import PopupBackdrop from "$comps/PopupBackdrop.svelte"

	$: $navigating, ($isMenuOpen = false)

	$: if (browser) {
		if ($isMenuOpen) {
			document.body.classList.add("overflow-y-hidden")
		} else {
			document.body.classList.remove("overflow-y-hidden")
		}
	}
</script>

<PopupBackdrop isVisible={$isMenuOpen} />

<OutClick
	tag="nav"
	class="
		z-40 | fixed top-header-height inset-x-0 | w-full py-6 | bg-gray-800 shadow | duration-300 ease-in-out
		-translate-y-full {$isMenuOpen && 'translate-y-0'}
		xl:hidden
	"
	excludeQuerySelectorAll="#MobileMenuToggle"
	on:outclick={() => ($isMenuOpen = false)}
>
	<ul>
		{#each $menuItems as item}
			<li>
				<a class="group | flex items-center gap-3 | py-2 px-4" href={item.href}>
					<div
						class="flex items-center justify-center | w-7.5 h-7.5 | bg-white/5 rounded shadow | text-gray-400 | duration-150 [ group-hover:bg-white/10 group-hover:text-white ]"
					>
						{@html item.svg}
					</div>
					<span class="uppercase font-mono | duration-150 group-hover:text-white">{item.title}</span
					>
				</a>
			</li>
		{/each}
	</ul>
</OutClick>
