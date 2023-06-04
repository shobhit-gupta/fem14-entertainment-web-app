<script lang="ts">
	import '../app.css';
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

<nav>
	<img src="/assets/logo.svg" alt="" class="nav__logo" />
	<div class="flex gap-6 md:gap-8 lg:basis-3/4 lg:flex-col lg:gap-10">
		<img src="/assets/icon-nav-home.svg" alt="" class="nav__icon" />
		<img src="/assets/icon-nav-movies.svg" alt="" class="nav__icon" />
		<img src="/assets/icon-nav-tv-series.svg" alt="" class="nav__icon" />
		<img src="/assets/icon-nav-bookmark.svg" alt="" class="nav__icon" />
	</div>
	<div class="nav__avatar">
		<img src="/assets/image-avatar.png" alt="" />
	</div>
</nav>

<slot />

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
            lg:inset-y-8
            lg:left-8
            lg:right-auto
            lg:flex-col
            lg:rounded-[20px]
            lg:p-8;
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
            lg:h-10
            lg:w-10;
	}
</style>
