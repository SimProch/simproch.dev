import type { Post } from './posts/types';

export type Heading = { title: string; subtitle: string; breadcrumbs?: string };
export type Category = Heading & {
	posts?: Post[];
};

export type CategoryId = 'system-design' | 'data-structures-and-algorithms';

export const base = {
	'system-design': {
		title: 'System Design'
	} as Category,
	'data-structures-and-algorithms': {
		title: 'Data Structures and Algorithms'
	} as Category
};
