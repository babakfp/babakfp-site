<script>
	import { page } from "$app/stores"

	export let href
	export let isExternal = false

	$: isCurrent = $page.url.pathname === href
</script>

<a
	class="
		relative block py-2 pl-8 pr-4 text-sm | duration-150 | hover:text-white hover:after:bg-primary
		after:absolute after:inset-y-0 after:left-4 after:w-px after:bg-white/5 after:duration-150 after:z-1
		{isCurrent && 'text-white after:!bg-primary'}
	"
	{href}
	target={isExternal ? "_blank" : null}
	rel={isExternal ? "noreferrer" : null}
>
	<slot />
</a>
