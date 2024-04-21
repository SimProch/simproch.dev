import { c as create_ssr_component, g as subscribe, v as validate_component, f as each } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import { g as getSortedPosts, B as BlogPost } from "../../../../chunks/getSortedPosts.js";
import { B as Body } from "../../../../chunks/Body.js";
import { p as posts, g as getTagsFromPosts } from "../../../../chunks/contents.js";
import { M as Meta } from "../../../../chunks/Meta.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let postsInternal = [];
  {
    {
      const tag = $page.params.tag;
      const filteredPosts = posts.flat().filter((i) => i.tags.includes(tag));
      postsInternal = getSortedPosts(filteredPosts);
    }
  }
  $$unsubscribe_page();
  return `${validate_component(Meta, "Meta").$$render(
    $$result,
    {
      title: "Tags | Simon Prochazka | Developer",
      keywords: `tags, ${getTagsFromPosts(postsInternal ?? []).join(", ")}, blog, simon, prochzka`,
      description: `posts tagged with ${getTagsFromPosts(postsInternal ?? []).join(", ")}`
    },
    {},
    {}
  )} ${validate_component(Body, "Body").$$render($$result, {}, {}, {
    default: () => {
      return `${each(postsInternal, (post) => {
        return `${validate_component(BlogPost, "BlogPost").$$render($$result, { post }, {}, {})}`;
      })}`;
    }
  })}`;
});
export {
  Page as default
};
