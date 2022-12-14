<script>
	import Sidebar from "$parts/Sidebar/Sidebar.svelte"
	export let data
</script>

<svelte:head>
	{#if data.metadata.title}
		<title>{data.metadata.title}</title>
	{/if}
</svelte:head>

<div class="max-w-prose mx-auto xl:max-w-none xl:grid xl:grid-cols-12 xl:gap-12">
	<Sidebar />
	<article class="xl:col-start-4 xl:col-end-13">
		<div class="article-content">
			<h1>{data.metadata.title}</h1>
			<svelte:component this={data.content} />
		</div>
	</article>
</div>
