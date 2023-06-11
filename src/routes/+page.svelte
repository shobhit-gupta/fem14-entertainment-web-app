<script lang="ts">
	import Card from '$lib/UI/Card.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const shows = data.shows;
	const normalShows = shows.filter((s) => !s.isTrending);
	const trendingShows = shows.filter((s) => s.isTrending);
</script>

<section class="mt-3 md:mt-5">
	<h3 class="display-lg mb-4 text-white">Trending</h3>
	<div class="relative">
		<div
			class="
				no-scrollbar
				grid
				auto-cols-[70%]
				grid-flow-col
				gap-4
				overflow-x-scroll
				pr-4
				md:auto-cols-max
				md:gap-10
				md:pr-6
				xl:pr-9
			"
		>
			{#each trendingShows as show}
				<Card {show} />
			{/each}
		</div>
		<div class="to- absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-darkBlue/75" />
	</div>
</section>
<div class="mr-4 mt-10 md:mr-6 xl:mr-9">
	<h3 class="display-lg mb-6 text-white">Recommended for you</h3>
	<div
		class="
			grid
			grid-cols-[repeat(2,1fr)]
			justify-center
			gap-4
			md:grid-cols-[repeat(auto-fill,minmax(220px,1fr))]
			md:gap-x-8
			md:gap-y-6
			xl:grid-cols-[repeat(auto-fill,minmax(280px,1fr))]
			xl:gap-x-10
			xl:gap-y-8
		"
	>
		{#each normalShows as show}
			<Card {show} />
		{/each}
	</div>
</div>
