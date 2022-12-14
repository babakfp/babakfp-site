<script>
	let windowScrollY
	let windowHeight

	let lastScrollY = 0
	let isScrolledUp = false
	const handleScroll = () => {
		if (lastScrollY > windowScrollY) {
			isScrolledUp = true
		} else {
			isScrolledUp = false
		}
		lastScrollY = windowScrollY
	}
</script>

<svelte:window
	on:scroll={handleScroll}
	bind:scrollY={windowScrollY}
	bind:innerHeight={windowHeight}
/>

<a
	class="z-30 | fixed bottom-0 right-4 translate-y-full | block py-2 px-4 | bg-gray-800 rounded highlight-top-white/5 | text-gray-400 text-sm | duration-300 | hover:bg-gray-700
	{windowScrollY >= windowHeight && isScrolledUp && '-translate-y-6'}"
	href="#body"
>
	Return to top
</a>
