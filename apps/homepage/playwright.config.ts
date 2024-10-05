import { defineConfig, devices, PlaywrightTestConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig(<PlaywrightTestConfig>{
	testMatch: '**/*.spec.ts',
	testDir: 'e2e',
	outputDir: 'e2e-results',
	retries: 2,

	reporter: [
		['list'],
		[
			'playwright-qase-reporter',
			{
				mode: process.env.TESTING_REPOSITORY_MODE,
				debug: false,
				testops: {
					api: {
						token: process.env.TESTING_REPOSITORY_API_TOKEN
					},
					project: process.env.TESTING_REPOSITORY_API_PROJECT_CODE,

					uploadAttachments: true,
					run: {
						title: `${new Date().toDateString()} Test Run`,
						complete: true
					}
				}
			}
		]
	],

	use: {
		baseURL: process.env.TESTING_URL,
		screenshot: 'only-on-failure',
		video: 'retain-on-failure'
	},
	...(process.env.TESTING_URL?.startsWith('https')
		? {
				webServer: {
					command: 'npm run dev',
					url: process.env.TESTING_URL,
					reuseExistingServer: false
				}
			}
		: {}),
	projects: [
		{ name: 'Desktop Chrome', use: devices['Desktop Chrome'] },
		{ name: 'Desktop Firefox', use: devices['Desktop Firefox'] },
		{ name: 'Desktop Safari', use: devices['Desktop Safari'] }
	]
});
