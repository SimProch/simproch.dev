<div class="mouse">
	<span class="mouse__wheel"></span>
</div>

<style lang="scss">
	.mouse {
		width: 25px;
		height: 45px;
		border: 2px solid black;
		border-radius: 15px;
		position: relative;
		text-align: center;

		.mouse__wheel {
			height: 8px;
			margin: 2px auto 0;
			display: block;
			width: 4px;
			background-color: black;
			border-radius: 50%;
			animation: 2s ease infinite wheel-up-down;
		}
	}

	@keyframes wheel-up-down {
		0% {
			margin-top: 6px;
			opacity: 0;
		}
		30% {
			opacity: 1;
		}
		50% {
			margin-top: 14px;
			opacity: 0;
		}
		100% {
			margin-top: 14px;
			opacity: 0;
		}
	}
</style>
