import { c as create_ssr_component, g as subscribe, f as each, v as validate_component } from "./ssr.js";
import { g as getSortedPosts, B as BlogPost } from "./getSortedPosts.js";
import { p as page } from "./stores.js";
const css = {
  code: ".empty-image.svelte-1men5up{width:50%;margin-top:32px}",
  map: '{"version":3,"file":"LatestPosts.svelte","sources":["LatestPosts.svelte"],"sourcesContent":["<script lang=\\"ts\\">import BlogPost from \\"./BlogPost.svelte\\";\\nimport { getSortedPosts } from \\"../getSortedPosts\\";\\nimport { page } from \\"$app/stores\\";\\nexport let category;\\nlet posts = [];\\n$: {\\n  posts = getSortedPosts(\\n    category.posts,\\n    $page.params.category === \\"system-design\\"\\n  );\\n}\\n<\/script>\\n\\n{#if posts.length === 0}\\n\\t<img src=\\"/images/empty.png\\" alt=\\"Empty posts\\" class=\\"empty-image\\" />\\n{:else}\\n\\t{#each posts as post (post.id)}\\n\\t\\t<BlogPost {post} />\\n\\t{/each}\\n{/if}\\n\\n<style lang=\\"scss\\">.empty-image {\\n  width: 50%;\\n  margin-top: 32px;\\n}</style>\\n"],"names":[],"mappings":"AAqBmB,2BAAa,CAC9B,KAAK,CAAE,GAAG,CACV,UAAU,CAAE,IACd"}'
};
const LatestPosts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { category } = $$props;
  let posts = [];
  if ($$props.category === void 0 && $$bindings.category && category !== void 0)
    $$bindings.category(category);
  $$result.css.add(css);
  {
    {
      posts = getSortedPosts(category.posts, $page.params.category === "system-design");
    }
  }
  $$unsubscribe_page();
  return `${posts.length === 0 ? `<img src="/images/empty.png" alt="Empty posts" class="empty-image svelte-1men5up">` : `${each(posts, (post) => {
    return `${validate_component(BlogPost, "BlogPost").$$render($$result, { post }, {}, {})}`;
  })}`}`;
});
export {
  LatestPosts as L
};
