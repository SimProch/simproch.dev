<script lang="ts">
	import { Contents } from 'src/contents/contents';
	import DynamicIcon from './DynamicIcon.svelte';
	const data = Contents.footer;
</script>

<footer>
	<div class="about">
		<div class="about__me">
			<span class="about__me__title">{data.title}</span>
			<span class="about__me__description">{data.subtitle}</span>
		</div>
		<div class="about__socials">
			<span class="about__socials__title">
				Let's connect through <a href="mailto:simon@simproch.dev">e&#x2011;mail</a> or social media:
			</span>
			<div class="about__socials__icons">
				{#each data.socials as social}
					<DynamicIcon name={social.name} linkTo={social.linkTo} />
				{/each}
			</div>
		</div>
	</div>
	<div class="footer-divider" />
	<span class="copyright">
		&copy; Copyright {new Date().getFullYear()}. Made by
		<a href="https://simproch.dev/" target="_blank">Simon Prochazka</a> with
		<a href="https://github.com/pngwn/MDsveX" target="blank">MDsveX</a>. Logo by
		<a href="https://www.hadraba.com/" target="_blank">Adam Hadraba</a>.
	</span>
</footer>

<style lang="scss">
	footer {
		background-color: #111;
		color: white;
		padding: 60px 60px 20px 60px;
		justify-content: center;
		display: flex;
		flex-direction: column;
		margin-top: auto;
	}

	.about {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		gap: 12px;

		@media (max-width: 1120px) {
			flex-direction: column;
			gap: 60px;
		}

		.about__me {
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.about__me__title {
				font-size: 1.5rem;
			}

			.about__me__description {
				font-size: 1.1rem;
				color: rgba(255, 255, 255, 0.6);
			}
		}

		.about__socials {
			font-size: 1.5rem;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-end;

			.about__socials__icons {
				display: flex;
				flex-direction: row;
				padding-top: 10px;
				gap: 20px;
			}
			@media (max-width: 1120px) {
				align-items: flex-start;
			}
		}
	}

	a {
		color: #fff;
		&:hover {
			text-decoration: none;
		}

		&:focus {
			text-decoration: none;
			opacity: 0.5;
		}
	}

	.footer-divider {
		width: 100%;
		height: 4px;
		margin-top: 6rem;
	}

	.copyright {
		width: 100%;
		font-size: 16px;
	}
</style>
