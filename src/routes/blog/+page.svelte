<script>
	export let data
	import PostCard from "$comps/PostCard.svelte"
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<ul class="grid gap-4 | mt-8">
	{#each data.posts as post}
		<PostCard
			title={post.metadata.title}
			description={post.metadata.description}
			href="/blog/{post.slug}"
		/>
	{/each}
</ul>
