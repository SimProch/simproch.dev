import { c as create_ssr_component, e as escape, d as add_attribute } from "./ssr.js";
const Meta = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { keywords = "" } = $$props;
  let { description = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.keywords === void 0 && $$bindings.keywords && keywords !== void 0)
    $$bindings.keywords(keywords);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  return `${$$result.head += `<!-- HEAD_svelte-p9jzf4_START -->${$$result.title = `<title>${escape(title)} | Simon Prochazka</title>`, ""}<meta property="keywords"${add_attribute("content", keywords, 0)}><meta property="description"${add_attribute("content", description, 0)}><!-- HEAD_svelte-p9jzf4_END -->`, ""}`;
});
export {
  Meta as M
};
