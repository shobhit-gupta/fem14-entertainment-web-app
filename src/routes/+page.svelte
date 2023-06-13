<script lang="ts">
	import type { PageData } from './$types';
	import Shows from '$lib/UI/Shows.svelte';

	export let data: PageData;

	const recommended = data.shows?.recommended || [];
	const trending = data.shows?.trending || [];
</script>

<Shows heading="Trending" shows={trending} type="Carousel" isDisplayedAtTop />
<Shows heading="Recommended for you" shows={recommended} />
