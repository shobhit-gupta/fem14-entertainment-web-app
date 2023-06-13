<script lang="ts">
	import type { PageData } from './$types';
	import Shows from '$lib/UI/Shows.svelte';

	export let data: PageData;

	const movies = data.bookmarked?.movies || [];
	const tv = data.bookmarked?.tv || [];
</script>

<Shows heading="Bookmarked Movies" shows={movies} />
<Shows heading="Bookmarked TV Series" shows={tv} />
