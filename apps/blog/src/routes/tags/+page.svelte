<script lang="ts">
	import { tags } from 'src/contents/contents';
	import Body from 'src/components/core/Body.svelte';
	import LinkButton from 'src/components/buttons/LinkButton.svelte';
	import Meta from 'src/components/core/Meta.svelte';
</script>

<Meta
	title="Tags | Simon Prochazka | Developer"
	keywords={`tags, blog, simon, prochazka, ${tags.join(', ')}`}
	description="All posts filterable by tags"
/>

<main>
	<Body>
		<div class="tags">
			{#each tags as tag (tag)}
				<LinkButton name={tag} linkTo={`/tags/${tag}`} />
			{/each}
		</div>
	</Body>
</main>

<style lang="scss">
	.tags {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
</style>
