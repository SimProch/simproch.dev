import { c as create_ssr_component, e as escape, f as each, v as validate_component } from "./ssr.js";
import { S as SkillButton, L as LinkButton } from "./TitleBlock.js";
/* empty css                                     */
const css = {
  code: "section.svelte-7t5mm6.svelte-7t5mm6{background-color:rgb(240, 240, 240)}h2.svelte-7t5mm6.svelte-7t5mm6{margin-bottom:12px}h3.svelte-7t5mm6.svelte-7t5mm6{padding-bottom:8px}.overview__text.svelte-7t5mm6.svelte-7t5mm6{margin-bottom:20px}.skills.svelte-7t5mm6.svelte-7t5mm6{margin-bottom:80px}.skills.svelte-7t5mm6 .skill__list.svelte-7t5mm6{display:flex;flex-direction:row;flex-wrap:wrap}",
  map: '{"version":3,"file":"Detail.svelte","sources":["Detail.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { SkillButton, LinkButton } from \\"@simproch-dev/ui\\";\\nexport let data;\\n<\/script>\\n\\n<section class=\\"flex-col flex-col--center wrapper\\">\\n\\t<div class=\\"base-width flex-col\\">\\n\\t\\t<div class=\\"flex-col overview\\">\\n\\t\\t\\t<h2>{data.overview.title}</h2>\\n\\t\\t\\t<div class=\\"overview__text\\">\\n\\t\\t\\t\\t{#each data.overview.textBlocks as textBlock}\\n\\t\\t\\t\\t\\t<p>{textBlock}</p>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\n\\t\\t<div class=\\"flex-col skills\\">\\n\\t\\t\\t<h3>{data.skills.title}</h3>\\n\\t\\t\\t<div class=\\"skill__list\\">\\n\\t\\t\\t\\t{#each data.skills.skills as skill}\\n\\t\\t\\t\\t\\t<SkillButton name={skill.name} linkTo={skill.linkTo} />\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t\\t<div class=\\"flex-row\\">\\n\\t\\t\\t{#each data.actions as action}\\n\\t\\t\\t\\t<LinkButton name={action.name} linkTo={action.linkTo} />\\n\\t\\t\\t{/each}\\n\\t\\t</div>\\n\\t</div>\\n</section>\\n\\n<style lang=\\"scss\\">section {\\n  background-color: rgb(240, 240, 240);\\n}\\n\\nh2 {\\n  margin-bottom: 12px;\\n}\\n\\nh3 {\\n  padding-bottom: 8px;\\n}\\n\\n.overview__text {\\n  margin-bottom: 20px;\\n}\\n\\n.skills {\\n  margin-bottom: 80px;\\n}\\n.skills .skill__list {\\n  display: flex;\\n  flex-direction: row;\\n  flex-wrap: wrap;\\n}</style>\\n"],"names":[],"mappings":"AA+BmB,mCAAQ,CACzB,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACrC,CAEA,8BAAG,CACD,aAAa,CAAE,IACjB,CAEA,8BAAG,CACD,cAAc,CAAE,GAClB,CAEA,2CAAgB,CACd,aAAa,CAAE,IACjB,CAEA,mCAAQ,CACN,aAAa,CAAE,IACjB,CACA,qBAAO,CAAC,0BAAa,CACnB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,SAAS,CAAE,IACb"}'
};
const Detail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<section class="flex-col flex-col--center wrapper svelte-7t5mm6"><div class="base-width flex-col"><div class="flex-col overview"><h2 class="svelte-7t5mm6">${escape(data.overview.title)}</h2> <div class="overview__text svelte-7t5mm6">${each(data.overview.textBlocks, (textBlock) => {
    return `<p>${escape(textBlock)}</p>`;
  })}</div></div> <div class="flex-col skills svelte-7t5mm6"><h3 class="svelte-7t5mm6">${escape(data.skills.title)}</h3> <div class="skill__list svelte-7t5mm6">${each(data.skills.skills, (skill) => {
    return `${validate_component(SkillButton, "SkillButton").$$render($$result, { name: skill.name, linkTo: skill.linkTo }, {}, {})}`;
  })}</div></div> <div class="flex-row">${each(data.actions, (action) => {
    return `${validate_component(LinkButton, "LinkButton").$$render($$result, { name: action.name, linkTo: action.linkTo }, {}, {})}`;
  })}</div></div> </section>`;
});
export {
  Detail as D
};
