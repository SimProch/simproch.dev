<script lang="ts">
	import { goto } from '$app/navigation';

	const inputs = [
		'Datum narození (DD.MM.YYYY)',
		'Jméno za svobodna',
		'Počet dětí',
		'Počet vyhraných zápasů'
	];

	const submit = () => {
		goto('/birthday-boy-2');
	};
</script>

<div class="page">
	<div style="font-size: 1rem; font-weight: 600">Co víte o oslavenci?</div>

	<a href="https://en.mapy.cz/s/kezorasoru">
		<img src="/images/prvni.png" alt="First location" class="header-bar__logo-wrapper__logo" />
	</a>

	<p>Doražte na první stanoviště (QR kód) a zodpovězte následující otázky</p>

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
