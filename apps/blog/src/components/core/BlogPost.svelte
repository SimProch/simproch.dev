<script lang="ts">
	import type { Post } from 'src/posts/_types';

	export let post: Post;
	let id: string;
	let title: string;
	let subtitle: string;
	let date: string;

	$: {
		id = post.id;
		title = post.title;
		subtitle = post.subtitle;
		date = post.date;
	}
</script>

<div class="wrapper">
	<a href={`/posts/${id}`}>
		<time>{date}</time>
		<h1>{title}</h1>
		{#if subtitle}
			<h3>{subtitle}</h3>
		{/if}
	</a>
</div>

<style lang="scss">
	@import '../../variables.scss';
	.wrapper {
		margin-top: 48px;
		margin-bottom: 48px;
		display: flex;
		flex-direction: column;
	}

	a {
		text-decoration: none;
		display: flex;
		flex-direction: column;

		&:has(time:hover),
		&:has(h1:hover),
		&:has(h3:hover),
		&:focus {
			h1,
			h3 {
				text-decoration: underline;
			}
		}
	}

	time {
		font-family: $font-family;
		font-weight: $time-text-font-weight;
		font-size: $time-text-font-size;
		line-height: $time-text-line-height;
		color: $time-text-color;
		font-style: italic;
		padding: 8px 0px;
	}
</style>
