import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {

	extensions: ['.svelte', '.svx'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.svx'],
			highlight: {
				alias: {
					js: 'javascript',
					ts: 'typescript'
				}
			}
		})
	],

	kit: {
		adapter: adapter({
			edge: false,
			split: true
		}),
		alias: {
			'src/*': './src/*'
		}
	}
};

export default config;
