import { error } from '@sveltejs/kit';

const getSlugFromFilename = (path: string) =>
	path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;

export const load = async ({ params }) => {
	const modules = import.meta.glob(`/src/contents/posts/**/*.svx`);
	let match: { path?: string; resolver?: MdsvexResolver } = {};
	for (const [path, resolver] of Object.entries(modules)) {
		if (getSlugFromFilename(path) === params.postName) {
			match = { path, resolver: resolver as MdsvexResolver };
			break;
		}
	}
	const post = await match?.resolver?.();
	if (!post) {
		throw error(404);
	}


	return {
		component: post.default
	};
};
