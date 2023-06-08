<div
	class="flex min-h-full flex-col items-center justify-center gap-12 bg-red text-center text-white"
>
	<p class="text-3xl">Home</p>

	<article class="body-sm card group w-72">
		<div class="card__img-wrapper relative">
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
			<a href="/">
				<div
					class="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
				>
					<div class="flex items-center gap-5 rounded-full bg-white/25 p-[9px] pr-6">
						<img src="/assets/icon-play.svg" alt="" />
						<span class="display-xs">Play</span>
					</div>
				</div>
			</a>
		</div>
		<div class="card__info-container relative">
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
	</article>

	<article class="body-md trending card group w-[470px]">
		<div class="card__img-wrapper relative">
			<picture>
				<source
					media="(max-width: 767px)"
					srcset="/assets/thumbnails/beyond-earth/trending/small.jpg"
				/>
				<img src="/assets/thumbnails/beyond-earth/trending/large.jpg" alt="" />
			</picture>
			<a href="/">
				<div
					class="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
				>
					<div class="flex items-center gap-5 rounded-full bg-white/25 p-[9px] pr-6">
						<img src="/assets/icon-play.svg" alt="" />
						<span class="display-xs">Play</span>
					</div>
				</div>
			</a>
		</div>
		<div class="card__info-container relative">
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
	</article>
</div>

<style lang="postcss">
	.card {
		@apply grid grid-cols-1 space-y-2 text-left;
	}
	.card__img-wrapper {
		@apply overflow-hidden rounded-lg;
	}
	.trending .card__img-wrapper {
		@apply col-start-1 row-span-2 row-start-1;
	}
	.card__info-container {
		@apply flex flex-col gap-1;
	}
	.trending .card__info-container {
		@apply col-start-1 row-start-2 rounded-b-lg bg-gradient-to-b from-transparent to-black/75 p-6;
	}
</style>
