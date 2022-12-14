<script>
	import { page } from "$app/stores"
	import { docsMenuItems } from "$stores/sidebar.js"
	import SidebarMenuItem from "./SidebarMenuItem.svelte"
	import SidebarMenuItemGithub from "./SidebarMenuItemGithub.svelte"
</script>

{#each $docsMenuItems as project}
	{#if $page.url.pathname.startsWith(project.href) || $page.url.pathname === "/docs"}
		<div class="mt-8">
			<!-- TITLE -->
			<div class="flex items-center justify-between | pb-2 px-4 | font-semibold text-lg xl:px-0">
				<span>{project.title}</span>
				<SidebarMenuItemGithub href={project.github} />
			</div>

			{#if project.importantItems && project.importantItems.length > 0}
				<ul class="border-b border-gray-700">
					{#each project.importantItems as item}
						<li>
							<SidebarMenuItem href={item.href}>
								{item.title}
							</SidebarMenuItem>
						</li>
					{/each}
				</ul>
			{/if}

			<!-- ITEMS -->
			{#if project.items}
				<ul>
					{#each project.items as item}
						<li>
							{#if item.subItems && item.subItems.length > 0}
								<div class="pt-2 pb-4 pl-4 | text-gray-500">
									<span class="px-4 xl:px-0">{item.title}</span>
								</div>

								<ul class="relative | mb-2">
									<div class="absolute inset-y-0 left-4 | w-px bg-white/5 xl:left-0" />

									{#each item.subItems as subItem}
										<li>
											<SidebarMenuItem class="pl-8" href={subItem.href}>
												{subItem.title}
											</SidebarMenuItem>
										</li>
									{/each}
								</ul>
							{:else}
								<SidebarMenuItem href={item.href}>
									{item.title}
								</SidebarMenuItem>
							{/if}
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	{/if}
{/each}
