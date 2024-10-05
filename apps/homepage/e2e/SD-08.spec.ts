import { expect, test } from '@playwright/test';
import { qase } from 'playwright-qase-reporter';

test(qase(8, 'Page is accessible'), async ({ page }) => {
	await page.goto('/');
	const header = page.getByRole('heading', { level: 1 });
	expect(header).toHaveText('Hi, I’m Simon');
});
