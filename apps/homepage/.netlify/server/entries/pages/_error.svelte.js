import { c as create_ssr_component } from "../../chunks/ssr.js";
import "../../chunks/client.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 data-svelte-h="svelte-1l179n3">An error occured. Attempting to redirect to home page...</h2>`;
});
export {
  Error as default
};
