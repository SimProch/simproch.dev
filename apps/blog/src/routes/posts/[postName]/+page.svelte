<script lang="ts">
	import Body from 'src/components/core/Body.svelte';
	import type { Post } from 'src/contents/posts/types';
	import Meta from '../../../components/core/Meta.svelte';

	export let data: { component: ConstructorOfATypedSvelteComponent };

	let component: ConstructorOfATypedSvelteComponent;
	let contents: Post | undefined = undefined;

	$: {
		component = data.component;
	}
</script>

{#if contents}
	<Meta
		title={contents.title}
		keywords={contents.tags.join(', ')}
		description={contents.description}
	/>
{/if}

<Body>
	<svelte:component this={component} bind:contents />
</Body>
