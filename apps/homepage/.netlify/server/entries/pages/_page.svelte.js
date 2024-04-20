import { c as create_ssr_component } from "../../chunks/ssr.js";
/* empty css                                                    */
import "../../chunks/client.js";
/* empty css                                                 */
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<template lang="pug">Home
	About
	Experience</template>`;
});
export {
  Page as default
};
