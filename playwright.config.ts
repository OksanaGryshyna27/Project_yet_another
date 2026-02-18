import { defineConfig, devices } from '@playwright/test';
import { BASE_URL } from './config/baseConfig';



/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html'],
    ['dot'],
    ['json', { outputFile: 'test-results.json' }],
    [
      '@testomatio/reporter/playwright',
      {
        apiKey: process.env.TESTOMATIO,
      },
    ],
    ['@reportportal/agent-js-playwright', {
      endpoint: process.env.RP_ENDPOINT,
      token: process.env.RP_TOKEN,
      project: process.env.RP_PROJECT,
      launch: 'Playwright Launch',
      description: 'Automated tests',
      attributes: [
        { key: 'env', value: 'local' }
      ]
    }],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  testIgnore: [
    'tests/login-using-file.spec.ts',
    'tests/auth-setup.spec.ts',
    'tests/verifyLoggedInUserWithFixtures.spec.ts',
    'tests/verifyLogin.spec.ts'
  ],
  use: {
     // Capture screenshot after each test failure.
    screenshot: 'only-on-failure',

    // Record trace only when retrying a test for the first time.
    trace: 'on-first-retry',

    // Record video only when retrying a test for the first time.
    video: 'on-first-retry',

    "testIdAttribute": "data-test",
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: BASE_URL,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        browserName: 'chromium',
      },
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },
    

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
  

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
