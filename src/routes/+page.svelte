<script>
	import { env } from "$env/dynamic/public"
	import { copy } from "svelte-copy"
	import LayoutDefault from "$comps/LayoutDefault.svelte"
	import CardRepo from "$comps/CardRepo.svelte"
	import CardWordpressPlugin from "$comps/CardWordpressPlugin.svelte"
	import CardRtlTheme from "$comps/CardRtlTheme.svelte"
	import toast, { Toaster } from "svelte-french-toast"
	import ButtonLabel from "$comps/ButtonLabel.svelte"
	import IconGithub from "$icons/IconGithub.svelte"

	export let data
</script>

<LayoutDefault>
	<div class="max-w-prose mx-auto">
		<h1 class="text-white text-3xl font-semibold">Babak Farkhoopak</h1>
		<code class="inline-code mt-2 inline-block !px-3">JavaScript/Frontend Developer</code>

		<p class="mt-4 leading-7">
			All of my projects are built from the ground up, from planning and designing, all the way to
			building fully-functional solutions. I have built websites, open-source tools, Wordpress
			themes and plugins, and more. I have contributed to communities and helped people in building
			their applications. I have an eye on design and user experience.
		</p>

		<div class="mt-4 flex flex-wrap items-center gap-4">
			<a
				class="group | btn-link"
				href={env.PUBLIC_GOOGLE_DRIVE_RESUME_URL}
				target="_blank"
				rel="noreferrer"
			>
				<span>View Resume</span>
				<ButtonLabel type="external" />
			</a>

			<a
				class="group | btn-link"
				href="https://github.com/babakfp?tab=repositories&q=&type=public&language=&sort=stargazers"
				target="_blank"
				rel="noreferrer"
			>
				<span>View Repos</span>
				<ButtonLabel type="external" />
			</a>

			<a
				class="group | btn-link"
				href="https://dribbble.com/babakfp"
				target="_blank"
				rel="noreferrer"
			>
				<span>UI Designs</span>
				<ButtonLabel type="external" />
			</a>

			<button
				class="group | btn"
				title="babak.bxf@gmail.com"
				use:copy={"babak.bxf@gmail.com"}
				on:click={() =>
					toast.success("The email address copied to your Clipboard!", {
						position: "bottom-right",
					})}
			>
				Email me
			</button>
		</div>
	</div>

	<ul class="mt-12 grid gap-8 sm:grid-cols-2 sm:gap-6 lg:gap-y-8">
		{#each data.frontendPortfolios as portfolio}
			<li class="block group relative">
				<img
					class="bg-gray-800 aspect-[32/15] w-full | rounded duration-300 group-hover:scale-95"
					src={portfolio.poster}
					alt
				/>
				<img
					class="bg-gray-800 aspect-[32/15] w-full | absolute inset-0 -z-1 rounded duration-300 blur-sm hide scale-95 !opacity-75 group-hover:show group-hover:-rotate-3 group-hover:scale-105"
					src={portfolio.poster}
					alt
					aria-hidden="true"
				/>
				<div class="mt-4 flex items-center gap-4 justify-between">
					<h6 class="font-mono text-sm">{portfolio.title}</h6>
					{#if portfolio.githubAddress}
						<a
							class="btn px-2 | relative z-1 flex"
							href={portfolio.githubAddress}
							target="_blank"
							rel="noreferrer"
						>
							<IconGithub />
						</a>
					{/if}
				</div>
				<a class="absolute inset-0" href={portfolio.address} target="_blank" rel="noreferrer" />
			</li>
		{/each}
	</ul>

	<div class="max-w-prose mx-auto sm:mt-24">
		<div
			id="frontend-open-source"
			class="mt-12 scroll-mt-[calc(theme(spacing.header-height)_+_theme(spacing.12))] flex items-end justify-between gap-4"
		>
			<h2 class="text-white uppercase text-2xl">
				Frontend <small class="text-[60%]">open-sources</small>
			</h2>
		</div>

		<ul class="mt-4 grid gap-4">
			{#each data.repos as repo}
				<li>
					<CardRepo {...repo} />
				</li>
			{/each}
		</ul>

		<div
			id="wordpress-plugins"
			class="mt-12 scroll-mt-[calc(theme(spacing.header-height)_+_theme(spacing.12))] flex items-end justify-between gap-4"
		>
			<h2 class="text-white uppercase text-2xl">
				Wordpress <small class="text-[60%]">open-sources</small>
			</h2>
		</div>

		<ul class="mt-4 grid gap-4">
			{#each data.wordpressRepositoryPlugins as plugin}
				<li>
					<CardWordpressPlugin {...plugin} />
				</li>
			{/each}
		</ul>

		<div
			id="rtl-theme-products"
			class="mt-12 scroll-mt-[calc(theme(spacing.header-height)_+_theme(spacing.12))] flex items-end justify-between gap-4"
		>
			<h2 class="text-white uppercase text-2xl">
				Wordpress <small class="text-[60%]">products</small>
			</h2>
		</div>

		<ul class="mt-4 grid gap-4">
			{#each data.rtlThemePlugins as plugin}
				<li>
					<CardRtlTheme {...plugin} />
				</li>
			{/each}
		</ul>
	</div>

	<hr class="my-12" />

	<div class="mt-4 flex flex-wrap items-center gap-4 font-mono">
		<a class="group | btn-link" href="https://elemen.ir" target="_blank" rel="noreferrer">
			<span>Shop</span>
			<ButtonLabel type="external" />
		</a>

		<a
			class="group | btn-link"
			href="https://www.rtl-theme.com/author/babakfp/products"
			target="_blank"
			rel="noreferrer"
		>
			<span>RTL-THEME</span>
			<ButtonLabel type="external" />
		</a>

		<a class="group | btn-link" href="https://t.me/babakfp" target="_blank" rel="noreferrer">
			<span>Telegram</span>
			<ButtonLabel type="external" />
		</a>
	</div>

	<Toaster />
</LayoutDefault>
