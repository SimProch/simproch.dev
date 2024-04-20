<script>
	import { Contents } from 'src/contents/contents';
	import Body from 'src/components/core/Body.svelte';
	import LatestPosts from 'src/components/core/LatestPosts.svelte';
	const data = Contents.home;
</script>

<Body>
	<LatestPosts category={data} />
</Body>
