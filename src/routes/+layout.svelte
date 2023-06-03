<script lang="ts">
	import '../app.css';
</script>

<svelte:head>
	<link
		rel="icon"
		type="image/png"
		sizes="32x32"
		href="%sveltekit.assets%/images/favicon-32x32.png"
	/>
	<!-- Apple touch icon should be of 57 px x 57 px size -->
	<link rel="apple-touch-icon" sizes="32x32" href="%sveltekit.assets%/images/favicon-32x32.png" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Entertainment web app</title>
</svelte:head>

<slot />
