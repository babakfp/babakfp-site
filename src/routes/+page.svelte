<script>
	import { copy } from "svelte-copy"
	import CardRepo from "$comps/CardRepo.svelte"
	import CardWordpressPlugin from "$comps/CardWordpressPlugin.svelte"
	import CardRtlTheme from "$comps/CardRtlTheme.svelte"
	import toast, { Toaster } from "svelte-french-toast"
	import ButtonLabel from "$comps/ButtonLabel.svelte"
	import IconGithub from "$icons/IconGithub.svelte"

	export let data
	const wordpressPlugins = [
		{
			title: "WP Administration Style",
			description: "Improves UI design and user experience of the Wordpress administration panel.",
			homepage: "https://wordpress.org/plugins/wp-administration-style",
			thumb: "/img/wp.org-portfolios/wp-administration-style.png",
			activeInstalls: "2,000+",
			rating: 5,
			reviewsCount: 12,
		},
		{
			title: "Farsi Font for Elementor",
			description:
				"Adds the functionality to easily use a Persian font in the Elementor Page Builder plugin.",
			homepage: "https://wordpress.org/plugins/farsi-font-for-elementor",
			thumb: "/img/wp.org-portfolios/farsi-font-for-elementor.png",
			activeInstalls: "2,000+",
			rating: null,
			reviewsCount: null,
		},
	]
	const rtlThemeProducts = [
		{
			title: "Elementor Fullpage Scroll",
			description:
				"A Wordpress plugin to build fullpage scrollable sections with Elementor Page Builder.",
			href: "https://www.rtl-theme.com/pixerul-wordpress-plugin",
			thumb: "/img/rtl-theme-portfolios/elementor-fullpage-scroll.png",
			sales: 124,
			rating: 4.5,
			reviewsCount: 15,
		},
		{
			title: "Elementor Fullpage Accordion",
			description: "A Wordpress plugin to build fullpage accordions with Elementor Page Builder.",
			href: "https://www.rtl-theme.com/elementor-fullpage-accordion-wordpress-plugin",
			thumb: "/img/rtl-theme-portfolios/elementor-fullpage-accordion.png",
			sales: 7,
			rating: null,
			reviewsCount: 0,
		},
	]

	const resumeUrl =
		"https://drive.google.com/file/d/1YDzEOu554dNuKXVm2B0InG6ZhuTuXtKb/view?usp=share_link"
	const githubReposUrl =
		"https://github.com/babakfp?tab=repositories&q=&type=public&language=&sort=stargazers"
	const dribbbleDesigns = "https://dribbble.com/babakfp"

	const frontendPortfolios = [
		{
			title: "FarsGamer - Online game store (open-source)",
			poster: "/img/frontend-portfolios/farsgamer.vercel.app.png",
			address: "https://farsgamer.vercel.app",
			githubAddress: "http://github.com/babakfp/farsgamer",
		},
		{
			title: "IDPay - Online payment (open-source)",
			poster: "/img/frontend-portfolios/idpay.vercel.app.png",
			address: "https://idpay.vercel.app",
			githubAddress: "https://github.com/babakfp/idpay",
		},
		{
			title: "FarsGamer - Online game store (built for a client)",
			poster: "/img/frontend-portfolios/farsgamer.com.png",
			address: "https://farsgamer.com",
		},
		{
			title: "TarVaPood - Online carpet store (built for a client)",
			poster: "/img/frontend-portfolios/tarvapood.com.png",
			address: "https://tarvapood.com",
		},
	]
</script>

<div class="max-w-prose mx-auto">
	<h1 class="text-white text-3xl font-semibold">Babak Farkhoopak</h1>
	<code class="inline-code mt-2 inline-block !px-3">JavaScript/Frontend Developer</code>

	<p class="mt-4 leading-7">
		All of my projects are built from the ground up, from planning and designing, all the way to
		building fully-functional solutions. I have built websites, open-source tools, Wordpress themes
		and plugins, and more. I have contributed to communities and helped people in building their
		applications. I have an eye on design and user experience.
	</p>

	<div class="mt-4 flex flex-wrap items-center gap-4">
		<a class="group | btn-link" href={resumeUrl} target="_blank" rel="noreferrer">
			<span>View Resume</span>
			<ButtonLabel type="external" />
		</a>

		<a class="group | btn-link" href={githubReposUrl} target="_blank" rel="noreferrer">
			<span>View Repos</span>
			<ButtonLabel type="external" />
		</a>

		<a class="group | btn-link" href={dribbbleDesigns} target="_blank" rel="noreferrer">
			<span>UI Designs</span>
			<ButtonLabel type="external" />
		</a>

		<button
			class="group | btn"
			title="babak.bxf@gmail.com"
			use:copy={"babak.bxf@gmail.com"}
			on:click={() =>
				toast.success("The email address copied to your Clipboard!", { position: "bottom-right" })}
		>
			<span>Email me</span>
		</button>
	</div>
</div>

<ul class="mt-12 grid gap-8 sm:grid-cols-2 sm:gap-6 lg:gap-y-8">
	{#each frontendPortfolios as portfolio}
		<li class="group relative">
			<img class="rounded duration-300 group-hover:rotate-2" src={portfolio.poster} alt />
			<img
				class="absolute inset-0 -z-1 rounded duration-150 blur-sm hide scale-95 !opacity-80 group-hover:show group-hover:-rotate-2 group-hover:scale-100"
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
		{#each data.githubRepositories as repo}
			<li>
				<CardRepo
					href={repo.html_url}
					title={repo.name}
					description={repo.description}
					stars={repo.stargazers_count}
					weeklyDownloads={repo.weeklyDownloads}
				/>
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
		{#each wordpressPlugins as plugin}
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
		{#each rtlThemeProducts as plugin}
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
