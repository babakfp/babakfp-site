<script>
	import { copy } from "svelte-copy"
	import CardRepo from "$comps/CardRepo.svelte"
	import CardWordpressPlugin from "$comps/CardWordpressPlugin.svelte"
	import CardRtlTheme from "$comps/CardRtlTheme.svelte"
	import toast, { Toaster } from "svelte-french-toast"
	import Link from "./Link.svelte"

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

	<div class="mt-4 flex flex-wrap gap-4">
		<Link href="https://drive.google.com/file/d/1Ib-X7RkDUSxbSOt02-Nz7BTU-87NJt4R/view?usp=sharing">
			RESUME
		</Link>
		<Link
			href="https://github.com/babakfp?tab=repositories&q=&type=public&language=&sort=stargazers"
		>
			GitHub
		</Link>
		<Link href="https://dribbble.com/babakfp">
			<!-- prettier-ignore -->
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4.5 h-4.5 fill-gray-400" aria-hidden="true">
				<path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm224 256c0 .977-.135 1.922-.146 2.896C469.4 257.1 458.7 256 448 256c-47.19 0-90.39 17.18-123.9 45.52L278.6 256l146.5-146.5C459.2 148.8 480 199.1 480 256zM288 448c0-38.34 14.12-73.1 36.69-100.7l77.78 77.78c-31.03 26.91-69.46 45.33-111.8 51.95C288.9 467.5 288 457.7 288 448zM402.5 86.91 256 233.4l-45.5-45.5C238.8 154.4 256 111.2 256 64c0-10.68-1.139-21.36-2.896-31.85C254.1 32.13 255 32 256 32c56 0 107.2 20.81 146.5 54.91zm-293 0C140.53 60 178.96 41.58 221.3 34.96c1.8 9.53 2.7 19.3 2.7 29.04 0 38.34-14.12 73.1-36.69 100.7L109.5 86.91zM86.91 109.5l77.78 77.78C137.1 209.9 102.3 224 64 224c-9.74 0-19.51-.9-29.04-2.6 6.62-43.3 24.14-80.8 51.95-111.9zM32 256c0-.977.135-1.922.146-2.896C42.64 254.9 53.32 256 64 256c47.19 0 90.39-17.18 123.9-45.52L233.4 256 86.9 402.5C52.81 363.2 32 312 32 256zm77.5 169.1L256 278.6l45.52 45.52C273.2 357.6 256 400.8 256 448c0 10.68 1.139 21.36 2.896 31.85-.996.05-2.796.15-2.896.15-56.9 0-107.2-20.8-146.5-54.9zm315.6-22.6-77.78-77.78C374.9 302.1 409.7 288 448 288c9.742 0 19.51.893 29.04 2.635C470.4 333 452 371.4 425.1 402.5z"/>
			</svg>
			Dribbble
		</Link>
		<Link href="https://www.rtl-theme.com/author/babakfp/products">
			<!-- prettier-ignore -->
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.1 49.8" class="w-4 h-4 fill-gray-400" aria-hidden="true">
				<path d="M43.757 49.7H29.4a8.179 8.179 0 0 1-3-1C23.9 47 10.6 32.6 10.6 32.6v17.2H4.7a5.058 5.058 0 0 1-3.3-1.7 5.925 5.925 0 0 1-.477-.612 5.108 5.108 0 0 1-.787-1.756A5.3 5.3 0 0 1 0 44.9V4.792A4.873 4.873 0 0 1 4.594.1H19.9s3.2.1 4.7 1.6 14.7 15.6 14.7 15.6L25.1 32.6l6.2 6.6h8.1v-7.6h.093V5.3c0-.1 0-.189.007-.283V0h5.9a5.06 5.06 0 0 1 3.3 1.7v.005a5.228 5.228 0 0 1 1.019 1.626A5.307 5.307 0 0 1 50.1 4.9v12.7h-.007v26.9a5.335 5.335 0 0 1-5.3 5.3 5.4 5.4 0 0 1-1.036-.1ZM10.6 32.2v.4L25 17.4l-6.34-6.8H10.6v21.6Z" data-name="Path 1"/>
			</svg>
			RTL-Theme
		</Link>
		<Link href="https://elemen.ir">Store</Link>
		<button
			class="inline-flex gap-2 py-2 px-3 pr-4 rounded text-sm bg-gray-800/50 backdrop-blur highlight-white/5 select-none duration-150 hover:bg-gray-700/50"
			title="babak.bxf@gmail.com"
			use:copy={"babak.bxf@gmail.com"}
			on:click={() => toast.success("Copied to Clipboard!", { position: "bottom-right" })}
		>
			<!-- prettier-ignore -->
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
			</svg>
			Email
		</button>
		<Link href="https://t.me/babakfp">
			<!-- prettier-ignore -->
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
			</svg>
			Telegram
		</Link>
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
