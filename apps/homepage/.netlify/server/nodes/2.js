

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.C6qiRyLw.js","_app/immutable/chunks/scheduler.CszYcmUU.js","_app/immutable/chunks/index.BDdUIQCS.js","_app/immutable/chunks/entry.CaXt8yT6.js"];
export const stylesheets = ["_app/immutable/assets/TitleBlock.Bv67cU6B.css","_app/immutable/assets/Company.B_SY1GJM.css"];
export const fonts = [];
