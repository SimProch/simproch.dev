<section>
	<div class="base-width">
		<slot />
	</div>
</section>

<style lang="scss">
	@import '../../variables.scss';
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 32px;
		padding-bottom: 32px;
	}
</style>
