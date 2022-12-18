<script>
	import { menuItems } from "$stores/menu.js"
</script>

<nav class="hidden xl:block">
	<ul class="flex h-full">
		{#each $menuItems as item}
			<li>
				<a
					class="h-full flex items-center gap-3 | px-4 | uppercase font-mono | duration-150 hover:text-white"
					href={item.href}
				>
					{item.title}
				</a>
			</li>
		{/each}
	</ul>
</nav>
