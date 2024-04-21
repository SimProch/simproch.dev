import type { Post } from './posts/types';

export type Heading = { title: string; subtitle: string; breadcrumbs?: string };
export type Category = Heading & {
	posts?: Post[];
};
type Social = {
	name: string;
	linkTo: string;
};
type Footer = Heading & {
	socials: Social[];
};

export type CategoryId = 'development' | 'system-design' | 'data-structures-and-algorithms';

export const base = {
	home: {
		title: "Hi, I'm Simon"
	} as Category,
	development: {
		title: 'Development'
	} as Category,
	'system-design': {
		title: 'System Design'
	} as Category,
	'data-structures-and-algorithms': {
		title: 'System Design'
	} as Category,
	tags: {
		title: 'Tags',
		subtitle: 'Filter on posts by tags'
	}
};
