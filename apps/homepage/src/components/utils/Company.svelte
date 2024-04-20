<script lang="ts">
	import LinkButton from './LinkButton.svelte';
	export let imagePath: string;
	export let title: string;
	export let content: string;
</script>


	<div class="experience flex-col">
		<div class="experience__company flex-row flex-row--center">
			<img src={`/images/company-logos/${imagePath}.png`} alt={`${title} logo`} />
			<p class="experience__company__description">{content}</p>
		</div>
		<div class="experience__know-more">
			<div class="experience__know-more__empty"></div>
			<div class="experience__know-more__link">
				<LinkButton name="Know more" linkTo={imagePath} />
			</div>
		</div>
	</div>


<style lang="scss">
	$max-width: 1000px;
	img {
		max-width: 200px;
		object-fit: contain;

		@media (max-width: 780px) {
			margin-bottom: 16px;
		}

		@media (min-width: 780px) {
			flex: 1;
		}
	}

	.experience {
		width: 100%;
		height: 100%;
		justify-content: center;
		align-items: center;

		&__company {
			width: 100%;
			display: flex;
			flex-direction: row;
			gap: 3rem;
			align-items: center;

			@media (max-width: 780px) {
				flex-direction: column;
				gap: 0;
			}

			&__description {
				flex: 4;
			}
		}

		&__know-more {
			width: 100%;
			display: flex;
			flex-direction: row;
			align-items: flex-start;
			margin-top: 16px;
			gap: 3rem;

			&__empty {
				min-width: 200px;
				flex: 1;
				@media (max-width: 780px) {
					display: none;
				}
			}
			&__link {
				flex: 4;

				@media (max-width: 780px) {
					display: flex;
					justify-content: center;
				}
			}
		}
	}
</style>
