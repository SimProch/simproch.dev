<script lang="ts">
	type AvailableIcons =
		| 'angular'
		| 'aws'
		| 'circleci'
		| 'cucumber'
		| 'dot-net'
		| 'expressjs'
		| 'git'
		| 'github'
		| 'github-white'
		| 'jest'
		| 'jira'
		| 'microsoft-azure'
		| 'ms-sql'
		| 'mysql'
		| 'nestjs'
		| 'nodejs'
		| 'notion'
		| 'reactjs'
		| 'sass'
		| 'svelte'
		| 'typescript'
		| 'icon-close'
		| 'icon-menu'
		| 'icon-external-window'
		| 'linkedin-white.ico'
		| 'stack-overflow.ico'
		| 'twitter.ico';

	export let type: 'large' | 'small' | 'mini' = 'small';
	export let name: AvailableIcons;
	export let linkTo: string | undefined = undefined;
</script>


	{#if linkTo}
		<a href={linkTo} target="_blank">
			<img
				src={`/images/icons/${name.includes('.') ? name : `${name}.svg`}`}
				class={type}
				alt={`${name} logo`}
			/>
		</a>
	{:else}
		<img src={`/images/icons/${name}.svg`} class={type} alt={`${name} logo`} />
	{/if}


<style lang="scss">
	.large {
		width: 36px;
		height: 36px;
	}

	.small {
		width: 24px;
		height: 24px;
	}

	.mini {
		width: 16px;
		height: 16px;
	}

	a {
		line-height: 0;
		padding: 4px;

		img {
			opacity: 0.5;
		}

		&:hover,
		&:focus {
			img {
				opacity: 1;
			}
		}
	}
</style>
