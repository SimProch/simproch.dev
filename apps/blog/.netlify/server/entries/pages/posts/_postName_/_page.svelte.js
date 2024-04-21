import { c as create_ssr_component, v as validate_component, m as missing_component } from "../../../../chunks/ssr.js";
import { B as Body } from "../../../../chunks/Body.js";
import { M as Meta } from "../../../../chunks/Meta.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let component;
  let contents = void 0;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        component = data.component;
      }
    }
    $$rendered = `${contents ? `${validate_component(Meta, "Meta").$$render(
      $$result,
      {
        title: contents.title,
        keywords: contents.tags.join(", "),
        description: contents.description
      },
      {},
      {}
    )}` : ``} ${validate_component(Body, "Body").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(component || missing_component, "svelte:component").$$render(
          $$result,
          { contents },
          {
            contents: ($$value) => {
              contents = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
