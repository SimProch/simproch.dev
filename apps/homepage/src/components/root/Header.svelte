<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import DynamicIcon from '../utils/DynamicIcon.svelte';
	const nav: Array<{ path: string; name: string }> = [
		{ path: 'home', name: 'Home' },
		{ path: 'about', name: 'About' },
		{ path: 'experience', name: 'Experience' },
		{ path: 'https://blog.simproch.dev/', name: 'Blog' }
	];

	let isMenuVisible = false;
	let visibleElement = 'home';
	let header: HTMLElement;
	let lastHighlightedPart: string = 'home';

	const toggleMenu = (event: MouseEvent | KeyboardEvent) => {
		event.preventDefault();
		if (event instanceof KeyboardEvent) {
			if (event.key === 'Enter') {
				isMenuVisible = !isMenuVisible;
			}
			return false;
		}
		isMenuVisible = !isMenuVisible;
		return false;
	};

	const getHref = (id: string) => {
		if (id === 'home') return './';
		if (id.startsWith('https')) return id;
		return `./#${id}`;
	};

	const scrollTo = (event: MouseEvent | KeyboardEvent, id: string) => {
		event.preventDefault();
		if (id.startsWith('http')) {
			window.open(id, '_blank');
			return false;
		}
		const selector = `#${id}`;
		const item = document.querySelector(selector) as HTMLElement | null;

		if (event instanceof KeyboardEvent && event.key === 'Enter') {
			return false;
		}

		isMenuVisible = !isMenuVisible;
		if (!item) {
			goto(`${$page.url.origin}/${selector}`);
			return false;
		}

		let top = item.getBoundingClientRect().top + window.scrollY;
		if (window.innerWidth > 780) {
			top -= header.offsetHeight;
		}

		window.scrollTo({
			top,
			behavior: 'smooth'
		});
		window.history.replaceState({}, '', selector);
		return false;
	};

	const onScroll = (e: Event) => {
		const html = (e.target as Document).children[0] as HTMLHtmlElement;
		const parts = nav
			.slice(0, -1)
			.map((i) => document.querySelector(`#${i.path}`) as HTMLElement | null);
		if (parts.includes(null)) {
			visibleElement = nav[2].path;
			return;
		}
		let highlightedPart = parts
			.reverse()
			.find((i) => i!.getBoundingClientRect().top + window.scrollY <= header.offsetTop);
		if (highlightedPart == null) highlightedPart = parts[parts.length - 1];
		visibleElement = highlightedPart!.id;
		if (highlightedPart!.id !== lastHighlightedPart) {
			lastHighlightedPart = highlightedPart!.id;
			window.history.replaceState({}, '', `#${highlightedPart?.id}`);
		}
	};
</script>

<header class="flex-col" bind:this={header}>
	<div class="header-bar">
		<div class="header-bar__logo-wrapper">
			<a href="/">
				<img src="/images/logo.png" alt="SimProch logo" class="header-bar__logo-wrapper__logo" />
			</a>
		</div>

		<nav class="header-bar__navigation">
			<div class="header-bar__navigation__routes header-bar__navigation__routes--desktop">
				{#each nav as route, index}
					<a
						href={getHref(route.path)}
						class="header-bar__navigation__routes__route"
						tabindex="0"
						class:header-bar__navigation__routes__route--active={route.path === visibleElement}
						on:click={(e) => scrollTo(e, route.path)}
					>
						<span>
							{route.name}
							{#if route.name === 'Blog'}
								<DynamicIcon name="icon-external-window" type="mini" />
							{/if}
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
					on:click={(e) => toggleMenu(e)}
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
						{#each nav as route, index}
							<li>
								<a
									href={getHref(route.path)}
									class="header-bar__navigation__routes__route"
									tabindex="0"
									class:header-bar__navigation__routes__route--active={route.path ===
										visibleElement}
									on:click={(e) => scrollTo(e, route.path)}
								>
									<span>
										{route.name}
										{#if route.name === 'Blog'}
											<DynamicIcon name="icon-external-window" type="mini" />
										{/if}
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

<svelte:window on:scroll={onScroll} />

<style lang="scss">
	@import '../../variables.scss';

	header {
		position: sticky;
		top: 0;
		background-color: white;
		border-bottom: 1px solid rgb(240, 240, 240);
		z-index: 1;
		height: 5rem;
		justify-content: center;
		padding: 0 32px 0 24px;

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
			.header-bar__logo-wrapper__logo {
				width: 50px;
				height: 50px;
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
