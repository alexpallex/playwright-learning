# Development log

## 2026-11-04

- Set up Node.js, npm, Playwright Test, and the Playwright browsers.
- The initial Playwright suite passed: 6 of 6 runs.
- Opened the Playwright Inspector and stepped through both example tests in Chromium.
- Tried an additional title check against example.com. Chromium and Firefox passed, but WebKit could not verify the site's SSL certificate. Removed this external-site test.
- Final cross-browser run: 6 of 6 passed in 2.5 seconds. This covers two tests in Chromium, Firefox, and WebKit.
- `npm install --package-lock-only` completed with 0 reported vulnerabilities.
- Corrected the npm project name to `playwright-learning`.
- Initialized a local Git repository on `main`. No remote has been added and nothing has been uploaded yet.

## Current tests

- `has title`: checks that the Playwright page title contains “Playwright”.
- `get started link`: follows the “Get started” link and checks that the “Installation” heading appears.