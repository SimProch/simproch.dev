import type { Post } from './posts/types';
import { posts as systemDesign } from './posts/system-design/system-design';
import { posts as dataStructuresAndAlgorithms } from './posts/data-structures-and-algorithms/data-structures-and-algorithms';

export type Heading = { title: string };
export type Category = Heading & {
	posts: Post[];
};

export type CategoryId = 'system-design' | 'data-structures-and-algorithms';

export const base: { [key in CategoryId]: Category } = {
	'system-design': {
		title: 'System Design',
		posts: systemDesign.sort((x, y) => x.order - y.order)
	},
	'data-structures-and-algorithms': {
		title: 'Data Structures and Algorithms',
		posts: dataStructuresAndAlgorithms.sort((x, y) => x.order - y.order)
	}
};
