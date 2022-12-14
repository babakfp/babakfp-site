<script>
	export let isOpen
	export let id
	export let ariaLabel
</script>

<button
	{id}
	class="flex items-center justify-center | px-4 | duration-150 hover:text-white xl:hidden"
	on:click
	aria-label="{isOpen ? 'Open' : 'Close'} {ariaLabel}"
>
	<div class="flex duration-150 {isOpen && 'scale-0'}">
		<slot name="icon-open" />
	</div>

	<div class="flex absolute duration-150 scale-0 {isOpen && 'scale-100'}">
		<slot name="icon-close" />
	</div>
</button>
