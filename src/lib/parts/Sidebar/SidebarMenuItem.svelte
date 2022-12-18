<script>
	import { page } from "$app/stores"
	import { isSidebarOpen, sidebarScrollPosition } from "$stores/sidebar.js"

	export let href
	export let isExternal = false
	let element

	$: isCurrent = $page.url.pathname === href

	$: if (isCurrent && element && $isSidebarOpen && !$sidebarScrollPosition) {
		element.scrollIntoView({ block: "center" })
	}

	function onItemLink() {
		sidebarScrollPosition.set(document.querySelector("#sidebar-wrapper")?.scrollTop || 0)
	}
</script>

<a
	class="
		relative block py-2 pl-8 pr-4 text-sm | duration-150 | hover:text-white hover:after:bg-primary
		after:absolute after:inset-y-0 after:left-4 after:w-px after:bg-white/5 after:duration-150 after:z-1
		{isCurrent && 'text-white after:!bg-primary'}
	"
	{href}
	target={isExternal ? "_blank" : null}
	rel={isExternal ? "noreferrer" : null}
	on:click={onItemLink}
	bind:this={element}
>
	<slot />
</a>
