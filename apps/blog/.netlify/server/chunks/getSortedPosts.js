import { c as create_ssr_component, d as add_attribute, e as escape, f as each, v as validate_component } from "./ssr.js";
import "./client.js";
import "./contents.js";
const css$1 = {
  code: '.divider{height:8px;width:30px;border-radius:8px;background-color:#888;align-self:center;justify-self:center;margin:4px 0}.flex-row{display:flex;flex-direction:row}@media(max-width: 1000px){.flex-row{flex-direction:column}}.flex-col{display:flex;flex-direction:column}.flex-col.flex-col--center{align-items:center}.base-width{width:50%}@media(max-width: 1000px){.base-width{width:80%}}.base-width.base-width--wider{width:60%}@media(max-width: 1000px){.base-width.base-width--wider{width:80%}}.button.svelte-1acl1k4{position:relative;display:flex;align-items:center;margin-top:4px;margin-right:4px;padding:8px 16px;text-align:center;letter-spacing:1px;text-decoration:none;color:rgba(0, 0, 0, 0.6);background:#fff;border:2px solid #fff;cursor:pointer;transition:ease-out 0.5s;-webkit-transition:ease-out 0.5s;-moz-transition:ease-out 0.5s}.button.svelte-1acl1k4::after,.button.svelte-1acl1k4::before{position:absolute;content:"";width:0;height:0;transition:0.5s}.button.svelte-1acl1k4::after{top:-2px;left:-2px;border-top:2px solid transparent;border-left:2px solid transparent}.button.svelte-1acl1k4::before{bottom:-2px;right:-2px;border-bottom:2px solid transparent;border-right:2px solid transparent}.button.svelte-1acl1k4:hover,.button.svelte-1acl1k4:focus{color:rgba(0, 0, 0, 0.9)}.button.svelte-1acl1k4:hover::after,.button.svelte-1acl1k4:hover::before,.button.svelte-1acl1k4:focus::after,.button.svelte-1acl1k4:focus::before{width:calc(100% + 2px);height:calc(100% + 2px);border-color:rgba(0, 0, 0, 0.9)}',
  map: '{"version":3,"file":"SkillButton.svelte","sources":["SkillButton.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let name;\\nexport let linkTo;\\n<\/script>\\n\\n<a href={linkTo} target=\\"_blank\\" class=\\"button\\">{name}</a>\\n\\n<style lang=\\"scss\\">:global(.divider) {\\n  height: 8px;\\n  width: 30px;\\n  border-radius: 8px;\\n  background-color: #888;\\n  align-self: center;\\n  justify-self: center;\\n  margin: 4px 0;\\n}\\n\\n:global(.flex-row) {\\n  display: flex;\\n  flex-direction: row;\\n}\\n\\n@media (max-width: 1000px) {\\n  :global(.flex-row) {\\n    flex-direction: column;\\n  }\\n}\\n\\n:global(.flex-col) {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n:global(.flex-col.flex-col--center) {\\n  align-items: center;\\n}\\n\\n:global(.base-width) {\\n  width: 50%;\\n}\\n\\n@media (max-width: 1000px) {\\n  :global(.base-width) {\\n    width: 80%;\\n  }\\n}\\n\\n:global(.base-width.base-width--wider) {\\n  width: 60%;\\n}\\n\\n@media (max-width: 1000px) {\\n  :global(.base-width.base-width--wider) {\\n    width: 80%;\\n  }\\n}\\n\\n.button {\\n  position: relative;\\n  display: flex;\\n  align-items: center;\\n  margin-top: 4px;\\n  margin-right: 4px;\\n  padding: 8px 16px;\\n  text-align: center;\\n  letter-spacing: 1px;\\n  text-decoration: none;\\n  color: rgba(0, 0, 0, 0.6);\\n  background: #fff;\\n  border: 2px solid #fff;\\n  cursor: pointer;\\n  transition: ease-out 0.5s;\\n  -webkit-transition: ease-out 0.5s;\\n  -moz-transition: ease-out 0.5s;\\n}\\n\\n.button::after, .button::before {\\n  position: absolute;\\n  content: \\"\\";\\n  width: 0;\\n  height: 0;\\n  transition: 0.5s;\\n}\\n\\n.button::after {\\n  top: -2px;\\n  left: -2px;\\n  border-top: 2px solid transparent;\\n  border-left: 2px solid transparent;\\n}\\n\\n.button::before {\\n  bottom: -2px;\\n  right: -2px;\\n  border-bottom: 2px solid transparent;\\n  border-right: 2px solid transparent;\\n}\\n\\n.button:hover, .button:focus {\\n  color: rgba(0, 0, 0, 0.9);\\n}\\n\\n.button:hover::after, .button:hover::before, .button:focus::after, .button:focus::before {\\n  width: calc(100% + 2px);\\n  height: calc(100% + 2px);\\n  border-color: rgba(0, 0, 0, 0.9);\\n}</style>\\n"],"names":[],"mappings":"AAM2B,QAAU,CACnC,MAAM,CAAE,GAAG,CACX,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,GAAG,CAClB,gBAAgB,CAAE,IAAI,CACtB,UAAU,CAAE,MAAM,CAClB,YAAY,CAAE,MAAM,CACpB,MAAM,CAAE,GAAG,CAAC,CACd,CAEQ,SAAW,CACjB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAClB,CAEA,MAAO,YAAY,MAAM,CAAE,CACjB,SAAW,CACjB,cAAc,CAAE,MAClB,CACF,CAEQ,SAAW,CACjB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAClB,CAEQ,0BAA4B,CAClC,WAAW,CAAE,MACf,CAEQ,WAAa,CACnB,KAAK,CAAE,GACT,CAEA,MAAO,YAAY,MAAM,CAAE,CACjB,WAAa,CACnB,KAAK,CAAE,GACT,CACF,CAEQ,6BAA+B,CACrC,KAAK,CAAE,GACT,CAEA,MAAO,YAAY,MAAM,CAAE,CACjB,6BAA+B,CACrC,KAAK,CAAE,GACT,CACF,CAEA,sBAAQ,CACN,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,GAAG,CACf,YAAY,CAAE,GAAG,CACjB,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,UAAU,CAAE,MAAM,CAClB,cAAc,CAAE,GAAG,CACnB,eAAe,CAAE,IAAI,CACrB,KAAK,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACzB,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,QAAQ,CAAC,IAAI,CACzB,kBAAkB,CAAE,QAAQ,CAAC,IAAI,CACjC,eAAe,CAAE,QAAQ,CAAC,IAC5B,CAEA,sBAAO,OAAO,CAAE,sBAAO,QAAS,CAC9B,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CAAC,CACT,UAAU,CAAE,IACd,CAEA,sBAAO,OAAQ,CACb,GAAG,CAAE,IAAI,CACT,IAAI,CAAE,IAAI,CACV,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,WAAW,CACjC,WAAW,CAAE,GAAG,CAAC,KAAK,CAAC,WACzB,CAEA,sBAAO,QAAS,CACd,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,WAAW,CACpC,YAAY,CAAE,GAAG,CAAC,KAAK,CAAC,WAC1B,CAEA,sBAAO,MAAM,CAAE,sBAAO,MAAO,CAC3B,KAAK,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAC1B,CAEA,sBAAO,MAAM,OAAO,CAAE,sBAAO,MAAM,QAAQ,CAAE,sBAAO,MAAM,OAAO,CAAE,sBAAO,MAAM,QAAS,CACvF,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CACvB,MAAM,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CACxB,YAAY,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CACjC"}'
};
const SkillButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { linkTo } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.linkTo === void 0 && $$bindings.linkTo && linkTo !== void 0)
    $$bindings.linkTo(linkTo);
  $$result.css.add(css$1);
  return `<a${add_attribute("href", linkTo, 0)} target="_blank" class="button svelte-1acl1k4">${escape(name)}</a>`;
});
const css = {
  code: '.wrapper.svelte-12nm46x.svelte-12nm46x{margin-top:24px;display:flex;flex-direction:column}.tags.svelte-12nm46x.svelte-12nm46x{display:flex;flex-direction:row;margin-top:8px;margin-bottom:8px}a.svelte-12nm46x.svelte-12nm46x{text-decoration:none;display:flex;flex-direction:column}a.svelte-12nm46x:has(time:hover) h1.svelte-12nm46x,a.svelte-12nm46x:has(time:hover) h3.svelte-12nm46x,a.svelte-12nm46x:has(h1:hover) h1.svelte-12nm46x,a.svelte-12nm46x:has(h1:hover) h3.svelte-12nm46x,a.svelte-12nm46x:has(h3:hover) h1.svelte-12nm46x,a.svelte-12nm46x:has(h3:hover) h3.svelte-12nm46x,a.svelte-12nm46x:focus h1.svelte-12nm46x,a.svelte-12nm46x:focus h3.svelte-12nm46x{text-decoration:underline}time.svelte-12nm46x.svelte-12nm46x{font-family:"Inter Tight", sans-serif;font-weight:300;font-size:1.2rem;line-height:1.5;color:rgba(0, 0, 0, 0.6);font-style:italic;padding:8px 0px}',
  map: '{"version":3,"file":"BlogPost.svelte","sources":["BlogPost.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { SkillButton } from \\"@simproch-dev/ui\\";\\nexport let post;\\nconst { id, title, tags, subtitle, date } = post;\\nconst onPostClick = (event) => {\\n  event?.preventDefault();\\n  if (event instanceof KeyboardEvent && event.key !== \\"Enter\\") {\\n    return;\\n  }\\n  goto(`/posts/${id}`);\\n};\\n<\/script>\\n\\n<div class=\\"wrapper\\">\\n\\t<a href={`/posts/${id}`} on:click={onPostClick}>\\n\\t\\t<time>{date}</time>\\n\\t\\t<h1>{title}</h1>\\n\\t\\t{#if subtitle}\\n\\t\\t\\t<h3>{subtitle}</h3>\\n\\t\\t{/if}\\n\\t</a>\\n\\t<div class=\\"tags\\">\\n\\t\\t{#each tags as tag (tag)}\\n\\t\\t\\t<SkillButton name={tag} linkTo={`/tags/${tag}`} />\\n\\t\\t{/each}\\n\\t</div>\\n</div>\\n\\n<style lang=\\"scss\\">.wrapper {\\n  margin-top: 24px;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.tags {\\n  display: flex;\\n  flex-direction: row;\\n  margin-top: 8px;\\n  margin-bottom: 8px;\\n}\\n\\na {\\n  text-decoration: none;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\na:has(time:hover) h1,\\na:has(time:hover) h3, a:has(h1:hover) h1,\\na:has(h1:hover) h3, a:has(h3:hover) h1,\\na:has(h3:hover) h3, a:focus h1,\\na:focus h3 {\\n  text-decoration: underline;\\n}\\n\\ntime {\\n  font-family: \\"Inter Tight\\", sans-serif;\\n  font-weight: 300;\\n  font-size: 1.2rem;\\n  line-height: 1.5;\\n  color: rgba(0, 0, 0, 0.6);\\n  font-style: italic;\\n  padding: 8px 0px;\\n}</style>\\n"],"names":[],"mappings":"AA4BmB,sCAAS,CAC1B,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAClB,CAEA,mCAAM,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,UAAU,CAAE,GAAG,CACf,aAAa,CAAE,GACjB,CAEA,+BAAE,CACA,eAAe,CAAE,IAAI,CACrB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAClB,CAEA,gBAAC,KAAK,IAAI,MAAM,CAAC,CAAC,iBAAE,CACpB,gBAAC,KAAK,IAAI,MAAM,CAAC,CAAC,iBAAE,CAAE,gBAAC,KAAK,EAAE,MAAM,CAAC,CAAC,iBAAE,CACxC,gBAAC,KAAK,EAAE,MAAM,CAAC,CAAC,iBAAE,CAAE,gBAAC,KAAK,EAAE,MAAM,CAAC,CAAC,iBAAE,CACtC,gBAAC,KAAK,EAAE,MAAM,CAAC,CAAC,iBAAE,CAAE,gBAAC,MAAM,CAAC,iBAAE,CAC9B,gBAAC,MAAM,CAAC,iBAAG,CACT,eAAe,CAAE,SACnB,CAEA,kCAAK,CACH,WAAW,CAAE,aAAa,CAAC,CAAC,UAAU,CACtC,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACzB,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,GAAG,CAAC,GACf"}'
};
const BlogPost = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  const { id, title, tags, subtitle, date } = post;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  $$result.css.add(css);
  return `<div class="wrapper svelte-12nm46x"><a${add_attribute("href", `/posts/${id}`, 0)} class="svelte-12nm46x"><time class="svelte-12nm46x">${escape(date)}</time> <h1 class="svelte-12nm46x">${escape(title)}</h1> ${subtitle ? `<h3 class="svelte-12nm46x">${escape(subtitle)}</h3>` : ``}</a> <div class="tags svelte-12nm46x">${each(tags, (tag) => {
    return `${validate_component(SkillButton, "SkillButton").$$render($$result, { name: tag, linkTo: `/tags/${tag}` }, {}, {})}`;
  })}</div> </div>`;
});
const getDateObjFromString = (date) => {
  const arr = date.split(".").map((datum, i) => {
    if (i === 1) {
      return +datum.trim() - 1;
    }
    return +datum.trim();
  }).reverse();
  return new Date(arr[0], arr[1], arr[2]);
};
const getSortedPosts = (posts, reverse = false) => {
  const sortedPosts = [...posts ?? []]?.sort((x, y) => {
    if (y.date === x.date) {
      return y.id.localeCompare(x.id);
    }
    return +getDateObjFromString(y.date) - +getDateObjFromString(x.date);
  });
  if (reverse)
    return sortedPosts.reverse();
  return sortedPosts;
};
export {
  BlogPost as B,
  getSortedPosts as g
};
