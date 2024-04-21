<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { DynamicIcon } from '@simproch-dev/ui';
	import type { CategoryId } from 'src/contents/base';
	import { nav } from 'src/contents/contents';

	let active = $page.params.category as CategoryId;
	let isMenuVisible = false;
	let logo = '/images/logo.png';

	const toggleMenu = (event: PointerEvent | KeyboardEvent | any) => {
		event.preventDefault();
		if (event instanceof KeyboardEvent && event.key !== 'Enter') {
			return false;
		}
		isMenuVisible = !isMenuVisible;
		return false;
	};

	const onNavigate = (event: PointerEvent | KeyboardEvent | any, id: string) => {
		event.preventDefault();
		const where = `/${id}`;
		if (event instanceof KeyboardEvent && event.key !== 'Enter') {
			return;
		}
		isMenuVisible = !isMenuVisible;
		goto(where);

		return false;
	};

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

	$: {
		active = $page.params.category as CategoryId;
	}
</script>

<header>
	<div class="header-bar">
		<div class="header-bar__logo-wrapper">
			<a href="/" on:click={onLogoClick} on:keyup={onLogoClick}>
				<img src={logo} class="header-bar__logo-wrapper__logo" alt="SimProch logo" />
			</a>
			<a href="/" class="header-bar__logo-wrapper__blog"> Blog </a>
		</div>
		<nav class="header-bar__navigation">
			<div class="header-bar__navigation__routes header-bar__navigation__routes--desktop">
				{#each nav as route (route.path)}
					<a
						href={`/${route.path}`}
						class="header-bar__navigation__routes__route"
						class:header-bar__navigation__routes__route--active={active == route.path}
						tabindex="0"
						on:keyup={(e) => onNavigate(e, route.path)}
						on:click={(e) => onNavigate(e, route.path)}
					>
						<span>
							{route.name}
						</span>
					</a>
				{/each}
			</div>
			<div class="header-bar__navigation__routes header-bar__navigation__routes--mobile">
				<div
					class="header-bar__navigation__routes__hamburger"
					role="link"
					tabindex="0"
					on:keyup={toggleMenu}
					on:click={toggleMenu}
					class:header-bar__navigation__routes__hamburger--visible={!isMenuVisible}
				>
					<DynamicIcon name="icon-menu" />
				</div>
				<div
					class="header-bar__navigation__routes__close"
					role="link"
					tabindex="0"
					on:keyup={toggleMenu}
					on:click={toggleMenu}
					class:header-bar__navigation__routes__close--visible={isMenuVisible}
				>
					<DynamicIcon name="icon-close" type="large" />
				</div>
				<div
					class="header-bar__navigation__routes__list"
					class:header-bar__navigation__routes__list--visible={isMenuVisible}
				>
					<ul>
						{#each nav as route (route.path)}
							<li>
								<a
									href={`./${route.path}`}
									tabindex="0"
									class="header-bar__navigation__routes__route"
									class:header-bar__navigation__routes__route--active={active == route.path}
									on:keyup={(e) => onNavigate(e, route.path)}
									on:click={(e) => onNavigate(e, route.path)}
								>
									<span>
										{route.name}
									</span>
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</nav>
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

		ul {
			list-style-type: none;
			margin-left: 0;
		}

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

		.header-bar__navigation {
			display: flex;
			justify-content: space-between;
			align-items: center;

			@media (max-width: 780px) {
				width: 36px;
				height: 36px;
				justify-content: center;
				align-items: center;
			}

			.header-bar__navigation__routes {
				display: flex;
				flex-direction: row;
				&.header-bar__navigation__routes--desktop {
					@media (max-width: 780px) {
						display: none;
					}

					.header-bar__navigation__routes__route {
						margin-left: 2rem;
						text-decoration: none;
						color: $menu-color;
						opacity: $menu-opacity;
						font-weight: $menu-font-weight;
						font-size: $menu-font-size;
						display: flex;
						flex-direction: row;
						cursor: pointer;

						&.header-bar__navigation__routes__route--active {
							opacity: $menu-active-opacity;

							&:hover,
							&:focus {
								opacity: $menu-active-hover-opacity;
							}
						}

						span {
							display: flex;
						}

						&:hover,
						&:focus {
							opacity: $menu-hover-opacity;
						}

						&:first-child {
							margin-left: 0px;
						}
					}
				}

				&.header-bar__navigation__routes--mobile {
					display: none;

					@media (max-width: 780px) {
						display: flex;

						.header-bar__navigation__routes__hamburger,
						.header-bar__navigation__routes__close {
							display: none;
							cursor: pointer;
						}

						.header-bar__navigation__routes__hamburger.header-bar__navigation__routes__hamburger--visible,
						.header-bar__navigation__routes__close.header-bar__navigation__routes__close--visible {
							display: flex;
						}

						.header-bar__navigation__routes__list {
							position: absolute;
							display: none;
							top: 5rem;
							left: 0;
							width: 100vw;
							background-color: #fff;

							&.header-bar__navigation__routes__list--visible {
								display: block;
							}

							ul {
								display: flex;
								flex-direction: column;

								li {
									width: 100%;
									cursor: pointer;
									border-bottom: 1px solid #ccc;

									&:hover,
									&:focus {
										a {
											opacity: 0.65;
										}
									}

									a {
										color: #000;
										opacity: 0.45;
										padding: 8px 20px;
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
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
</style>
