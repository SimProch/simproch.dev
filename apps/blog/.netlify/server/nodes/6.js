import * as universal from '../entries/pages/posts/_postName_/_page.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_postName_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/posts/[postName]/+page.ts";
export const imports = ["_app/immutable/nodes/6.D8kHS9le.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.j8Q4ZHqI.js","_app/immutable/chunks/index.3m-X-Tz6.js","_app/immutable/chunks/Body.Ca_J4d3c.js","_app/immutable/chunks/Meta.Dikj_nCg.js"];
export const stylesheets = ["_app/immutable/assets/Body.Cv9OCNJq.css","_app/immutable/assets/x-ray-effect-with-html.DdNkDRMX.css"];
export const fonts = [];
