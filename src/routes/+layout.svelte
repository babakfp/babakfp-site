<script>
	import { page } from '$app/stores'
	import { fly } from 'svelte/transition'

	import LoadingBar from '$comps/LoadingBar.svelte'

	import Header from '$parts/Header/Header.svelte'
	import BackgroundBackdrop from '$comps/BackgroundBackdrop.svelte'
	import FloatingBackToTopButton from '$comps/FloatingBackToTopButton.svelte'

	// app main styles
  import '$styles/app.postcss'
</script>

<BackgroundBackdrop />

<LoadingBar />

<Header />

{#key $page.url.pathname}
	<main class="relative | container | py-12 pb-20" in:fly={{ delay: 100, duration: 500, y: -32 }}>
		<slot />
	</main>
{/key}

<FloatingBackToTopButton />
