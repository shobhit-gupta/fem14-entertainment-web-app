<script lang="ts">
	import Card from '$lib/UI/Card.svelte';

	let isTrending = true;
</script>

<div
	class="
		flex
		min-h-full
		flex-col
		items-center
		justify-center
		gap-12
		bg-red
		text-center
		text-white
	"
>
	<p class="text-3xl">Home</p>

	<Card />
	<Card isTrending />
</div>
