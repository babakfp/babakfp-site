<script>
	import { onDestroy } from "svelte"
	import { getRandomNumber } from "$utils/getRandomNumber.js"
	let backgroundImage

	//TODO: Is typo currect?
	// onDestroy(()=> console.log('destroyed'))
	// const bgPositions = ['!bg-top', '!bg-left-top', '!bg-right-top', '!bg-center', '!bg-bottom', '!bg-left-bottom', '!bg-right-bottom']
	// let prevIndex
	// let currentIndex
	// $: if (backgroundImage) {
	// 	//TODO: Remove on destroy
	// 	setInterval(()=> {
	// 		if (prevIndex) backgroundImage.classList.remove(bgPositions[prevIndex])
	// 		currentIndex = getRandomNumber(0, bgPositions.length - 1)
	// 		backgroundImage.classList.add(bgPositions[currentIndex])
	// 		prevIndex = currentIndex
	// 	}, 10000)
	// }
</script>

<div
	class="background-grid | fixed inset-0 | bg-bottom bg-gradient-to-b from-transparent to-gray-900"
/>
<div
	bind:this={backgroundImage}
	class="background-image | fixed inset-0 | opacity-50 | bg-center duration-[2s]"
/>

<style lang="postcss">
	.background-grid {
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.02)'%3E%3Cpath d='M0 .5h31.5V32'/%3E%3C/svg%3E");
	}
	.background-image {
		background-image: url("/img/background-image.jpg");
		background-size: cover;
		background-repeat: no-repeat;
		/* animation-name: bg-position-move;
		animation-duration: 60s;
		animation-timing-function: linear;
		animation-iteration-count: infinite; */
	}
	/* @keyframes bg-position-move {
		0% { @apply bg-left-top }
		50% { @apply bg-right-bottom }
		100% { @apply bg-left-top }
	} */
</style>
