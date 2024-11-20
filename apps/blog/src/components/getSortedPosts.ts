import type { Post } from 'src/posts/_types';

const getDateObjFromString = (date: string) => {
	const arr = date
		.split('.')
		.map((datum, i) => {
			if (i === 1) {
				return +datum.trim() - 1;
			}
			return +datum.trim();
		})
		.reverse();
	return new Date(arr[0], arr[1], arr[2]);
};

export const getSortedPosts = (posts: Post[] | undefined, reverse = false): Post[] => {
	const sortedPosts = [...(posts ?? [])]
		?.sort((x, y) => {
			if (y.date === x.date) {
				return y.id.localeCompare(x.id);
			}
			return +getDateObjFromString(y.date) - +getDateObjFromString(x.date);
		})

	if (reverse) return sortedPosts.reverse();
	return sortedPosts;
};
