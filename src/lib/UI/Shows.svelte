<script lang="ts">
	import ShowCard from '$lib/UI/ShowCard.svelte';
	import Wrapper from '$lib//Utilities/Wrapper.svelte';

	export let type: 'Grid' | 'Carousel' = 'Grid';
	export let isDisplayedAtTop = false;
	export let heading: string;
	export let shows: Show[];
</script>

<section
	class:shows-section={type === 'Grid'}
	class:shows-section--fullwidth={type === 'Carousel'}
	class:shows-section--at-top={isDisplayedAtTop}
	class:shows-section--not-at-top={!isDisplayedAtTop}
>
	<h3 class="shows-section__heading display-lg">
		{heading}
	</h3>
	<Wrapper condition={type === 'Carousel'} class="relative">
		<div class={type === 'Grid' ? 'shows--grid' : 'shows--carousel no-scrollbar'}>
			{#each shows as show}
				<ShowCard {show} />
			{/each}
		</div>
		{#if type === 'Carousel'}
			<!-- Display a translucent shadow overlay at the end of carousel -->
			<div
				class="absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-darkBlue/75 to-transparent"
			/>
		{/if}
	</Wrapper>
</section>

<style lang="postcss">
	.shows-section {
		@apply mr-4 md:mr-6 xl:mr-9;
	}

	.shows-section--fullwidth {
		@apply mr-0;
	}

	.shows-section--at-top {
		@apply mt-3 md:mt-5;
	}

	.shows-section--not-at-top {
		@apply mt-6 md:mt-10;
	}

	.shows-section__heading {
		@apply mb-6 text-white;
	}

	.shows--carousel {
		@apply grid
		auto-cols-[70%]
		grid-flow-col
		gap-4
		overflow-x-scroll
		pr-4
		md:auto-cols-max
		md:gap-10
		md:pr-6
		xl:pr-9;
	}

	.shows--grid {
		@apply grid
			grid-cols-[repeat(2,1fr)]
			justify-center
			gap-4
			md:grid-cols-[repeat(auto-fill,minmax(220px,1fr))]
			md:gap-x-8
			md:gap-y-6
			xl:grid-cols-[repeat(auto-fill,minmax(280px,1fr))]
			xl:gap-x-10
			xl:gap-y-8;
	}
</style>
