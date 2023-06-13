<script lang="ts">
	import type { PageData } from './$types';
	import Shows from '$lib/UI/Shows.svelte';

	export let data: PageData;
	const movies = data.movies || [];
</script>

<Shows heading="Movies" shows={movies} />
