<script>
	import { page } from "$app/stores"
	import { docsMenuItems } from "$stores/sidebar.js"
	import SidebarMenuItem from "./SidebarMenuItem.svelte"
</script>

{#each $docsMenuItems as project}
	{#if $page.url.pathname.startsWith(project.rootUrl) || $page.url.pathname === "/docs"}
		<!--  -->
		<div class="grid gap-4">
			<!-- <ul class="mx-4 font-mono text-xs">
				<li class="inline-block">Version: 3.3.3</li>
			</ul> -->

			<!-- {#if project.importantItems && project.importantItems.length > 0}
			<ul class="mt-4 mb-2 pb-2 border-b border-white/5">
				{#each project.importantItems as { href, title, isExternal }}
					<li>
						<SidebarMenuItem {href} {isExternal}>
							{title}
						</SidebarMenuItem>
					</li>
				{/each}
			</ul>
		{/if} -->

			<!-- ITEMS -->
			{#if project.items}
				<ul class="pb-12">
					{#each project.items as item}
						<li class="mt-8">
							{#if item.href}
								<SidebarMenuItem href={item.href}>
									{item.title}
								</SidebarMenuItem>
							{:else}
								<h5 class="block mx-4 font-semibold text-white">
									{item.title}
								</h5>
							{/if}

							{#if item.items && item.items.length > 0}
								<ul
									class="relative mt-4 | after:absolute after:inset-y-0 after:left-4 after:w-px after:bg-white/5"
								>
									{#each item.items as subItem}
										<li>
											<SidebarMenuItem href={subItem.href}>
												{subItem.title}
											</SidebarMenuItem>
										</li>
									{/each}
								</ul>
							{/if}
						</li>
					{/each}
				</ul>
			{/if}
		</div>
		<!--  -->
	{/if}
{/each}
