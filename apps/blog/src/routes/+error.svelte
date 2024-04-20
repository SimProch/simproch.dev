<script>
	import { page } from '$app/stores';
</script>

<h2>An error occured</h2>
<p>
	{JSON.stringify($page.error)}
</p>
