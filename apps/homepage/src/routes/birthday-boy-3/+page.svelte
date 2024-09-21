<script lang="ts">
	import { goto } from '$app/navigation';

	const submit = () => {
		goto('/birthday-boy-4');
	};
</script>

<div class="page">
	<div style="font-size: 1rem; font-weight: 600">Hledání pokladu</div>

	<a href="https://en.mapy.cz/s/rebomasola">
		<img src="/images/treti.png" alt="First location" class="header-bar__logo-wrapper__logo" />
	</a>
	<p>
		Pro dokončení bojovky nalezněte poklad umístěný na třetím stanovišti (viz QR kód) a využijte
		jeho potenciál.
	</p>

	<div class="button-row">
		<button on:click={submit}>Máme hotovo</button>
	</div>
</div>

<style lang="scss">
	.page {
		padding-top: 16px;
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
