import { base } from './base';
import { posts as development } from './posts/development/development';
import { posts as systemDesign } from './posts/system-design/system-design';
import { posts as dataStructuresAndAlgorithms } from './posts/data-structures-and-algorithms/data-structures-and-algorithms';
import type { Post } from './posts/types';

const Contents = base;

base.development.posts = development;
base['system-design'].posts = systemDesign;
base['data-structures-and-algorithms'].posts = dataStructuresAndAlgorithms;

const posts = [development, systemDesign, dataStructuresAndAlgorithms];

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

base.home.posts = posts.flat();

const nav: Array<{ path: string; name: string }> = [];
if (development.length !== 0) nav.push({ path: 'development', name: base.development.title });
if (systemDesign.length !== 0) {
	nav.push({ path: 'system-design', name: base['system-design'].title });
}
if (nav.length > 0) nav.push({ path: 'tags', name: base.tags.title });

export { Contents, nav, tags, posts };
