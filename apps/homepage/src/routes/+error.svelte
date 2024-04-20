<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => goto('/'));
</script>

<h2>An error occured. Attempting to redirect to home page...</h2>
