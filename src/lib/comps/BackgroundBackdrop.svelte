<script>
	import { onDestroy } from "svelte"
	import { getRandomNumber } from "$utils/getRandomNumber.js"
	let backgroundImage
</script>

<div class="background-grid | fixed inset-0" />

<div
	bind:this={backgroundImage}
	class="background-image | fixed inset-x-0 -inset-y-1/2 | opacity-50 | bg-center duration-[2s]"
/>

<style lang="postcss">
	.background-grid {
		background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.02)' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 .5h31.5V32'/%3E%3C/svg%3E");
	}
	.background-image {
		background-image: url("/img/background-image.jpg");
		background-size: cover;
		background-repeat: no-repeat;
	}
</style>
