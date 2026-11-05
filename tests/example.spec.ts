import { test, expect } from '@playwright/test';
import * as path from 'node:path';
import { pathToFileURL } from 'node:url';

const todoAppUrl = pathToFileURL(
  path.resolve(__dirname, '../todo-app.html'),
).href;

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(
    page.getByRole('heading', { name: 'Installation' }),
  ).toBeVisible();
});

test('adds a task to the list', async ({ page }) => {
  await page.goto(todoAppUrl);
  await page.getByRole('textbox', { name: 'New task' }).fill('Learn Playwright');
  await page.getByRole('button', { name: 'Add task' }).click();
  await expect(page.getByRole('listitem')).toHaveText('Learn Playwright');
  await expect(
    page.getByRole('textbox', { name: 'New task' }),
  ).toHaveValue('');
});