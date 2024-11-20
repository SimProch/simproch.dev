<script lang="ts">
	import type { Post } from 'src/contents/posts/types';
	import { goto } from '$app/navigation';
	import { SkillButton } from '@simproch-dev/ui';

	export let post: Post;
	let id: string;
	let title: string;
	let tags: string[];
	let subtitle: string;
	let date: string;

	$: {
		id = post.id;
		title = post.title;
		tags = post.tags;
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
	<div class="tags">
		{#each tags as tag (tag)}
			<SkillButton name={tag} linkTo={`/tags/${tag}`} />
		{/each}
	</div>
</div>

<style lang="scss">
	@import '../../variables.scss';
	.wrapper {
		margin-top: 24px;
		display: flex;
		flex-direction: column;
	}

	.tags {
		display: flex;
		flex-direction: row;
		margin-top: 8px;
		margin-bottom: 8px;
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
