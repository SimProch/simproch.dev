import type { Post } from '../types';
import gitCliBasicCommands from './git-cli-basic-commands.json';
import letsTalkPromisesp1 from './lets-talk-promises-part-1.json';
import letsTalkPromisesp2 from './lets-talk-promises-part-2.json';
import xRay from './x-ray-effect-with-html.json';
import multipleWindowScene from './multiple-window-scene.json';

const posts = [
	gitCliBasicCommands,
	letsTalkPromisesp1,
	letsTalkPromisesp2,
	xRay,
	multipleWindowScene
] as unknown[] as Post[];
export { posts };
