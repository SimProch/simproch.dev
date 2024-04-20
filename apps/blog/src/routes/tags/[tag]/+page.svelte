<script lang="ts">
	import { page } from '$app/stores';
	import BlogPost from 'src/components/core/BlogPost.svelte';
	import Body from 'src/components/core/Body.svelte';
	import { getSortedPosts } from 'src/components/getSortedPosts';
	import { getTagsFromPosts, posts } from 'src/contents/contents';
	import type { Post } from 'src/contents/posts/types';
	import Meta from 'src/components/core/Meta.svelte';
	let postsInternal: Post[] = [];

	$: {
		const tag = $page.params.tag;
		const filteredPosts = posts.flat().filter((i) => i.tags.includes(tag));
		postsInternal = getSortedPosts(filteredPosts);
	}
</script>

<Meta
	title="Tags | Simon Prochazka | Developer"
	keywords={`tags, ${getTagsFromPosts(postsInternal ?? []).join(', ')}, blog, simon, prochzka`}
	description={`posts tagged with ${getTagsFromPosts(postsInternal ?? []).join(', ')}`}
/>

<Body>
	{#each postsInternal as post (post.id)}
		<BlogPost {post} />
	{/each}
</Body>
