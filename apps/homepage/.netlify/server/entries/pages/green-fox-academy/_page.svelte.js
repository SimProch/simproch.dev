import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { C as Contents, T as TitleBlock, D as Detail } from "../../../chunks/Detail.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const data = Contents.GFA;
  return `${validate_component(TitleBlock, "TitleBlock").$$render($$result, { data, id: "experience" }, {}, {})} ${validate_component(Detail, "Detail").$$render($$result, { data: data.detail }, {}, {})}`;
});
export {
  Page as default
};
