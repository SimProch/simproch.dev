<script lang="ts">
	import type { Post } from 'src/contents/posts/types';
	import BlogPost from './BlogPost.svelte';
	import SkillButton from '../../../../../packages/ui/components/SkillButton.svelte';

	const PAGE_SIZE = 5;
	export let posts: Post[];
	let visiblePostsObj: Record<number, Post[]>;
	let currentPage = 0;
	let pages: number[] = [];
	$: {
		visiblePostsObj = {};
		let currentPage = 0;
		let iterator = 0;
		while (posts.length > 0) {
			if (iterator === PAGE_SIZE) {
				currentPage++;
				iterator = 0;
			}
			const post = posts.shift()!;
			visiblePostsObj[currentPage] ??= [];
			visiblePostsObj[currentPage].push(post);
			iterator++;
		}

		pages = Object.keys(visiblePostsObj).map((i) => +i);
	}

	const onPaginationClick = (e: MouseEvent | KeyboardEvent, page: number) => {
		currentPage = page;
	};
</script>

<div class="pagination">
	{#each pages as page}
		<button
			class="pagination__page"
			class:pagination__page--active={page === currentPage}
			on:click={(e) => onPaginationClick(e, page)}
		>
			{page + 1}
		</button>
	{/each}
</div>

{#each visiblePostsObj[currentPage] as post}
	<BlogPost {post} />
{/each}

<style lang="scss">
	@import '../../variables.scss';

	.pagination {
		display: flex;
		flex-direction: row;
		list-style-type: none;
		justify-content: center;
		gap: 5 * $spacing;

		.pagination__page {
            font-size: $text-font-size;
			position: relative;
			display: flex;
			align-items: center;
			margin-top: $spacing;
			margin-right: $spacing;
			padding: $spacing $spacing;
			text-align: center;
			letter-spacing: 1px;
			text-decoration: none;
			color: $button-color;
			background: $button-background;
			border: $button-border-size solid $button-background;
			cursor: pointer;
			transition: ease-out 0.5s;
			-webkit-transition: ease-out 0.5s;
			-moz-transition: ease-out 0.5s;

			&:hover,
			&:focus {
				color: $button-hover-color;
			}

			&--active {
				color: $button-hover-color;
			}
		}
	}
</style>
