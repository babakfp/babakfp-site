<script>
	import PostCard from "$comps/PostCard.svelte"
	export let data
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<ul class="grid gap-4">
	{#each data.posts as post}
		<PostCard
			title={post.metadata.title}
			description={post.metadata.description}
			href="/blog/{post.slug}"
		/>
	{/each}
</ul>
