import { expect, test } from '@playwright/test';
import { qase } from 'playwright-qase-reporter';

test(qase(15, 'User can navigate between pages'), async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'Know more' }).first().click();
	const levelHeader = page.getByRole('heading', { level: 1 });
	await expect(levelHeader).toHaveText('Level.works');
	await page.getByRole('link', { name: 'Go back' }).click();
	await page.getByRole('link', { name: 'Know more' }).nth(1).click();
	const logexHeader = page.getByRole('heading', { level: 1 });
	await expect(logexHeader).toHaveText('LOGEX Solution Centre');
	await page.getByRole('link', { name: 'Go back' }).click();
	await page.getByRole('link', { name: 'Know more' }).nth(2).click();
	const gfaHeader = page.getByRole('heading', { level: 1 });
	await expect(gfaHeader).toHaveText('Green fox academy');
	await page.getByRole('link', { name: 'Go back' }).click();
});
