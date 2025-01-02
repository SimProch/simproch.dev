import { base } from './base';
import { posts as systemDesign } from './posts/system-design/system-design';
import { posts as dataStructuresAndAlgorithms } from './posts/data-structures-and-algorithms/data-structures-and-algorithms';
import type { Post } from './posts/types';

const Contents = base;

base['system-design'].posts = systemDesign;
base['data-structures-and-algorithms'].posts = dataStructuresAndAlgorithms;

const posts = [systemDesign, dataStructuresAndAlgorithms];

export const getTagsFromPosts = (posts: Post[] | Post[][]) => {
	return Array.from(
		new Set(
			posts
				.flat()
				.map((i) => i.tags)
				.flat()
		)
	).sort((x, y) => x.localeCompare(y));
};

const tags = getTagsFromPosts(posts);

const nav: Array<{ path: string; name: string }> = [];
if (systemDesign.length !== 0) {
	nav.push({ path: 'system-design', name: base['system-design'].title });
}
if (systemDesign.length !== 0) {
	nav.push({
		path: 'data-structures-and-algorithms',
		name: base['data-structures-and-algorithms'].title
	});
}

export { Contents, nav, tags, posts };
