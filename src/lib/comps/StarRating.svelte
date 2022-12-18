<script>
	import IconStar from "$icons/IconStar.svelte"
	import IconStarFilled from "$icons/IconStarFilled.svelte"

	export let dirLtr = true
	export let rating = 5
	export let vertical = false
</script>

<div
	class="relative flex items-center gap-0.5 text-gray-300 text-xs
	{dirLtr && 'dir-ltr'} {vertical && 'grid !items-start'}"
>
	{#each [...Array(5).keys()] as _}
		<IconStar />
	{/each}

	<div class="absolute flex items-center gap-0.5 text-star {vertical && 'grid'}">
		{#each [...Array(rating).keys()] as _}
			<IconStarFilled />
		{/each}
	</div>
</div>
