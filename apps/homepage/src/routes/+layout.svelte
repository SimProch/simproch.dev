<script lang="ts">
	import { Footer } from '@simproch-dev/ui';
	import Header from '../components/root/Header.svelte';
	import { d } from '../contents/of-no-importance';

	d.forEach((i) => console.log(i));
</script>

<div class="site flex-col">
	<Header />
	<main class="flex-col">
		<slot />
	</main>
	<Footer />
</div>

<style lang="scss">
	@import '../variables.scss';

	.site {
		min-height: 100vh;
		scroll-behavior: smooth;
	}

	:global(*) {
		box-sizing: border-box;
		font-family: $font-family;
		line-height: 1.5;
		outline: none;
	}

	:global(h1, h2, h3, h4, h5, h6, p) {
		margin-block: 0;
	}

	:global(ul) {
		list-style-type: none;
		margin-block: 0;
		margin-inline: 0;
		padding-inline: 0;
	}

	:global(section) {
		padding-bottom: 10vh;
		padding-top: 10vh;
	}

	:global(h1) {
		font-size: $heading-font-size;
		font-family: $font-family;
		line-height: $heading-line-height;
		color: $heading-color;

		@media (max-width: 780px) {
			font-size: $heading-font-size-mobile;
			align-self: flex-start;
		}
	}

	:global(h2) {
		font-size: $subheading-font-size;
		font-weight: $subheading-font-weight;
		font-family: $font-family;
		line-height: $subheading-line-height;
		color: $subheading-color;
		padding-top: 1rem;

		@media (max-width: 780px) {
			font-size: $subheading-font-size-mobile;
			align-self: flex-start;
		}
	}

	:global(h3) {
		font-size: $sub-subheading-font-size;
		font-weight: $sub-subheading-font-weight;
		font-family: $font-family;
		line-height: $sub-subheading-line-height;
		color: $sub-subheading-color;
		padding-top: 1rem;

		@media (max-width: 780px) {
			font-size: $sub-subheading-font-size-mobile;
			align-self: flex-start;
		}
	}

	:global(p) {
		font-family: $font-family;
		font-weight: $text-font-weight;
		font-size: $text-font-size;
		line-height: $text-line-height;
		color: $text-color;
		margin-top: 16px;
		margin-bottom: 16px;
	}

	:global(.divider) {
		height: 8px;
		width: 30px;
		border-radius: 8px;
		background-color: #888;
		align-self: center;
		justify-self: center;
		margin: 4px 0;
	}

	:global(.flex-row) {
		display: flex;
		flex-direction: row;

		@media (max-width: 1000px) {
			flex-direction: column;
		}
	}

	:global(.flex-col) {
		display: flex;
		flex-direction: column;
	}

	:global(.flex-col.flex-col--center) {
		align-items: center;
	}

	:global(.base-width) {
		width: 50%;

		@media (max-width: 1000px) {
			width: 80%;
		}
	}

	:global(.base-width.base-width--wider) {
		width: 60%;

		@media (max-width: 1000px) {
			width: 80%;
		}
	}
</style>
