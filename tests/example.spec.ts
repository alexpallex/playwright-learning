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

test('does not add an empty task', async ({ page }) => {
  await page.goto(todoAppUrl);

  const taskInput = page.getByRole('textbox', { name: 'New task' });
  await page.getByRole('button', { name: 'Add task' }).click();

  const isValid = await taskInput.evaluate(
    (element) => (element as HTMLInputElement).validity.valid,
  );

  expect(isValid).toBe(false);
  await expect(
    page.getByRole('list', { name: 'Tasks' }).getByRole('listitem'),
  ).toHaveCount(0);
});