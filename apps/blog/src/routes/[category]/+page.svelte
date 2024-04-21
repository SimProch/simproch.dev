<script lang="ts">
	import { page } from '$app/stores';
	import { Contents, getTagsFromPosts } from 'src/contents/contents';
	import type { Category, CategoryId } from 'src/contents/base';
	import Body from 'src/components/core/Body.svelte';
	import LatestPosts from 'src/components/core/LatestPosts.svelte';
	import Meta from 'src/components/core/Meta.svelte';

	let currentContent: Category;

	$: {
		currentContent = Contents[$page.params.category as CategoryId];
	}
</script>

<Meta
	title={`${currentContent ? currentContent.title : ''} | Simon Prochazka | Developer`}
	keywords={`tags, ${getTagsFromPosts(currentContent.posts ?? []).join(', ')}, blog, simon, prochzka`}
	description={`Posts containing ${getTagsFromPosts(currentContent.posts ?? []).join(', ')}`}
/>

<Body>
	<LatestPosts category={currentContent} />
</Body>
