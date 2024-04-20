<script lang="ts">
	import Contents from '../../contents/contents.json';
	import TitleBlock from '../../components/utils/TitleBlock.svelte';
	import Detail from '../../components/utils/Detail.svelte';
	const data = Contents.GFA;
</script>

<TitleBlock {data} id="experience" />
<Detail data={data.detail}/>
