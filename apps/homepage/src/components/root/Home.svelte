<script lang="ts">
	import Contents from '../../contents/contents.json';
	import TitleBlock from '../utils/TitleBlock.svelte';
	const data = Contents.main;
</script>

<TitleBlock {data} id={'home'} />
