<script lang="ts">
	import Body from 'src/components/core/Body.svelte';
	import Meta from '../../../components/core/Meta.svelte';
	import type { Post } from 'src/posts/_types';

	export let data: { component: ConstructorOfATypedSvelteComponent };

	let component: ConstructorOfATypedSvelteComponent;
	let post: Post | undefined = undefined;

	$: {
		component = data.component;
	}
</script>

{#if post}
	<Meta title={post.title} keywords={post.tags.join(', ')} description={post.description} />
{/if}

<Body>
	<svelte:component this={component} bind:contents={post} />
</Body>
