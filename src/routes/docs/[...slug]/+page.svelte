<script>
	export let data
</script>

<svelte:head>
	{#if data.metadata.title}
		<title>{data.metadata.title}</title>
	{/if}
</svelte:head>

<div class="article-content">
	<h1>{data.metadata.title}</h1>
	<svelte:component this={data.content} />
</div>
