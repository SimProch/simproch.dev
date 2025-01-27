<script lang="ts">
  let innerDiv: HTMLDivElement | undefined;

  const onMouseMove = (e: { clientX: number; clientY: number }) => {
    if (!innerDiv) {
      return;
    }
    const boundaries = innerDiv.getBoundingClientRect();
    const x = e.clientX - boundaries.left;
    const y = e.clientY - boundaries.top;
    innerDiv.setAttribute('style', `clip-path: circle(50px at ${x}px ${y}px)`);
  };
</script>

<svelte:window on:mousemove={(e) => onMouseMove(e)} />

<div class="wrapper">
  <div class="outer">
    <img src="/images/hand-flesh.jpeg" alt="img1" />
  </div>
  <div class="inner" bind:this={innerDiv} style="clip-path:circle(0)">
    <img src="/images/hand-bone.jpeg" alt="img2" />
  </div>
</div>

<style lang="scss">
  .wrapper {
    width: 100%;
    height: 400px;
    position: relative;

    @media (max-width: 780px) {
      height: 250px;
    }

    div {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: block;
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
