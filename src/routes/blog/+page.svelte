<script>
	export let data
	import PostCard from "$comps/PostCard.svelte"
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1 class="text-white text-3xl font-black uppercase sm:text-4xl">Blog</h1>

<ul class="grid gap-4 | mt-8">
	{#each data.posts as post}
		<PostCard
			title={post.metadata.title}
			description={post.metadata.description}
			href="/blog/{post.slug}"
		/>
	{/each}
</ul>
