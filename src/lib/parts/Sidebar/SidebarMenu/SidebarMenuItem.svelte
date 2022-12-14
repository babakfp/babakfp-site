<script>
	export let href
	export let className = null
	export { className as class }
	import { page } from "$app/stores"
	$: isCurrent = $page.url.pathname === href
</script>

<a
	class="{className} group | block | py-2 pl-4 | duration-150 | hover:text-white {isCurrent &&
		'text-white'}"
	{href}
>
	<div class="relative | px-4 xl:px-0">
		<div
			class="absolute inset-y-center left-0 | w-1 h-1 | bg-white/10 rounded | duration-150 | group-hover:bg-primary group-hover:scale-150 {isCurrent &&
				'bg-primary'}
			xl:-left-4
		"
		/>
		<slot />
	</div>
</a>
