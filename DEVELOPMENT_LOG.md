# Development log

## 2026-11-04

- Set up Node.js, npm, Playwright Test, and the Playwright browsers.
- The initial Playwright suite passed: 6 of 6 runs.
- Opened the Playwright Inspector and stepped through both example tests in Chromium.
- Tried an additional title check against example.com. Chromium and Firefox passed, but WebKit could not verify the site's SSL certificate. Removed this external-site test.
- Final cross-browser run: 6 of 6 passed in 2.5 seconds. This covers two tests in Chromium, Firefox, and WebKit.
- `npm install --package-lock-only` completed with 0 reported vulnerabilities.
- Corrected the npm project name to `playwright-learning`.
- Initialized a local Git repository on `main` and created the first commit.
- Pushed the project to the public GitHub repository `alexpallex/playwright-learning`.

## Current tests

- `has title`: checks that the Playwright page title contains “Playwright”.
- `get started link`: follows the “Get started” link and checks that the “Installation” heading appears.

## Local to-do app and Playwright test

- Created `todo-app.html` as a small local practice page.
- Added a Playwright test that adds a task and checks that it appears in the list.
- Verified the test in Chromium: 3 tests passed.
- Verified the full browser run: 9 tests passed across Chromium, Firefox, and WebKit.

### Cross-platform file path fix

- The first GitHub Actions run could not find `todo-app.html` because its file URL used a Windows-only path.
- Updated the test to build the file URL from the test file's location so it works on Windows and Linux.
- Added `tsconfig.json` with Node16 module settings for Node.js type support.
- Local verification: 3 tests passed in Chromium; all 9 tests passed across Chromium, Firefox, and WebKit.
- GitHub Actions verification after the fix passed on 2026-11-05 (9 of 9 browser tests).