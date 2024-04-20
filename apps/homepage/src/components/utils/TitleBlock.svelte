<script lang="ts">
	import MouseIndicator from '../MouseIndicator.svelte';

	export let data: { title: string; subtitle: string; breadcrumbs?: string | undefined };
	export let id: 'home' | 'experience' = 'home';
</script>

<section class="home flex-col flex-col--center" {id}>
	<div class="wrapper flex-col flex-col--center">
		<div class="home__title flex-col flex-col--center">
			{#if data.breadcrumbs}
				<h3>{data.breadcrumbs}</h3>
			{/if}
			<h1>{data.title}</h1>
			<p>{data.subtitle}</p>
		</div>
		<div class="home__mouse">
			<MouseIndicator />
		</div>
	</div>
</section>

<style lang="scss">
	p {
		font-size: 2rem;
		line-height: 1.2;
	}

	h3 {
		opacity: 0.5;
		margin-bottom: 10px;
	}
	.home {
		background-color: #fff;
		min-height: 50vh;
		padding: 5vh 0;

		.wrapper {
			flex-grow: 1;
			width: 80%;

			.home__title {
				margin-top: auto;
				margin-bottom: auto;
			}

			.home__mouse {
				margin-top: auto;
				margin-bottom: 2rem;

				@media (max-width: 1080px) {
					display: none;
				}
			}
		}
	}
</style>
