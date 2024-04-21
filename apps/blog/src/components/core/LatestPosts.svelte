<script lang="ts">
	import type { Category, CategoryId } from 'src/contents/base';
	import type { Post } from 'src/contents/posts/types';
	import BlogPost from './BlogPost.svelte';
	import { getSortedPosts } from '../getSortedPosts';
	import { page } from '$app/stores';
	import PaginatedPosts from './PaginatedPosts.svelte';

	export let category: Category;
	let posts: Post[] = [];
	$: {
		posts = getSortedPosts(
			category.posts,
			($page.params.category as CategoryId) === 'system-design'
		);
	}
</script>

{#if posts.length === 0}
	<img src="/images/empty.png" alt="Empty posts" class="empty-image" />
{:else}
	<PaginatedPosts {posts} />
{/if}

<style lang="scss">
	.empty-image {
		width: 50%;
		margin-top: 32px;
	}
</style>
