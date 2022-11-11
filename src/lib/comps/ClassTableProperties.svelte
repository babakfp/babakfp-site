<script>
	export let selectorAndStyles
	export let indent = 16
</script>

{#each Object.entries(selectorAndStyles) as [propertyOrSelector, valueOrObjectOfPropertyAndValue]}
	
	<!-- For variants -->
	{#if valueOrObjectOfPropertyAndValue === ''}
		<!-- <PROPERTY>: <VALUE> -->
		<div>{propertyOrSelector}</div>
	{:else if typeof valueOrObjectOfPropertyAndValue === 'string'}
		<!-- <PROPERTY>: <VALUE> -->
		<div>
			<span>{propertyOrSelector}</span>: <span>{valueOrObjectOfPropertyAndValue};</span>
		</div>
	{:else if typeof valueOrObjectOfPropertyAndValue === 'object'}
		<!-- <SELECTOR> { <PROPERTY>: <VALUE> } -->
		{propertyOrSelector} {'{'}
			<div style="text-indent: {indent}px">
				<svelte:self selectorAndStyles={valueOrObjectOfPropertyAndValue} indent={indent += 16}/>
			</div>
		{'}'}
	{/if}
{/each}
