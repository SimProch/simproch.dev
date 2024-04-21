<script lang="ts">
	let innerDiv: HTMLDivElement | undefined;

	const onMouseMove = (e: { clientX: number; clientY: number }) => {
		if (!innerDiv) {
			return;
		}
		const boundaries = innerDiv.getBoundingClientRect();
		const x = e.clientX - boundaries.left;
		const y = e.clientY - boundaries.top;
		innerDiv.setAttribute('style', `clip-path: circle(50px at ${x}px ${y}px); z-index:5`);
	};
</script>

<svelte:window on:mousemove={(e) => onMouseMove(e)} />

<div class="wrapper">
	<div class="outer">
		<div>
			<div>Hey</div>
			<div>Hi</div>
		</div>
		<div>
			<div>Hello</div>
			<div>Hola</div>
		</div>
	</div>
	<div class="inner" bind:this={innerDiv}>
		<div>
			<div>Well</div>
			<div>This</div>
		</div>
		<div>
			<div>Is</div>
			<div>New</div>
		</div>
	</div>
</div>

<style lang="scss">
	.wrapper {
		width: 100%;
		height: 400px;
		position: relative;

		.inner,
		.outer {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			width: 100%;
			height: 400px;

			display: flex;
			flex-direction: column;

			div {
				display: flex;
				flex-direction: row;
				flex: 1;

				div {
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 30px;
					width: 100%;
					height: 100%;
				}
			}
		}

		.inner {
			background-color: black;
			color: white;
		}
	}
</style>
