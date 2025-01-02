<script lang="ts">
	import { Footer } from '@simproch-dev/ui';
	import Header from 'src/components/core/Header.svelte';

	const timeoutInMs = 1000 * 60;
	let isVisible = false;
	let timeoutRef = setTimeout(() => (isVisible = true), timeoutInMs);

	const mouseMove = () => {
		isVisible = false;
		clearTimeout(timeoutRef);
		timeoutRef = setTimeout(() => (isVisible = true), timeoutInMs);
	};
</script>

<div class="root" on:scroll={mouseMove}>
	<Header />
	<slot />
	<Footer />
</div>
<div class="screen-saver" class:visible={isVisible}>
	<img src="/images/angry-simon.gif" alt="SimProch logo" />
</div>

<svelte:body
	on:mousemove={mouseMove}
	on:wheel={mouseMove}
	on:mousedown={mouseMove}
	on:touchstart={mouseMove}
	on:keydown={mouseMove}
/>

<style lang="scss">
	@import '../variables.scss';

	:global(h1),
	:global(h2),
	:global(h3),
	:global(h4),
	:global(h5),
	:global(h6),
	:global(p),
	:global(ul),
	:global(table),
	:global(footer),
	:global(header) {
		font-family: $font-family;
		position: relative;
	}

	.root {
		background-color: #fff;
		min-height: 100vh;
		color: $text-color;
		display: flex;
		flex-direction: column;
	}

	:global(*) {
		box-sizing: border-box;
		outline: none;
		line-height: 1.5;
		margin: 0;
		padding: 0;
	}

	:global(ul) {
		list-style-type: disc;
		font-weight: $text-font-weight;
		font-size: $text-font-size;
		line-height: $text-line-height;
		margin-left: 20px;
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

	:global(h4) {
		font-size: $sub-sub-subheading-font-size;
		font-weight: $sub-subheading-font-weight;
		font-family: $font-family;
		line-height: $sub-subheading-line-height;
		color: $sub-subheading-color;
		padding-top: 1rem;

		@media (max-width: 780px) {
			font-size: $sub-sub-subheading-font-size-mobile;
			align-self: flex-start;
		}
	}

	:global(h2 > a),
	:global(h1 > a),
	:global(h3 > a),
	:global(h4 > a),
	:global(h5 > a) {
		color: inherit;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
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

	:global(td) {
		font-family: $font-family;
		font-weight: $text-font-weight;
		font-size: $text-font-size;
		line-height: $text-line-height;
		color: $text-color;
	}

	:global(th) {
		font-family: $font-family;
		font-weight: $heading-font-weight;
		font-size: $text-font-size;
		line-height: $text-line-height;
		color: $text-color;
	}

	:global(main) {
		display: flex;
		flex-direction: column;
	}

	:global(blockquote) {
		background-color: rgba(220, 220, 220, 0.7);
		border-left: 8px solid rgba(41, 41, 41, 0.2);
		padding: 12px 16px;
		margin-top: 12px;
		quotes: none;
		width: 100%;
	}

	:global(blockquote p) {
		color: rgba(41, 41, 41, 0.9);
	}

	:global(.base-width) {
		width: 40%;

		@media (max-width: 1000px) {
			width: 80%;
		}
	}

	:global(.image) {
		width: 100%;
		position: relative;
		max-width: 80%;
		margin-left: 10%;
		margin-top: 16px;
		margin-bottom: 16px;
	}

	:global(table) {
		border: 1px solid #e9e9e9;
		border-bottom: none;
		width: 80%;
		margin-left: 10%;
		border-spacing: 0;
		margin-top: 16px;
		margin-bottom: 16px;
	}

	:global(thead tr) {
		background-color: #f5f5f5;
		border-bottom: 1px solid #e9e9e9;
	}

	:global(tbody tr) {
		background-color: rgba(255, 255, 255, 1);
	}

	:global(tbody tr:nth-of-type(even)) {
		background-color: #f5f5f5;
	}

	:global(td),
	:global(th) {
		border-right: 1px solid #e9e9e9;
		border-bottom: 1px solid #e9e9e9;
		text-align: left;
		padding: 4px 12px;
	}

	:global(a) {
		color: blue;
	}

	:global(h2 > span),
	:global(h1 > span),
	:global(h3 > span),
	:global(h4 > span) {
		position: absolute;
		width: 1px;
		height: 1px;
		top: -5rem;
	}

	.screen-saver {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: transparent;
		z-index: 1000;
		display: none;

		&.visible {
			display: block !important;
		}

		img {
			$size: 100px;
			width: $size;
			height: $size;
			position: absolute;
			top: calc(50% - $size / 2);
			left: calc(50% - $size / 2);
			animation: easterEgg 20s linear infinite;

			@keyframes easterEgg {
				0% {
					width: $size;
					height: $size;
					width: $size;
					width: $size;
					top: calc(50% - $size / 2);
					left: calc(50% - $size / 2);
					opacity: 0.4;
				}

				50% {
					$midSize: $size + $size + $size + $size + $size;

					width: $midSize;
					height: $midSize;
					width: $midSize;
					width: $midSize;
					top: calc(50% - $midSize / 2);
					left: calc(50% - $midSize / 2);
					opacity: 0.8;
				}

				100% {
					width: $size;
					height: $size;
					width: $size;
					width: $size;
					top: calc(50% - $size / 2);
					left: calc(50% - $size / 2);
					opacity: 0.4;
				}
			}
		}
	}
</style>
