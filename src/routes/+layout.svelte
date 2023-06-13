<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';

	const routesInfo = new Map([
		[
			'/',
			{
				icon: '/assets/icon-nav-home.svg',
				placeholder: 'Search for movies or TV series'
			}
		],
		[
			'/movies',
			{
				icon: '/assets/icon-nav-movies.svg',
				placeholder: 'Search for movies'
			}
		],
		[
			'/tv-series',
			{
				icon: '/assets/icon-nav-tv-series.svg',
				placeholder: 'Search for TV series'
			}
		],
		[
			'/bookmarks',
			{
				icon: '/assets/icon-nav-bookmark.svg',
				placeholder: 'Search for bookmarked shows'
			}
		]
	]);
	$: console.log($page.route.id);
</script>

<svelte:head>
	<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
	<!-- Apple touch icon should be of 57 px x 57 px size -->
	<link rel="apple-touch-icon" sizes="32x32" href="/assets/favicon-32x32.png" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link
		href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500&display=swap"
		rel="stylesheet"
	/>
	<title>Entertainment web app</title>
</svelte:head>

<nav class="z-50">
	<img src="/assets/logo.svg" alt="" class="nav__logo" />
	<div class="flex gap-6 md:gap-8 xl:basis-3/4 xl:flex-col xl:gap-10">
		{#each [...routesInfo] as [id, { icon }]}
			<a href={id}>
				<img src={icon} alt="" class="nav__icon" />
			</a>
		{/each}
	</div>
	<div class="nav__avatar">
		<img src="/assets/image-avatar.png" alt="" />
	</div>
</nav>

<div class="content-container">
	<form method="get" class="flex items-center gap-4 md:gap-6">
		<label for="search" class="w-6 shrink-0 pb-4 md:w-8">
			<img src="/assets/icon-search.svg" alt="" />
		</label>
		<input
			type="search"
			name="search"
			id="search"
			class="
				display-md
				basis-full
				border-b-2
				border-grayishBlue
				bg-transparent
				pb-4
				text-white
				placeholder:text-white/50
				placeholder-shown:border-transparent
				focus:outline-none
			"
			placeholder={routesInfo.get($page.route.id || '')?.placeholder || 'Search'}
		/>
	</form>
	<slot />
</div>

<style lang="postcss">
	nav {
		@apply fixed
            inset-x-0
            top-0
            flex
            items-center
            justify-between
            bg-semiDarkBlue
            p-4
            md:inset-x-6
            md:top-6
            md:rounded-[10px]
            md:p-6
            xl:inset-y-8
            xl:left-8
            xl:right-auto
            xl:flex-col
            xl:rounded-[20px]
            xl:p-8;
	}

	.nav__logo {
		@apply h-5 w-auto md:h-auto md:w-8;
	}

	.nav__icon {
		@apply h-4 w-4 md:h-5 md:w-5;
	}

	.nav__avatar {
		@apply h-6
            w-6
            rounded-full
            ring-1
            ring-white
            md:h-8
            md:w-8
            xl:h-10
            xl:w-10;
	}
	.content-container {
		/* @apply h-screen px-4 pb-14 pt-20 md:px-6 md:pt-32 xl:pl-40 xl:pr-9 xl:pt-16; */
		@apply h-screen pb-14 pl-4 pt-20 md:pl-6 md:pt-32 xl:pl-40 xl:pt-16;
	}
</style>
