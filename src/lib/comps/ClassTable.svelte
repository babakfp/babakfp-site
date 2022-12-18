<script>
	import ClassTableProperties from '$comps/ClassTableProperties.svelte'

	export let utilities
	const theadItems = ['class', 'properties']
	export let className = null
	export {className as class}

	const isCollapsable = Object.entries(utilities).length >= 10 ? true : false
	let isCollapsed = isCollapsable
</script>

<div class="relative -mx-2 xl:-mr-1">

	<div class="px-2 xl:max-h-96 xl:overflow-y-auto xl:pr-1">
		<div class="table-wrapper | overflow-x-auto pb-1">
			<table class="{className} w-full | text-left font-mono whitespace-nowrap | border-collapse">
			
				<thead class="text-sm | select-none">
					<tr>
						{#each theadItems as title}
							<th>
								<div class="bg-gray-800/80 backdrop-blur shadow">
									{title}
								</div>
							</th>
						{/each}
					</tr>
				</thead>
			
				<tbody class="align-baseline | text-xs leading-5">
					{#each Object.entries(utilities) as [_class, selectorAndStyles], i}
						<tr class="not-first-of-type:border-t-[0.1px] not-first-of-type:border-white/5 {i + 1 >= 10 && isCollapsed && 'hidden'} xl:table-row">
							<td class="text-sky-400 select-all">
								{_class.replace('.', '')}
							</td>
							<td class="text-indigo-300">
								<ClassTableProperties {selectorAndStyles} />
							</td>
						</tr>
					{/each}
				</tbody>
			
			</table>
		</div>
	</div>

	<!-- COLLAPSE STUFF -->
	{#if isCollapsable}
		<div class="!m-0 | {isCollapsed ? 'absolute bottom-0' : 'sticky -bottom-2 !mt-2 pb-6' } inset-x-0 | flex justify-center items-center | p-4 | bg-gray-800/25 rounded backdrop-blur | xl:hidden">
			<butttn class="relative | py-2.5 px-6 bg-gray-800 rounded-full highlight-white/5 cursor-pointer | text-xs | duration-150 hover:bg-gray-700"
				on:click={()=> isCollapsed = !isCollapsed}
			>
				{isCollapsed ? 'Show all classes' : 'Show fewer classes'}
			</butttn>
		</div>
	{/if}
</div>

<style lang="postcss">
	thead th, tbody td { @apply p-0 }
	tbody tr { @apply m-0 }

	thead th:first-of-type div { @apply rounded-tl rounded-bl }
	thead th:last-of-type div { @apply rounded-tr rounded-br }

	thead th div, tbody td { @apply py-3 px-4 }
	tbody tr:first-of-type td { @apply pt-4 }

	.table-wrapper::-webkit-scrollbar { @apply !h-4 !bg-gray-800/50 !rounded-full;
		&-thumb { @apply bg-gray-700 border-[6px] }
	}
</style>
