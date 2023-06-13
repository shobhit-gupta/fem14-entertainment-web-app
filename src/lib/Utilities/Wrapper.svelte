<!-- Conditionally wrap an element -->
<!-- Reference: https://svelte.dev/repl/983851f4fb7044e8b5d66a53ca0b356b?version=3.48.0 -->

<script lang="ts">
	export let tag = 'div';
	export let condition = false;
</script>

{#if condition}
	<svelte:element this={tag} {...$$restProps}>
		<slot />
	</svelte:element>
{:else}
	<slot />
{/if}
