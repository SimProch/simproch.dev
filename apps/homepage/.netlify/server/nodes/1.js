

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CoiZYgS3.js","_app/immutable/chunks/scheduler.CC5rdfI7.js","_app/immutable/chunks/index.BPwNn6vj.js","_app/immutable/chunks/entry.CdEJCCdd.js"];
export const stylesheets = [];
export const fonts = [];
