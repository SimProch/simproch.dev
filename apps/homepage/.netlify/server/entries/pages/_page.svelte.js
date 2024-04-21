import { c as create_ssr_component, v as validate_component, e as escape, f as each, d as add_attribute } from "../../chunks/ssr.js";
import { T as TitleBlock, C as Contents, S as SkillButton, L as LinkButton } from "../../chunks/TitleBlock.js";
import "../../chunks/client.js";
/* empty css                                                */
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const data = Contents.main;
  return `${validate_component(TitleBlock, "TitleBlock").$$render($$result, { data, id: "home" }, {}, {})}`;
});
const css$2 = {
  code: "section.svelte-1ogfgd1.svelte-1ogfgd1{background-color:rgb(240, 240, 240)}h2.svelte-1ogfgd1.svelte-1ogfgd1{margin-bottom:36px}h3.svelte-1ogfgd1.svelte-1ogfgd1{margin-bottom:8px}.about.svelte-1ogfgd1.svelte-1ogfgd1{gap:3rem}.about.svelte-1ogfgd1 .about__description.svelte-1ogfgd1{flex:1}.about.svelte-1ogfgd1 .about__skills.svelte-1ogfgd1{flex:1}.about.svelte-1ogfgd1 .about__skills .about__skills__block.svelte-1ogfgd1:not(:first-of-type){margin-top:24px}.about.svelte-1ogfgd1 .about__skills .about__skills__block .about__skills__block__list.svelte-1ogfgd1{display:flex;flex-direction:row;flex-wrap:wrap}",
  map: '{"version":3,"file":"About.svelte","sources":["About.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { SkillButton } from \\"@simproch-dev/ui\\";\\nimport Contents from \\"../../contents/contents.json\\";\\nconst data = Contents.about;\\nconst { whoAmI, skills } = data.sections;\\n<\/script>\\n\\n<section class=\\"flex-col flex-col--center\\" id=\\"about\\">\\n\\t<div class=\\"base-width base-width--wider flex-col\\">\\n\\t\\t<div class=\\"flex-col\\">\\n\\t\\t\\t<h2>{data.title}</h2>\\n\\t\\t</div>\\n\\t\\t<div class=\\"flex-row about\\">\\n\\t\\t\\t<div class=\\"about__description\\">\\n\\t\\t\\t\\t{#each whoAmI.blocks as block}\\n\\t\\t\\t\\t\\t<p>{block}</p>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</div>\\n\\n\\t\\t\\t<div class=\\"about__skills\\">\\n\\t\\t\\t\\t{#each skills.blocks as block}\\n\\t\\t\\t\\t\\t<div class=\\"about__skills__block\\">\\n\\t\\t\\t\\t\\t\\t<h3>{block.type}</h3>\\n\\t\\t\\t\\t\\t\\t<div class=\\"about__skills__block__list\\">\\n\\t\\t\\t\\t\\t\\t\\t{#each block.list as skill}\\n\\t\\t\\t\\t\\t\\t\\t\\t<SkillButton name={skill.name} linkTo={skill.linkTo} />\\n\\t\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</div>\\n</section>\\n\\n<style lang=\\"scss\\">section {\\n  background-color: rgb(240, 240, 240);\\n}\\n\\nh2 {\\n  margin-bottom: 36px;\\n}\\n\\nh3 {\\n  margin-bottom: 8px;\\n}\\n\\n.about {\\n  gap: 3rem;\\n}\\n.about .about__description {\\n  flex: 1;\\n}\\n.about .about__skills {\\n  flex: 1;\\n}\\n.about .about__skills .about__skills__block:not(:first-of-type) {\\n  margin-top: 24px;\\n}\\n.about .about__skills .about__skills__block .about__skills__block__list {\\n  display: flex;\\n  flex-direction: row;\\n  flex-wrap: wrap;\\n}</style>\\n"],"names":[],"mappings":"AAkCmB,qCAAQ,CACzB,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACrC,CAEA,gCAAG,CACD,aAAa,CAAE,IACjB,CAEA,gCAAG,CACD,aAAa,CAAE,GACjB,CAEA,oCAAO,CACL,GAAG,CAAE,IACP,CACA,qBAAM,CAAC,kCAAoB,CACzB,IAAI,CAAE,CACR,CACA,qBAAM,CAAC,6BAAe,CACpB,IAAI,CAAE,CACR,CACA,qBAAM,CAAC,cAAc,CAAC,oCAAqB,KAAK,cAAc,CAAE,CAC9D,UAAU,CAAE,IACd,CACA,qBAAM,CAAC,cAAc,CAAC,qBAAqB,CAAC,0CAA4B,CACtE,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,SAAS,CAAE,IACb"}'
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const data = Contents.about;
  const { whoAmI, skills } = data.sections;
  $$result.css.add(css$2);
  return `<section class="flex-col flex-col--center svelte-1ogfgd1" id="about"><div class="base-width base-width--wider flex-col"><div class="flex-col"><h2 class="svelte-1ogfgd1">${escape(data.title)}</h2></div> <div class="flex-row about svelte-1ogfgd1"><div class="about__description svelte-1ogfgd1">${each(whoAmI.blocks, (block) => {
    return `<p>${escape(block)}</p>`;
  })}</div> <div class="about__skills svelte-1ogfgd1">${each(skills.blocks, (block) => {
    return `<div class="about__skills__block svelte-1ogfgd1"><h3 class="svelte-1ogfgd1">${escape(block.type)}</h3> <div class="about__skills__block__list svelte-1ogfgd1">${each(block.list, (skill) => {
      return `${validate_component(SkillButton, "SkillButton").$$render($$result, { name: skill.name, linkTo: skill.linkTo }, {}, {})}`;
    })}</div> </div>`;
  })}</div></div></div> </section>`;
});
const css$1 = {
  code: "img.svelte-njnshz{max-width:200px;object-fit:contain}@media(max-width: 780px){img.svelte-njnshz{margin-bottom:16px}}@media(min-width: 780px){img.svelte-njnshz{flex:1}}.experience.svelte-njnshz{width:100%;height:100%;justify-content:center;align-items:center}.experience__company.svelte-njnshz{width:100%;display:flex;flex-direction:row;gap:3rem;align-items:center}@media(max-width: 780px){.experience__company.svelte-njnshz{flex-direction:column;gap:0}}.experience__company__description.svelte-njnshz{flex:4}.experience__know-more.svelte-njnshz{width:100%;display:flex;flex-direction:row;align-items:flex-start;margin-top:16px;gap:3rem}.experience__know-more__empty.svelte-njnshz{min-width:200px;flex:1}@media(max-width: 780px){.experience__know-more__empty.svelte-njnshz{display:none}}.experience__know-more__link.svelte-njnshz{flex:4}@media(max-width: 780px){.experience__know-more__link.svelte-njnshz{display:flex;justify-content:center}}",
  map: '{"version":3,"file":"Company.svelte","sources":["Company.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { LinkButton } from \\"@simproch-dev/ui\\";\\nexport let imagePath;\\nexport let title;\\nexport let content;\\n<\/script>\\n\\n<div class=\\"experience flex-col\\">\\n\\t<div class=\\"experience__company flex-row flex-row--center\\">\\n\\t\\t<img src={`/images/company-logos/${imagePath}.png`} alt={`${title} logo`} />\\n\\t\\t<p class=\\"experience__company__description\\">{content}</p>\\n\\t</div>\\n\\t<div class=\\"experience__know-more\\">\\n\\t\\t<div class=\\"experience__know-more__empty\\"></div>\\n\\t\\t<div class=\\"experience__know-more__link\\">\\n\\t\\t\\t<LinkButton name=\\"Know more\\" linkTo={imagePath} />\\n\\t\\t</div>\\n\\t</div>\\n</div>\\n\\n<style lang=\\"scss\\">img {\\n  max-width: 200px;\\n  object-fit: contain;\\n}\\n@media (max-width: 780px) {\\n  img {\\n    margin-bottom: 16px;\\n  }\\n}\\n@media (min-width: 780px) {\\n  img {\\n    flex: 1;\\n  }\\n}\\n\\n.experience {\\n  width: 100%;\\n  height: 100%;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.experience__company {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: row;\\n  gap: 3rem;\\n  align-items: center;\\n}\\n@media (max-width: 780px) {\\n  .experience__company {\\n    flex-direction: column;\\n    gap: 0;\\n  }\\n}\\n.experience__company__description {\\n  flex: 4;\\n}\\n.experience__know-more {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: row;\\n  align-items: flex-start;\\n  margin-top: 16px;\\n  gap: 3rem;\\n}\\n.experience__know-more__empty {\\n  min-width: 200px;\\n  flex: 1;\\n}\\n@media (max-width: 780px) {\\n  .experience__know-more__empty {\\n    display: none;\\n  }\\n}\\n.experience__know-more__link {\\n  flex: 4;\\n}\\n@media (max-width: 780px) {\\n  .experience__know-more__link {\\n    display: flex;\\n    justify-content: center;\\n  }\\n}</style>\\n"],"names":[],"mappings":"AAmBmB,iBAAI,CACrB,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,OACd,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,iBAAI,CACF,aAAa,CAAE,IACjB,CACF,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,iBAAI,CACF,IAAI,CAAE,CACR,CACF,CAEA,yBAAY,CACV,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MACf,CACA,kCAAqB,CACnB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,GAAG,CAAE,IAAI,CACT,WAAW,CAAE,MACf,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,kCAAqB,CACnB,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,CACP,CACF,CACA,+CAAkC,CAChC,IAAI,CAAE,CACR,CACA,oCAAuB,CACrB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,WAAW,CAAE,UAAU,CACvB,UAAU,CAAE,IAAI,CAChB,GAAG,CAAE,IACP,CACA,2CAA8B,CAC5B,SAAS,CAAE,KAAK,CAChB,IAAI,CAAE,CACR,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,2CAA8B,CAC5B,OAAO,CAAE,IACX,CACF,CACA,0CAA6B,CAC3B,IAAI,CAAE,CACR,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,0CAA6B,CAC3B,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MACnB,CACF"}'
};
const Company = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { imagePath } = $$props;
  let { title } = $$props;
  let { content } = $$props;
  if ($$props.imagePath === void 0 && $$bindings.imagePath && imagePath !== void 0)
    $$bindings.imagePath(imagePath);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  $$result.css.add(css$1);
  return `<div class="experience flex-col svelte-njnshz"><div class="experience__company flex-row flex-row--center svelte-njnshz"><img${add_attribute("src", `/images/company-logos/${imagePath}.png`, 0)}${add_attribute("alt", `${title} logo`, 0)} class="svelte-njnshz"> <p class="experience__company__description svelte-njnshz">${escape(content)}</p></div> <div class="experience__know-more svelte-njnshz"><div class="experience__know-more__empty svelte-njnshz"></div> <div class="experience__know-more__link svelte-njnshz">${validate_component(LinkButton, "LinkButton").$$render($$result, { name: "Know more", linkTo: imagePath }, {}, {})}</div></div> </div>`;
});
const css = {
  code: "h2.svelte-7qraav{text-align:left;margin-bottom:32px}.company-info.svelte-7qraav:not(:last-of-type){margin-bottom:36px}.wrapper.svelte-7qraav{gap:40px}",
  map: '{"version":3,"file":"Experience.svelte","sources":["Experience.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Company from \\"../utils/Company.svelte\\";\\nimport Contents from \\"../../contents/contents.json\\";\\nconst data = Contents.experience;\\n<\/script>\\n\\n<section id=\\"experience\\" class=\\"flex-col flex-col--center\\">\\n\\t<div class=\\"flex-col base-width\\">\\n\\t\\t<h2>{data.title}</h2>\\n\\t</div>\\n\\t<div class=\\"flex-col wrapper base-width\\">\\n\\t\\t{#each data.blocks as company}\\n\\t\\t\\t<div class=\\"company-info\\">\\n\\t\\t\\t\\t<Company\\n\\t\\t\\t\\t\\timagePath={company.identifier}\\n\\t\\t\\t\\t\\ttitle={company.companyName}\\n\\t\\t\\t\\t\\tcontent={company.content}\\n\\t\\t\\t\\t/>\\n\\t\\t\\t</div>\\n\\t\\t{/each}\\n\\t</div>\\n</section>\\n\\n<style lang=\\"scss\\">h2 {\\n  text-align: left;\\n  margin-bottom: 32px;\\n}\\n\\n.company-info:not(:last-of-type) {\\n  margin-bottom: 36px;\\n}\\n\\n.wrapper {\\n  gap: 40px;\\n}</style>\\n"],"names":[],"mappings":"AAsBmB,gBAAG,CACpB,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,IACjB,CAEA,2BAAa,KAAK,aAAa,CAAE,CAC/B,aAAa,CAAE,IACjB,CAEA,sBAAS,CACP,GAAG,CAAE,IACP"}'
};
const Experience = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const data = Contents.experience;
  $$result.css.add(css);
  return `<section id="experience" class="flex-col flex-col--center"><div class="flex-col base-width"><h2 class="svelte-7qraav">${escape(data.title)}</h2></div> <div class="flex-col wrapper base-width svelte-7qraav">${each(data.blocks, (company) => {
    return `<div class="company-info svelte-7qraav">${validate_component(Company, "Company").$$render(
      $$result,
      {
        imagePath: company.identifier,
        title: company.companyName,
        content: company.content
      },
      {},
      {}
    )} </div>`;
  })}</div> </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Home, "Home").$$render($$result, {}, {}, {})} ${validate_component(About, "About").$$render($$result, {}, {}, {})} ${validate_component(Experience, "Experience").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
