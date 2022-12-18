<script>
	import { page } from "$app/stores"
	import { sidebarItems } from "$stores/sidebar.js"
	import SidebarMenuItem from "./SidebarMenuItem.svelte"
	import IconGithub from "$icons/IconGithub.svelte"
	import IconNpm from "$icons/IconNpm.svelte"
	import IconCode from "$icons/IconCode.svelte"
</script>

{#each $sidebarItems as project}
	{#if $page.url.pathname.startsWith(project.rootUrl) || $page.url.pathname === "/docs"}
		<!--  -->
		<div class="grid gap-4 pb-12">
			{#if project.primaryLinks && project.primaryLinks.length > 0}
				<ul class="mt-12 font-mono">
					{#each project.primaryLinks as { href, title, isExternal }}
						<li>
							<a
								class="group flex items-center gap-4 px-4 py-1 text-sm duration-150 hover:text-white"
								{href}
								target="_blank"
								rel="noreferrer"
							>
								<div
									class="flex items-center justify-center w-7 h-7 bg-white/5 rounded-[.375rem] shadow duration-150 group-hover:bg-white/10"
								>
									{#if title === "GitHub"}
										<IconGithub class="text-base text-gray-300" />
									{:else if title === "NPM"}
										<IconNpm class="text-base text-gray-300" />
									{:else if title === "Demo"}
										<IconCode class="text-2xl" />
									{/if}
								</div>

								<span>{title}</span>
							</a>
						</li>
					{/each}
				</ul>
			{/if}

			{#if project.items}
				<ul>
					{#each project.items as item}
						<li class="mt-8">
							<h5 class="block mx-4 font-semibold text-white">
								{item.title}
							</h5>

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
