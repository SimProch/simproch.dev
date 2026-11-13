import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-netlify';

export default defineConfig({
	plugins: [
		sveltekit({
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
			adapter: adapter({
				edge: false,
				split: true
			}),
			alias: {
				'src/*': './src/*'
			}
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	build: {
		commonjsOptions: {
			include: [/@simproch-dev-ui/, /node_modules/]
		}
	}
});
