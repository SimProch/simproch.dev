<script lang="ts">
	import { goto } from '$app/navigation';
	const inputs = ['mlady', 'cizi', 'nas', 'druhy', 'prvni', 'laska'];
	const answers = ['5.1', '5.8', '12.9', '12.5', '23.12', '19.1'];
	let inputValues: Record<string, string> = {};
	let inputErrors: Record<string, boolean> = {};
	inputs.forEach((input) => {
		inputValues[input] = '';
		inputErrors[input] = false;
	});
	let help: Record<number, boolean> = { 1: false, 2: false, 3: false };
	let helpCounter = 0;
	const onInputChange = (e: HTMLInputElement, input: string) => {
		inputValues[input] = e.value;
	};
	const submit = () => {
		inputs.forEach((item, index) => {
			if (inputValues[item] !== answers[index]) {
				inputErrors[item] = true;
				return;
			}
			inputErrors[item] = false;
		});
		
		if (Object.values(inputErrors).every(i => !i)) {
			goto('/hidden-2')
		}
	};

	const toggleHelp = () => {
		helpCounter++;
		help[helpCounter] = true;
	};
</script>

<div class="page">
	<div style="font-size: 1rem; font-weight: 600">Zahradní trable</div>

	<p>Rodina v nesnázích! Abychom zachránili malého Tobiáše, musíme vyřešit hádanku!</p>

	<div class="button-help">
		<button on:click={toggleHelp}>Pomoc</button>
		<div class="help-item" class:visible={help[1]}>Proc jsme tu?</div>
		<div class="help-item" class:visible={help[2]}>Autor je treti</div>
		<div class="help-item" class:visible={help[3]}>Narozeniny</div>
	</div>
	<div class="form">
		{#each inputs as input}
			<div class="input">
				<!-- <label for={input}>{input.toUpperCase()}</label> -->
				<input
					type="text"
					name={input}
					value={inputValues[input]}
					class:input--error={inputErrors[input]}
					on:input={(e) => {
						onInputChange(e.currentTarget, input);
					}}
				/>
			</div>
		{/each}
	</div>
	<div class="button-row">
		<button on:click={submit}>Mame hotovo</button>
	</div>
</div>

<style lang="scss">
	.help-item {
		margin-top: 4px;
		opacity: 0;

		&.visible {
			opacity: 1;
		}
	}

	.page {
		padding-top: 16px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.form {
		padding-top: 12px;
		display: flex;
		height: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.input {
		display: flex;
		width: 100%;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 8px;

		input {
			margin-left: 12px;
			border-radius: 4px;
			border: 1px solid #ccc;
		}

		.input--error {
			border-color: red;
		}
	}

	.button-row {
		margin-top: 32px;
	}

	.button-help {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 12px;
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
