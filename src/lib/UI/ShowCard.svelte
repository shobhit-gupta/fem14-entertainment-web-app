<script lang="ts">
	export let show: Show;
</script>

<article
	class="card max-w-[470px]"
	class:body-sm={!show.isTrending}
	class:body-md={show.isTrending}
	class:trending={show.isTrending}
>
	<!-- Card Image -->
	<div class="card__img-wrapper">
		<picture>
			{#if show.isTrending}
				<source media="(max-width: 767px)" srcset={show.thumbnail.trending?.small} />
				<img src={show.thumbnail.trending?.large} alt="" />
			{:else}
				<source media="(max-width: 767px)" srcset={show.thumbnail.regular.small} />
				<source media="(max-width: 1279px)" srcset={show.thumbnail.regular.medium} />
				<img src={show.thumbnail.regular.large} alt="" />
			{/if}
		</picture>
	</div>

	<!-- Card Info -->
	<div class="card__info-container mt-2">
		<div class="flex gap-2 opacity-75">
			<p>{show.year}</p>
			<p>&sdot;</p>
			<div class="flex items-center space-x-1.5">
				<img
					src={`/assets/icon-category-${
						show.category.toLowerCase() === 'movie' ? 'movie' : 'tv'
					}.svg`}
					alt=""
				/>
				<p>{show.category}</p>
			</div>
			<p>&sdot;</p>
			<p>{show.rating}</p>
		</div>
		<h4 class={show.isTrending ? 'display-sm' : 'display-xs'}>{show.title}</h4>
	</div>

	<!-- Overlay -->
	<div class="relative col-start-1 row-start-1" class:row-span-2={show.isTrending}>
		<!-- Play button overlay -->
		<a href="/tv-series">
			<div
				class="flex h-full items-center justify-center rounded-lg bg-black/50 opacity-0 transition-opacity duration-200 hover:opacity-100 active:opacity-100"
			>
				<div class="flex items-center gap-5 rounded-full bg-white/25 p-[9px] pr-6">
					<img src="/assets/icon-play.svg" alt="" />
					<span class="display-xs">Play</span>
				</div>
			</div>
		</a>

		<!-- Bookmark -->
		<button
			class={`absolute right-2 top-2 rounded-full bg-darkBlue/50 px-2.5 py-[9px] transition-transform duration-300 hover:scale-110 active:scale-110 ${
				show.isTrending ? 'md:right-6' : 'md:right-4'
			} md:top-4 md:hover:scale-125 md:active:scale-125`}
			on:click={() => console.log('Bookmark')}
		>
			<img src={`/assets/icon-bookmark-${show.isBookmarked ? 'full' : 'empty'}.svg`} alt="" />
		</button>
	</div>
</article>

<style lang="postcss">
	.card {
		@apply grid grid-cols-1 text-left text-white;
	}
	.card__img-wrapper {
		@apply col-start-1 row-start-1 overflow-hidden rounded-lg;
	}
	.trending .card__img-wrapper {
		@apply col-start-1 row-span-2 row-start-1;
	}
	.card__info-container {
		@apply col-start-1 row-start-2 flex flex-col gap-1;
	}
	.trending .card__info-container {
		@apply col-start-1 row-start-2 rounded-b-lg bg-gradient-to-b from-transparent to-black/75 p-6;
	}
</style>
