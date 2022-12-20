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
	class="z-30 | fixed bottom-0 right-4 translate-y-full | btn | duration-300
	{windowScrollY >= windowHeight && isScrolledUp && '-translate-y-6'}"
	href="#body"
>
	Return to top
</a>
