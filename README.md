# POM-scripts

A Playwright automation testing project using the Page Object Model (POM) design pattern for scalable and maintainable test scripts.

## Overview

This project contains automated end-to-end tests using **Playwright** with the **Page Object Model** pattern. The POM approach separates test logic from page interactions, making tests more maintainable and reusable.

## Project Structure

```
POM-scripts/
├── pages/                          # Page Object Models
│   ├── Dashboardpage.js            # Dashboard page object
│   ├── demohomepage.js             # Demo home page object
│   ├── demopage.js                 # Demo page object
│   └── loginpageORANGEHRM.js        # ORANGEHRM login page object
├── tests/                          # Test specifications
│   ├── damologinpage.spec.js        # Damo login tests
│   ├── example.spec.js              # Example tests
│   ├── login.spec.js                # Login tests
├── tests-examples/                 # Example test files
│   └── demo-todo-app.spec.js        # Demo todo app tests
├── playwright-report/              # Test execution reports
├── test-results/                   # Test result artifacts
├── playwright.config.js             # Playwright configuration
├── package.json                    # Project dependencies
└── README.md                       # This file
```

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd POM-scripts
```

2. Install dependencies:
```bash
npm install
```

This will install:
- **@playwright/test** - Playwright testing framework
- **@types/node** - TypeScript types for Node.js

## Project Dependencies

- **@playwright/test**: ^1.54.2 - Playwright testing framework
- **@types/node**: ^24.3.0 - TypeScript type definitions

## Configuration

Playwright is configured via `playwright.config.js`. You can customize:
- Browsers to use (Chromium, Firefox, WebKit)
- Base URL
- Timeout settings
- Screenshot/video capture options
- Reporter configuration

## Usage

### Running Tests

```bash
# Run all tests
npx playwright test

# Run tests in a specific file
npx playwright test login.spec.js

# Run tests with UI mode (interactive)
npx playwright test --ui

# Run tests in headed mode (see browser)
npx playwright test --headed

# Run tests for a specific browser
npx playwright test --project=chromium
```

### Debugging Tests

```bash
# Run with debug mode
npx playwright test --debug

# Generate trace files for investigation
npx playwright test --trace on
```

### View Test Reports

```bash
# View HTML report
npx playwright show-report
```

## Page Object Model Pattern

Each page is represented as a class with:
- **Page elements** as properties
- **Actions** as methods
- **Assertions** for validation

### Example Page Object Structure

```javascript
// pages/loginpage.js
class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
```

### Using Page Objects in Tests

```javascript
// tests/login.spec.js
import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginpage';

test('successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('https://example.com');
  await loginPage.login('user@example.com', 'password');
  // Add assertions
});
```

## Test Files

- **login.spec.js** - Tests for authentication flows
- **damologinpage.spec.js** - Damo login page tests
- **example.spec.js** - Basic example tests
- **demo-todo-app.spec.js** - Demo todo application tests

## Best Practices

1. ✅ Use Page Object Models for page interactions
2. ✅ Keep selectors and actions separate
3. ✅ Use meaningful test descriptions
4. ✅ Avoid hard-coded wait times; use Playwright's auto-wait
5. ✅ Organize tests by feature or page
6. ✅ Use descriptive variable and method names
7. ✅ Implement proper error handling

## Troubleshooting

**Tests timeout:**
- Increase timeout in `playwright.config.js`
- Check if selectors are correct

**Selectors not found:**
- Use `--debug` mode to inspect elements
- Verify selectors with browser dev tools

**Flaky tests:**
- Use proper waits instead of hard `sleep()`
- Use `waitForLoadState()` when needed
- Ensure elements are stable before interaction

## Contributing

1. Create a new feature branch
2. Add test cases in the appropriate spec file
3. Update page objects if new pages are tested
4. Run tests locally before committing
5. Ensure all tests pass

## Support

For issues or questions, refer to:
- [Playwright Documentation](https://playwright.dev)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)

---

**Last Updated:** January 2026
