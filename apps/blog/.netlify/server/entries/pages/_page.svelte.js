import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { C as Contents } from "../../chunks/contents.js";
import { B as Body } from "../../chunks/Body.js";
import { L as LatestPosts } from "../../chunks/LatestPosts.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const data = Contents.home;
  return `${$$result.head += `<!-- HEAD_svelte-sfwor1_START -->${$$result.title = `<title>Simon Prochazka | Developer</title>`, ""}<!-- HEAD_svelte-sfwor1_END -->`, ""} ${validate_component(Body, "Body").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(LatestPosts, "LatestPosts").$$render($$result, { category: data }, {}, {})}`;
    }
  })}`;
});
export {
  Page as default
};
