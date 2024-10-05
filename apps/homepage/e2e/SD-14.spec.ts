import { expect, test } from '@playwright/test';
import { qase } from 'playwright-qase-reporter';

test(qase(14, 'User can navigate between pages'), async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'About' }).click();
	page.getByRole('heading', { name: 'About me' });
	await page.getByRole('link', { name: 'Experience' }).click();
	page.getByRole('heading', { name: 'My experience' });
});
