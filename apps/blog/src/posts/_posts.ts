import type { Post } from './_types';
import gitCliBasicCommands from './git-cli-basic-commands.json';
import letsTalkPromisesp1 from './lets-talk-promises-part-1.json';
import letsTalkPromisesp2 from './lets-talk-promises-part-2.json';
import xRay from './x-ray-effect-with-html.json';
import multipleWindowScene from './multiple-window-scene.json';

const unsortedPosts = [
	gitCliBasicCommands,
	letsTalkPromisesp1,
	letsTalkPromisesp2,
	xRay,
	multipleWindowScene
];

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

const getSortedPosts = (posts: Post[] | undefined, reverse = false): Post[] => {
	const sortedPosts = [...(posts ?? [])]?.sort((x, y) => {
		if (y.date === x.date) {
			return y.id.localeCompare(x.id);
		}
		return +getDateObjFromString(y.date) - +getDateObjFromString(x.date);
	});

	if (reverse) return sortedPosts.reverse();
	return sortedPosts;
};

export const posts: Post[] = getSortedPosts(unsortedPosts);
