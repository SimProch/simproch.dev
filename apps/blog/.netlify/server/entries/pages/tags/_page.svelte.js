import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component, f as each } from "../../../chunks/ssr.js";
import { t as tags } from "../../../chunks/contents.js";
import { B as Body } from "../../../chunks/Body.js";
import "../../../chunks/client.js";
import { M as Meta } from "../../../chunks/Meta.js";
const css$1 = {
  code: 'a.svelte-11qq3b5{position:relative;margin-top:4px;margin-right:4px;padding:8px 16px;text-align:center;font-size:1.2rem;letter-spacing:1px;text-decoration:none;color:rgb(255, 255, 255);background:rgb(0, 0, 0);border:4px solid rgb(0, 0, 0);cursor:pointer;transition:ease-out 0.5s;-webkit-transition:ease-out 0.5s;-moz-transition:ease-out 0.5s}a.svelte-11qq3b5::after,a.svelte-11qq3b5::before{position:absolute;content:"";width:0;height:0;transition:0.5s}a.svelte-11qq3b5::after{top:-2px;left:-2px;border-top:2px solid transparent;border-left:2px solid transparent}a.svelte-11qq3b5::before{bottom:-2px;right:-2px;border-bottom:2px solid transparent;border-right:2px solid transparent}a.svelte-11qq3b5:hover,a.svelte-11qq3b5:focus{color:rgb(255, 255, 255)}a.svelte-11qq3b5:hover::after,a.svelte-11qq3b5:hover::before,a.svelte-11qq3b5:focus::after,a.svelte-11qq3b5:focus::before{width:calc(100% + 2px);height:calc(100% + 2px);border-color:rgb(255, 255, 255)}',
  map: '{"version":3,"file":"LinkButton.svelte","sources":["LinkButton.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { afterNavigate, goto } from \\"$app/navigation\\";\\nimport { page } from \\"$app/stores\\";\\nexport let name;\\nexport let linkTo;\\nlet lastPage;\\nafterNavigate(({ from }) => {\\n  lastPage = from;\\n});\\nconst onClick = (e) => {\\n  e.preventDefault();\\n  if (linkTo === \\"https://simproch.dev/\\") {\\n    goto(\\"/\\");\\n    return false;\\n  }\\n  if (linkTo.startsWith(\\"http\\")) {\\n    window.open(linkTo, \\"_blank\\");\\n    return false;\\n  }\\n  goto(linkTo);\\n  return false;\\n};\\n<\/script>\\n\\n<a href={linkTo} on:click={onClick}>\\n\\t{name}\\n</a>\\n\\n<style lang=\\"scss\\">a {\\n  position: relative;\\n  margin-top: 4px;\\n  margin-right: 4px;\\n  padding: 8px 16px;\\n  text-align: center;\\n  font-size: 1.2rem;\\n  letter-spacing: 1px;\\n  text-decoration: none;\\n  color: rgb(255, 255, 255);\\n  background: rgb(0, 0, 0);\\n  border: 4px solid rgb(0, 0, 0);\\n  cursor: pointer;\\n  transition: ease-out 0.5s;\\n  -webkit-transition: ease-out 0.5s;\\n  -moz-transition: ease-out 0.5s;\\n}\\na::after, a::before {\\n  position: absolute;\\n  content: \\"\\";\\n  width: 0;\\n  height: 0;\\n  transition: 0.5s;\\n}\\na::after {\\n  top: -2px;\\n  left: -2px;\\n  border-top: 2px solid transparent;\\n  border-left: 2px solid transparent;\\n}\\na::before {\\n  bottom: -2px;\\n  right: -2px;\\n  border-bottom: 2px solid transparent;\\n  border-right: 2px solid transparent;\\n}\\na:hover, a:focus {\\n  color: rgb(255, 255, 255);\\n}\\na:hover::after, a:hover::before, a:focus::after, a:focus::before {\\n  width: calc(100% + 2px);\\n  height: calc(100% + 2px);\\n  border-color: rgb(255, 255, 255);\\n}</style>\\n"],"names":[],"mappings":"AA2BmB,gBAAE,CACnB,QAAQ,CAAE,QAAQ,CAClB,UAAU,CAAE,GAAG,CACf,YAAY,CAAE,GAAG,CACjB,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,MAAM,CACjB,cAAc,CAAE,GAAG,CACnB,eAAe,CAAE,IAAI,CACrB,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACzB,UAAU,CAAE,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACxB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAC9B,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,QAAQ,CAAC,IAAI,CACzB,kBAAkB,CAAE,QAAQ,CAAC,IAAI,CACjC,eAAe,CAAE,QAAQ,CAAC,IAC5B,CACA,gBAAC,OAAO,CAAE,gBAAC,QAAS,CAClB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CAAC,CACT,UAAU,CAAE,IACd,CACA,gBAAC,OAAQ,CACP,GAAG,CAAE,IAAI,CACT,IAAI,CAAE,IAAI,CACV,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,WAAW,CACjC,WAAW,CAAE,GAAG,CAAC,KAAK,CAAC,WACzB,CACA,gBAAC,QAAS,CACR,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,WAAW,CACpC,YAAY,CAAE,GAAG,CAAC,KAAK,CAAC,WAC1B,CACA,gBAAC,MAAM,CAAE,gBAAC,MAAO,CACf,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC1B,CACA,gBAAC,MAAM,OAAO,CAAE,gBAAC,MAAM,QAAQ,CAAE,gBAAC,MAAM,OAAO,CAAE,gBAAC,MAAM,QAAS,CAC/D,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CACvB,MAAM,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CACxB,YAAY,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACjC"}'
};
const LinkButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { linkTo } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.linkTo === void 0 && $$bindings.linkTo && linkTo !== void 0)
    $$bindings.linkTo(linkTo);
  $$result.css.add(css$1);
  return `<a${add_attribute("href", linkTo, 0)} class="svelte-11qq3b5">${escape(name)} </a>`;
});
const css = {
  code: ".tags.svelte-18wgnql{display:flex;flex-direction:row;flex-wrap:wrap}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { tags } from \\"src/contents/contents\\";\\nimport Body from \\"src/components/core/Body.svelte\\";\\nimport LinkButton from \\"src/components/buttons/LinkButton.svelte\\";\\nimport Meta from \\"src/components/core/Meta.svelte\\";\\n<\/script>\\n\\n<Meta\\n\\ttitle=\\"Tags | Simon Prochazka | Developer\\"\\n\\tkeywords={`tags, blog, simon, prochazka, ${tags.join(\', \')}`}\\n\\tdescription=\\"All posts filterable by tags\\"\\n/>\\n\\n<main>\\n\\t<Body>\\n\\t\\t<div class=\\"tags\\">\\n\\t\\t\\t{#each tags as tag (tag)}\\n\\t\\t\\t\\t<LinkButton name={tag} linkTo={`/tags/${tag}`} />\\n\\t\\t\\t{/each}\\n\\t\\t</div>\\n\\t</Body>\\n</main>\\n\\n<style lang=\\"scss\\">.tags {\\n  display: flex;\\n  flex-direction: row;\\n  flex-wrap: wrap;\\n}</style>\\n"],"names":[],"mappings":"AAsBmB,oBAAM,CACvB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,SAAS,CAAE,IACb"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Meta, "Meta").$$render(
    $$result,
    {
      title: "Tags | Simon Prochazka | Developer",
      keywords: `tags, blog, simon, prochazka, ${tags.join(", ")}`,
      description: "All posts filterable by tags"
    },
    {},
    {}
  )} <main>${validate_component(Body, "Body").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="tags svelte-18wgnql">${each(tags, (tag) => {
        return `${validate_component(LinkButton, "LinkButton").$$render($$result, { name: tag, linkTo: `/tags/${tag}` }, {}, {})}`;
      })}</div>`;
    }
  })} </main>`;
});
export {
  Page as default
};
