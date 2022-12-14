<script>
	import MobileMenu from "./Menu/MobileMenu.svelte"
	import MobileMenuToggle from "./Menu/MobileMenuToggle.svelte"
	import DesktopMenu from "./Menu/DesktopMenu.svelte"
	import SidebarToggle from "../Sidebar/SidebarToggle.svelte"
	import Logo from "./Logo.svelte"
</script>

<header class="z-50 | sticky top-0 | h-header-height | bg-gray-800/95 backdrop-blur-lg shadow">
	<div class="container px-0 | h-full | flex justify-between">
		<div class="flex">
			<MobileMenuToggle />
			<Logo />
		</div>

		<SidebarToggle />
		<DesktopMenu />
	</div>
</header>

<MobileMenu />
