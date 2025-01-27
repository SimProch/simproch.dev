<script lang="ts">
	import { page } from '$app/stores';
	import type { Category, CategoryId } from 'src/contents/base';
	import { Contents } from 'src/contents/contents';

	let contents: Category;

	$: {
		contents = Contents[$page.params.category as CategoryId];
	}
</script>

<nav class="category">
	<ul>
		{#each contents.posts as post}
			<li>
				<a href={`/${$page.params.category}/${post.id}`}>
					<span class="order">{post.order}:</span>
					<span class="title">
						{post.title}
					</span>
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	@import '../../variables.scss';

	.category {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 32px;
		padding-bottom: 32px;
		margin-left: 15vw;
		margin-right: 15vw;

		@media (max-width: 780px) {
			margin-left: 5vw;
			margin-right: 5vw;
		}

		ul {
			list-style-type: none;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin:0;

			li {
				width: 100%;
				cursor: pointer;

				&:hover,
				&:focus {
					a {
						opacity: 0.65;
					}
				}

				a {
					color: #000;
					opacity: 0.45;
					padding: 4px 12px;
					font-weight: $menu-font-weight;
					line-height: 1.5;
					font-size: 1.3rem;
					text-decoration: none;
					display: block;
					width: 100%;
					display: flex;
					flex-direction: row;

					span {
						display: flex;

						&.order {
							width: 50px;
						}
					}
				}
			}
		}
	}
</style>
