<script>
	import { copy } from "svelte-copy"
	import CardRepo from "$comps/CardRepo.svelte"
	import CardWordpressPlugin from "$comps/CardWordpressPlugin.svelte"
	import CardRtlTheme from "$comps/CardRtlTheme.svelte"
	import toast, { Toaster } from "svelte-french-toast"
	import ButtonLabel from "./ButtonLabel.svelte"

	export let data
	const wordpressPlugins = [
		{
			title: "WP Administration Style",
			description: "Improves UI design and user experience of the Wordpress administration panel.",
			homepage: "https://wordpress.org/plugins/wp-administration-style",
			thumb: "https://ps.w.org/wp-administration-style/assets/icon-256x256.png",
			activeInstalls: "2,000+",
			rating: 5,
			reviewsCount: 12,
		},
		{
			title: "Farsi Font for Elementor",
			description:
				"Adds the functionality to easily use a Persian font in the Elementor Page Builder plugin.",
			homepage: "https://wordpress.org/plugins/farsi-font-for-elementor/",
			thumb: "https://ps.w.org/farsi-font-for-elementor/assets/icon-256x256.png",
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
			thumb:
				"https://files.rtl-theme.com/attachments/2022/01/6a61ed2f8328c890731182a647624375268847d0b43620-160x160.png",
			sales: 112,
			rating: 4.5,
			reviewsCount: 15,
		},
		{
			title: "Elementor Fullpage Accordion",
			description: "A Wordpress plugin to build fullpage accordions with Elementor Page Builder.",
			href: "https://www.rtl-theme.com/elementor-fullpage-accordion-wordpress-plugin",
			thumb:
				"https://files.rtl-theme.com/attachments/2022/02/c6f8a685d11b7802d1b380775763a4697385e842bde6d7-160x160.png",
			sales: 6,
			rating: null,
			reviewsCount: 0,
		},
	]

	const resumeUrl =
		"https://drive.google.com/file/d/1Ib-X7RkDUSxbSOt02-Nz7BTU-87NJt4R/view?usp=sharing"
	const githubReposUrl =
		"https://github.com/babakfp?tab=repositories&q=&type=public&language=&sort=stargazers"
	const dribbbleDesigns = "https://dribbble.com/babakfp"
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
		<a class="group | btn-link" href={resumeUrl}>
			<span>View Resume</span>
			<ButtonLabel type="external" />
		</a>

		<a class="group | btn-link" href={githubReposUrl}>
			<span>View Repos</span>
			<ButtonLabel type="external" />
		</a>

		<a class="group | btn-link" href={dribbbleDesigns}>
			<span>Dribbble UI Designs</span>
			<ButtonLabel type="external" />
		</a>

		<a class="group | btn-link" href="https://elemen.ir">
			<span>My Online Store</span>
			<ButtonLabel type="external" />
		</a>

		<a class="group | btn-link" href="https://www.rtl-theme.com/author/babakfp/products">
			<span>My Products on RTL-Theme</span>
			<ButtonLabel type="external" />
		</a>

		<button
			class="group | btn"
			title="babak.bxf@gmail.com"
			use:copy={"babak.bxf@gmail.com"}
			on:click={() => toast.success("Copied to Clipboard!", { position: "bottom-right" })}
		>
			<span>Email</span>
			<ButtonLabel type="copy" />
		</button>

		<a class="group | btn-link" href="https://t.me/babakfp">
			<span>Telegram</span>
			<ButtonLabel type="external" />
		</a>
	</div>

	<div
		id="frontend-open-source"
		class="mt-12 scroll-mt-[calc(theme(spacing.header-height)_+_theme(spacing.12))] flex items-end justify-between gap-4"
	>
		<h2 class="text-white uppercase text-2xl">Frontend</h2>
		<a
			class="text-sm link whitespace-nowrap"
			href="https://github.com/babakfp?tab=repositories&q=&type=public&language=&sort=stargazers"
			target="_blank"
			rel="noreferrer">See more</a
		>
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
		<h2 class="text-white uppercase text-2xl">Wordpress</h2>
		<!-- <a class="text-sm link whitespace-nowrap" href="https://profiles.wordpress.org/pixer/#content-plugins" target="_blank" rel="noreferrer">See more</a> -->
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
		<h2 class="text-white uppercase text-2xl">Products</h2>
		<a
			class="text-sm link whitespace-nowrap"
			href="https://www.rtl-theme.com/author/babakfp/products"
			target="_blank"
			rel="noreferrer">See more</a
		>
	</div>

	<ul class="mt-4 grid gap-4">
		{#each rtlThemeProducts as plugin}
			<li>
				<CardRtlTheme {...plugin} />
			</li>
		{/each}
	</ul>
</div>

<Toaster />
