<script>
	import BlogPost from 'src/components/core/BlogPost.svelte';
	import Body from 'src/components/core/Body.svelte';
	import { posts } from 'src/posts/_posts';
</script>

<svelte:head>
	<title>Simon Prochazka | Developer</title>
</svelte:head>

<Body>
	{#each posts as post}
		<BlogPost {post} />
	{/each}
</Body>
