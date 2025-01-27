<script lang="ts">
	import { page } from '$app/stores';
	import type { Post } from 'src/contents/posts/types';
	import Meta from '../../../components/core/Meta.svelte';
	import { Contents } from 'src/contents/contents';
	import type { Category, CategoryId } from 'src/contents/base';

	export let data: { component: ConstructorOfATypedSvelteComponent };

	let component: ConstructorOfATypedSvelteComponent;
	let categoryId: CategoryId;
	let category: Category;
	let contents: Post | undefined;
	let previousId: string | undefined;
	let nextId: string | undefined;

	$: {
		component = data.component;
		categoryId = $page.params.category as CategoryId;
		const postName = $page.params.postName;
		category = Contents[categoryId];
		const postIndex = category.posts.findIndex((post) => post.id === postName);
		contents = category.posts[postIndex];
		if (postIndex === 0) {
			nextId = category.posts[1].id;
			previousId = undefined;
		} else if (postIndex === category.posts.length - 1) {
			nextId = undefined;
			previousId = category.posts[postIndex - 1].id;
		} else {
			nextId = category.posts[postIndex + 1].id;
			previousId = category.posts[postIndex - 1].id;
		}
	}
</script>

{#if contents}
	<Meta title={contents.title} description={contents.description} />
{/if}

<section>
	<div>
		<div class="breadcrumbs">
			<div class="breadcrumbs__item breadcrumbs__item--left">
				{#if previousId}
					<a href={`${previousId}`}>
						<div>&larr;</div>
					</a>
				{/if}
			</div>
			<div class="breadcrumbs__item breadcrumbs__item--center">
				<a href={`/${categoryId}`}>
					<div>{category.title}</div>
				</a>
			</div>
			<div class="breadcrumbs__item breadcrumbs__item--right">
				{#if nextId}
					<a href={`${nextId}`}>
						<div>&rarr;</div>
					</a>
				{/if}
			</div>
		</div>
		<div>
			<svelte:component this={component} />
		</div>

		<div class="breadcrumbs">
			<div class="breadcrumbs__item breadcrumbs__item--left">
				{#if previousId}
					<a href={`${previousId}`}>
						<div>&larr;</div>
					</a>
				{/if}
			</div>
			<div class="breadcrumbs__item breadcrumbs__item--center">
				<a href={`/${categoryId}`}>
					<div>{category.title}</div>
				</a>
			</div>
			<div class="breadcrumbs__item breadcrumbs__item--right">
				{#if nextId}
					<a href={`${nextId}`}>
						<div>&rarr;</div>
					</a>
				{/if}
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	@import '../../../variables.scss';

	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-top: 32px;
		padding-bottom: 32px;

		> div {
			max-width: 50vw;

			@media (max-width: 780px) {
				max-width: 70vw;
			}
		}
	}

	.breadcrumbs {
		width: 100%;
		display: flex;
		flex-direction: row;
		&:first-of-type {
			padding-top: $spacing * 4;
			padding-bottom: $spacing * 4;
		}
		&:last-of-type {
			padding-top: $spacing * 4;
		}

		.breadcrumbs__item {
			flex: 1;
			height: 3rem;

			&.breadcrumbs__item--left {
				align-self: flex-start;
			}

			&.breadcrumbs__item--center {
				align-self: center;
				text-align: center;
				flex: 8;
			}

			&.breadcrumbs__item--right {
				align-self: flex-end;
				text-align: right;
			}

			&:hover,
			&:focus {
				a {
					opacity: 0.65;
				}
			}

			a {
				display: flex;
				flex-direction: column;
				color: #000;
				opacity: 0.45;
				font-weight: $menu-font-weight;
				line-height: 1.5;
				font-size: 1.1rem;
				text-decoration: none;
				height: 100%;

				.breadcrumbs__list__navigation__right {
					align-self: flex-end;
					text-align: right;
				}
			}
		}
	}
</style>
