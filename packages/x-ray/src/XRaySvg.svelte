<script lang="ts">
  import { onMount } from 'svelte';

  let svgElement: SVGSVGElement;
  let maskedElement: SVGCircleElement;
  let circleFeedback: SVGCircleElement;
  let svgPoint: DOMPoint;
  let div: HTMLDivElement;

  onMount(() => {
    div = document.querySelector('#hand-flesh-wrapper');
    svgElement = document.querySelector('svg')!;
    maskedElement = document.querySelector('#mask-circle')!;
    circleFeedback = document.querySelector('#circle-shadow')!;
    svgPoint = svgElement.createSVGPoint();

    document.addEventListener(
      'touchmove',
      function (e) {
        e.preventDefault();
        const touch = e.targetTouches[0];
        if (touch) {
          update(cursorPoint(touch, svgElement));
        }
      },
      false
    );
  });

  function cursorPoint(e: { clientX: number; clientY: number }, svg: SVGGraphicsElement) {
    svgPoint.x = e.clientX;
    svgPoint.y = e.clientY;
    return svgPoint.matrixTransform(svg.getScreenCTM()?.inverse());
  }

  function update(svgCoords: any) {
    maskedElement.setAttribute('cx', svgCoords.x);
    maskedElement.setAttribute('cy', svgCoords.y);
    circleFeedback.setAttribute('cx', svgCoords.x);
    circleFeedback.setAttribute('cy', svgCoords.y);
  }
</script>

<svelte:window on:mousemove={(e) => update(cursorPoint(e, svgElement))} />

<div class="wrapper" id="hand-flesh-wrapper">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <image
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xlink:href="/images/hand-flesh.jpeg"
      preserveAspectRatio="none"
      height="100%"
      width="100%"
    />
  </svg>

  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <clipPath id="mask">
        <circle id="mask-circle" cx="50%" cy="50%" r="8%" style="fill: #ffffff" />
      </clipPath>
    </defs>
    <g clip-path="url(#mask)">
      <image
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xlink:href="/images/hand-bone.jpeg"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
      />
    </g>
    <circle
      id="circle-shadow"
      cx="50%"
      cy="50%"
      r="8%"
      style="stroke: #fff; fill: transparent; stroke-width: 5;"
    />
  </svg>
</div>

<style lang="scss">
  .wrapper {
    width: 100%;
    height: 400px;
    position: relative;

    @media (max-width: 780px) {
      height: 250px;
    }
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
