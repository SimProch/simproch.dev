<script>
	import { Contents } from 'src/contents/contents';
	import Body from 'src/components/core/Body.svelte';
	import LatestPosts from 'src/components/core/LatestPosts.svelte';
	const data = Contents.home;
</script>

<svelte:head>
	<title>Simon Prochazka | Developer</title>
</svelte:head>

<Body>
	<LatestPosts category={data} />
</Body>
