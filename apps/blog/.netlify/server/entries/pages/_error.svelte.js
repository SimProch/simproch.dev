import { c as create_ssr_component, g as subscribe, e as escape } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h2 data-svelte-h="svelte-154rtli">An error occured</h2> <p>${escape(JSON.stringify($page.error))}</p>`;
});
export {
  Error as default
};
