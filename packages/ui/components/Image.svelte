<script lang="ts">
	export let path: string;
	export let alt = '';
	export let width = '50%';

	const toReadable = (value: string) =>
		value
			.split('/')
			.pop()
			?.replace(/\.[^/.]+$/, '')
			.replace(/[-_]/g, ' ') ?? 'image';

	$: imageAlt = alt || toReadable(path);
</script>

<div class="image-wrapper">
	<img src={path} alt={imageAlt} style={`width: ${width};`} loading="lazy" />
</div>

<style lang="scss">
	.image-wrapper {
		display: flex;
		justify-content: center;
		margin: 16px 0;
	}

	img {
		display: block;
		max-width: 100%;
		height: auto;
	}

	@media (max-width: 780px) {
		img {
			width: 100% !important;
		}
	}
</style>
