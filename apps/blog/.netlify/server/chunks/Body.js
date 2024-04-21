import { c as create_ssr_component } from "./ssr.js";
const css = {
  code: "section.svelte-ir38gs{display:flex;flex-direction:column;align-items:center;padding-top:32px;padding-bottom:32px}",
  map: '{"version":3,"file":"Body.svelte","sources":["Body.svelte"],"sourcesContent":["<section>\\n\\t<div class=\\"base-width\\">\\n\\t\\t<slot />\\n\\t</div>\\n</section>\\n\\n<style lang=\\"scss\\">section {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding-top: 32px;\\n  padding-bottom: 32px;\\n}</style>\\n"],"names":[],"mappings":"AAMmB,qBAAQ,CACzB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,WAAW,CAAE,IAAI,CACjB,cAAc,CAAE,IAClB"}'
};
const Body = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="svelte-ir38gs"><div class="base-width">${slots.default ? slots.default({}) : ``}</div> </section>`;
});
export {
  Body as B
};
