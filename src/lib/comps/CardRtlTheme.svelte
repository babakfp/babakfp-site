<script>
	import Card from "$comps/Card.svelte"
	import StarRating from "$comps/StarRating.svelte"

	export let href
	export let title
	export let thumb
	export let description
	export let sales
	export let rating
	export let reviewsCount
</script>

<Card {href} isExternal={true}>
	<h3 class="text-white text-lg font-semibold font-mono sm:hidden">{title}</h3>

	<div class="flex items-start gap-4 mt-4 sm:mt-0">
		<img class="w-20 min-w-20 aspect-square" src={thumb} alt={title} />
		<div>
			<h3 class="text-white text-lg font-semibold font-mono hidden sm:block">{title}</h3>
			<p class="text-sm leading-6 sm:mt-2">{description}</p>
		</div>
	</div>

	<ul class="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-gray-400 text-xs font-mono">
		<li>
			Sales: {sales}
		</li>
		{#if rating}
			<li class="flex gap-2">
				<span>{reviewsCount} Reviews</span>
				<StarRating />
			</li>
		{/if}
	</ul>
</Card>
