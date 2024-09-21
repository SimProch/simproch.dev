<script lang="ts">
	import { goto } from '$app/navigation';

	const inputs = ['20 dřepů', '10 kliků'];

	const submit = () => {
		goto('/birthday-boy-3');
	};
</script>

<div class="page">
	<div style="font-size: 1rem; font-weight: 600">Fyzická zdatnost</div>

	<a href="https://en.mapy.cz/s/cenuruhevo">
		<img src="/images/druhy.png" alt="First location" class="header-bar__logo-wrapper__logo" />
	</a>

	<p>Doražte na druhé stanoviště (QR kód) a provedťe následující úkony</p>

	<div class="form">
		<ul>
			{#each inputs as input}
				<li>
					{input}
				</li>
			{/each}
		</ul>
	</div>
	<div class="button-row">
		<button on:click={submit}>Máme hotovo</button>
	</div>
</div>

<style lang="scss">
	.page {
		padding-top: 16px;
		padding-bottom: 16px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.button-row {
		margin-top: 32px;
	}
	button {
		cursor: pointer;
		background-color: #e7e7e7;
		color: black;
		border: none;
		padding: 8px 16px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		border-radius: 8px;
		&:focus,
		&:visited,
		&:hover {
			opacity: 0.6;
		}
	}
</style>
