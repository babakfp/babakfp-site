<script>
	import IconArrowUpRightSquare from "$icons/IconArrowUpRightSquare.svelte"
	export let type // external | copy
</script>

<div
	class="
		absolute -top-1 -right-2 | inline-flex p-1 | bg-gray-800 rounded-full highlight-white/5 text-2xs | duration-150 sm:hide sm:group-hover:show
		{type === 'external' && '!bg-transparent !highlight-transparent'}
	"
>
	{#if type === "external"}
		<IconArrowUpRightSquare />
	{/if}
</div>
