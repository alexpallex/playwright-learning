import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Kontrollera att sidtiteln innehåller Playwright.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Klicka på länken Get started.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Kontrollera att installationsrubriken visas.
  await expect(
    page.getByRole('heading', { name: 'Installation' }),
  ).toBeVisible();
});

test('adds a task to the list', async ({ page }) => {
  await page.goto('file:///C:/Projects/Playwright/todo-app.html');

  await page.getByRole('textbox', { name: 'New task' }).fill('Learn Playwright');
  await page.getByRole('button', { name: 'Add task' }).click();

  await expect(page.getByRole('listitem')).toHaveText('Learn Playwright');
  await expect(
    page.getByRole('textbox', { name: 'New task' }),
  ).toHaveValue('');
});