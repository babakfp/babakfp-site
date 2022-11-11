<script>
	import Card from '$comps/Card.svelte'
	import StarRating from '$comps/StarRating.svelte'

	export let homepage
	export let title
	export let thumb
	export let description
	export let activeInstalls
	export let rating
	export let reviewsCount
</script>

<Card
	href={homepage}
	isExternal={true}
>
	<h3 class="text-white text-lg font-semibold font-code sm:hidden">{title}</h3>
	
	<div class="flex items-start gap-4 mt-4 sm:mt-0">
		<img class="w-20 min-w-20 aspect-square" src={thumb} alt={title} />
		<div>
			<h3 class="text-white text-lg font-semibold font-code hidden sm:block">{title}</h3>
			<p class="text-sm leading-6 sm:mt-2">{description}</p>
		</div>
	</div>

	<ul class="flex items-center gap-4 mt-4">
		<li class="flex gap-1 text-gray-400 text-xs font-code">
			Active Installs: {activeInstalls}
		</li>
		{#if rating}
			<li class="flex gap-2">
				<StarRating />
				<span class="text-gray-400 text-xs font-code">{reviewsCount} Reviews</span>
			</li>
		{/if}
	</ul>
</Card>
