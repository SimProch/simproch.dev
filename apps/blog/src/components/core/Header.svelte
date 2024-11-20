<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	let logo = '/images/logo.png';

	const onLogoClick = (event: PointerEvent | KeyboardEvent | any) => {
		event.preventDefault();
		if (event instanceof KeyboardEvent && event.key !== 'Enter') {
			return;
		}

		if ($page.route.id !== '/') {
			goto('/');
			return;
		}

		logo = logo === '/images/logo.png' ? '/images/angry-simon.gif' : '/images/logo.png';
		return;
	};
</script>

<header>
	<div class="header-bar">
		<div class="header-bar__logo-wrapper">
			<a href="/" on:click={onLogoClick} on:keyup={onLogoClick}>
				<img src={logo} class="header-bar__logo-wrapper__logo" alt="SimProch logo" />
			</a>
			<a href="/" class="header-bar__logo-wrapper__blog"> Blog </a>
		</div>
	</div>
</header>

<style lang="scss">
	@import '../../variables.scss';

	header {
		height: 5rem;
		position: sticky;
		top: 0;
		background-color: white;
		border-bottom: 1px solid $background-color-secondary;
		z-index: 1;
		padding: 0 32px 0 24px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		font-family: $font-family;

		@media (max-width: 780px) {
			position: relative;
		}
	}

	.header-bar {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		.header-bar__logo-wrapper {
			display: flex;
			flex-direction: row;
			align-items: center;
			.header-bar__logo-wrapper__logo {
				width: 50px;
				height: 50px;
			}

			.header-bar__logo-wrapper__blog {
				display: block;
				margin-left: 2rem;
				text-decoration: none;
				color: $menu-color;
				opacity: $menu-opacity;
				font-weight: $menu-font-weight;
				font-size: $menu-font-size;
				display: flex;
				flex-direction: row;
				cursor: pointer;
			}
		}
	}
</style>
