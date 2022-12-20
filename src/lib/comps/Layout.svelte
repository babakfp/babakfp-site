<script>
	import BackgroundBackdrop from "$comps/BackgroundBackdrop.svelte"
	import LoadingBar from "$comps/LoadingBar.svelte"
	import Header from "$parts/Header/Header.svelte"
	import FloatingBackToTopButton from "$comps/FloatingBackToTopButton.svelte"

	// Main styles
	import "$styles/app.postcss"
</script>

<BackgroundBackdrop />
<LoadingBar />
<Header />
<main class="relative | container | pt-12 pb-20">
	<slot />
</main>
<FloatingBackToTopButton />
