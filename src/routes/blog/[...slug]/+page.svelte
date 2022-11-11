<script>
	import { page } from '$app/stores'

  export let data
	import PostDate from '$comps/PostDate.svelte'
	import PostCard from '$comps/PostCard.svelte'
</script>

<svelte:head>
	{#if data.metadata.title}
		<title>{data.metadata.title}</title>
	{/if}
	{#if data.metadata.description}
		<meta name="description" content={data.metadata.description} />
	{/if}
</svelte:head>

<div class="max-w-prose mx-auto xl:max-w-none xl:grid xl:grid-cols-12 xl:gap-12">
	<article class="xl:col-start-1 xl:col-end-9">
		<PostDate modifiedAt={data.metadata.modifiedAt} publishedAt={data.metadata.publishedAt} />
		
		<div class="article-content">
			<h1 class="mt-8">{data.metadata.title}</h1>
			<svelte:component this={data.content} />
		</div>
	</article>

	{#if data.posts.length > 0}
		<div class="xl:grid xl:self-start xl:sticky xl:top-[calc(theme(spacing.header-height)+theme(spacing.18))] xl:col-start-9 xl:col-end-13 [zoom:0.75]">
			<hr class="!my-12 xl:hidden" />
			<div class="flex justify-between">
				<h2 class="uppercase">Other Blog Posts</h2>
				<a class="link uppercase" href="/blog">See More</a>
			</div>
			<ul class="mt-4 space-y-4">
				{#each data.posts.filter(post => `/blog/${post.slug}` !== $page.url.pathname) as post}
					<PostCard title={post.metadata.title} description={post.metadata.description} href="/blog/{post.slug}" />
				{/each}
			</ul>
		</div>
	{/if}
</div>
