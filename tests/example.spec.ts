import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect the title to contain a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // Click the Get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expect the Installation heading to be visible.
  await expect(
    page.getByRole('heading', { name: 'Installation' }),
  ).toBeVisible();
});