<div
	class="flex min-h-full flex-col items-center justify-center gap-12 bg-red text-center text-white"
>
	<p class="text-3xl">Home</p>

	<article class="body-sm card w-72">
		<!-- Card Image -->
		<div class="card__img-wrapper">
			<picture>
				<source
					media="(max-width: 767px)"
					srcset="/assets/thumbnails/beyond-earth/regular/small.jpg"
				/>
				<source
					media="(max-width: 1279px)"
					srcset="/assets/thumbnails/beyond-earth/regular/medium.jpg"
				/>
				<img src="/assets/thumbnails/beyond-earth/regular/large.jpg" alt="" />
			</picture>
		</div>

		<!-- Card Info -->
		<div class="card__info-container mt-2">
			<div class="flex gap-2 opacity-75">
				<p>2019</p>
				<p>&sdot;</p>
				<div class="flex items-center space-x-1.5">
					<img src="/assets/icon-category-movie.svg" alt="" />
					<p>Movie</p>
				</div>
				<p>&sdot;</p>
				<p>PG</p>
			</div>
			<h4 class="display-xs">Beyond Earth</h4>
		</div>

		<!-- Overlay -->
		<div class="relative col-start-1 row-start-1">
			<!-- Play button overlay -->
			<a href="/tv-series">
				<div
					class="flex h-full items-center justify-center rounded-lg bg-black/50 opacity-0 transition-opacity duration-200 hover:opacity-100"
				>
					<div class="flex items-center gap-5 rounded-full bg-white/25 p-[9px] pr-6">
						<img src="/assets/icon-play.svg" alt="" />
						<span class="display-xs">Play</span>
					</div>
				</div>
			</a>

			<!-- Bookmark -->
			<button
				class="absolute right-2 top-2 rounded-full bg-darkBlue/50 px-2.5 py-[9px] transition-transform duration-300 hover:scale-110 md:right-4 md:top-4 md:hover:scale-125"
				on:click={() => console.log('Bookmark')}
			>
				<img src="/assets/icon-bookmark-empty.svg" alt="" />
			</button>
		</div>
	</article>

	<article class="body-md trending card w-[470px]">
		<!-- Card Image -->
		<div class="card__img-wrapper">
			<picture>
				<source
					media="(max-width: 767px)"
					srcset="/assets/thumbnails/beyond-earth/trending/small.jpg"
				/>
				<img src="/assets/thumbnails/beyond-earth/trending/large.jpg" alt="" />
			</picture>
		</div>

		<!-- Card Info -->
		<div class="card__info-container">
			<div class="flex gap-2 opacity-75">
				<p>2019</p>
				<p>&sdot;</p>
				<div class="flex items-center space-x-1.5">
					<img src="/assets/icon-category-movie.svg" alt="" />
					<p>Movie</p>
				</div>
				<p>&sdot;</p>
				<p>PG</p>
			</div>
			<h4 class="display-sm">Beyond Earth</h4>
		</div>

		<!-- Overlay -->
		<div class="relative col-start-1 row-span-2 row-start-1">
			<a href="/tv-series">
				<div
					class="flex h-full items-center justify-center rounded-lg bg-black/50 opacity-0 transition-opacity duration-200 hover:opacity-100"
				>
					<div class="flex items-center gap-5 rounded-full bg-white/25 p-[9px] pr-6">
						<img src="/assets/icon-play.svg" alt="" />
						<span class="display-xs">Play</span>
					</div>
				</div>
			</a>
			<button
				class="absolute right-2 top-2 rounded-full bg-darkBlue/50 px-2.5 py-[9px] transition-transform duration-300 hover:scale-110 md:right-6 md:top-4 md:hover:scale-125"
				on:click={() => console.log('Bookmark')}
			>
				<img src="/assets/icon-bookmark-empty.svg" alt="" />
			</button>
		</div>
	</article>
</div>

<style lang="postcss">
	.card {
		@apply grid grid-cols-1 text-left;
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
