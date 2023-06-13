<script lang="ts">
	import type { PageData } from './$types';
	import Shows from '$lib/UI/Shows.svelte';

	export let data: PageData;
	const tv = data.tv || [];
</script>

<Shows heading="TV Series" shows={tv} />
