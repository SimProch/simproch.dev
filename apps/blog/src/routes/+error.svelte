<script>
	import { page } from '$app/state';
</script>

<h2>An error occured</h2>
<p>
	{JSON.stringify(page.error)}
</p>
