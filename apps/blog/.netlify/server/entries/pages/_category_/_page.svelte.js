import { c as create_ssr_component, g as subscribe, v as validate_component } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
import { C as Contents, g as getTagsFromPosts } from "../../../chunks/contents.js";
import { B as Body } from "../../../chunks/Body.js";
import { L as LatestPosts } from "../../../chunks/LatestPosts.js";
import { M as Meta } from "../../../chunks/Meta.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let currentContent;
  {
    {
      currentContent = Contents[$page.params.category];
    }
  }
  $$unsubscribe_page();
  return `${validate_component(Meta, "Meta").$$render(
    $$result,
    {
      title: `${currentContent ? currentContent.title : ""} | Simon Prochazka | Developer`,
      keywords: `tags, ${getTagsFromPosts(currentContent.posts ?? []).join(", ")}, blog, simon, prochzka`,
      description: `Posts containing ${getTagsFromPosts(currentContent.posts ?? []).join(", ")}`
    },
    {},
    {}
  )} ${validate_component(Body, "Body").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(LatestPosts, "LatestPosts").$$render($$result, { category: currentContent }, {}, {})}`;
    }
  })}`;
});
export {
  Page as default
};
