<script lang="ts">
	export let name: string;
	export let linkTo: string;
</script>

<a href={linkTo} class="button">
	{name}
</a>

<style lang="scss">
	@import '../../variables.scss';

	.button {
		position: relative;
		display: flex;
		align-items: center;
		margin-top: 4px;
		margin-right: 12px;
		padding: 4px 10px;
		text-align: center;
		letter-spacing: 1px;
		text-decoration: none;
		color: $button-color;
		background: $button-background;
		border: $button-border-size solid $button-background;
		cursor: pointer;
		transition: ease-out 0.5s;
		-webkit-transition: ease-out 0.5s;
		-moz-transition: ease-out 0.5s;

		&::after,
		&::before {
			position: absolute;
			content: '';
			width: 0;
			height: 0;
			transition: 0.5s;
		}

		&::after {
			top: -$button-border-size;
			left: -$button-border-size;
			border-top: $button-border-size solid transparent;
			border-left: $button-border-size solid transparent;
		}

		&::before {
			bottom: -$button-border-size;
			right: -$button-border-size;
			border-bottom: $button-border-size solid transparent;
			border-right: $button-border-size solid transparent;
		}

		&:hover, &:focus {
			color: $button-hover-color;

			&::after,
			&::before {
				width: calc(100% + $button-border-size);
				height: calc(100% + $button-border-size);
				border-color: $button-hover-color;
			}
		}
	}
</style>
