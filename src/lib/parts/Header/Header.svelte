<script>
	import MobileMenu from "./Menu/MobileMenu.svelte"
	import MobileMenuToggle from "./Menu/MobileMenuToggle.svelte"
	import DesktopMenu from "./Menu/DesktopMenu.svelte"
	import SidebarToggle from "../Sidebar/SidebarToggle.svelte"
	import Title from "./Title.svelte"
</script>

<header class="z-50 | sticky top-0 | h-header-height | bg-gray-800 shadow">
	<div class="container px-0 | h-full | flex justify-between">
		<div class="flex">
			<MobileMenuToggle />
			<Title />
		</div>

		<SidebarToggle />
		<DesktopMenu />
	</div>
</header>

<MobileMenu />
