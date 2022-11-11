<script>
	import Card from '$comps/Card.svelte'

	export let title
	export let description
	export let href
</script>

<li>
	<Card
		class="p-6 lg:p-8"
		{href}
	>
		<h2 class="text-white text-lg font-semibold uppercase lg:text-xl">{title}</h2>
		<p class="mt-1 | text-sm text-gray-400 | lg:text-base">{description}</p>
	</Card>
</li>
