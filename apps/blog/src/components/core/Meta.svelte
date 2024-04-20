<script lang="ts">
	export let title = '';
	export let keywords = '';
	export let description = '';
</script>

<svelte:head>
    <title>{title} | Simon Prochazka</title>
	<meta property="keywords" content={keywords} />
	<meta property="description" content={description} />
</svelte:head>
