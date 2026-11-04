# Playwright Test Learning Project

A small TypeScript project for learning Playwright end-to-end testing.

## Requirements

- Node.js and npm

## Install

Run these commands in the VS Code terminal:

- `npm ci`
- `npx playwright install`

## Run the tests

- Full browser suite: `npx playwright test`
- Chromium only: `npx playwright test --project=chromium`
- Open the latest HTML report: `npx playwright show-report`

## Tests

The suite checks that the Playwright website title contains “Playwright” and that the “Get started” link opens a page with the “Installation” heading.

The tests run in Chromium, Firefox, and WebKit.

## GitHub Actions

The workflow in `.github/workflows/playwright.yml` runs on pushes and pull requests to `main` or `master`. It saves the HTML report as a downloadable workflow artifact for 30 days.

Open the repository's Actions tab to view the CI result and download its report.

## Latest local verification

2026-11-04: 6 of 6 runs passed across Chromium, Firefox, and WebKit.
