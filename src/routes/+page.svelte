<script lang="ts">
	import Card from '$lib/UI/Card.svelte';
</script>

<section class="mt-3 md:mt-5">
	<h3 class="display-l text-white">Trending</h3>
	<div class="relative">
		<div
			class="
				no-scrollbar
				mt-4
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
			<Card isTrending />
			<Card isTrending />
			<Card isTrending />
			<Card isTrending />
			<Card isTrending />
		</div>
		<div class="to- absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-darkBlue/75" />
	</div>
</section>
<div class="mr-4 mt-10 bg-blue-400 md:mr-6 xl:mr-9">Recommended For you</div>
