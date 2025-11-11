import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import dotenv, { config } from 'dotenv';
import path from 'path';
import { json } from 'stream/consumers';
dotenv.config({ path: path.resolve(__dirname, '.env.qa') });

console.log(process.env.TEST_ENV)
config()

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests/garage',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  /*reporter: [
     ['list'],
     ['html', {open:'never'}],
     ['json', { outputFile: 'reports/results.json' }]
  ], */
    reporter: [
        ['list'],
        ['html', {open:'never'}],
        ['monocart-reporter', {  
            name: "My Test Report",
            outputFile: './monocart-report/index.html'
        }]
    ],
 // testIgnore: '**.skip.spec.ts',
  testMatch: '**.spec.ts',
 //  outputDir: 'res',
  globalSetup: 'globalSetapTest.ts',
  globalTeardown: 'globalTeardownTest.ts',
  //grep: new RegExp('has title'),
  timeout: 60 * 1000,
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
  baseURL: process.env.BASE_URL,
  httpCredentials: {
                  username: process.env.USER_NAME!,
                  password: process.env.USER_PASS!
                              },

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    video: 'retain-on-failure',
    screenshot: 'on-first-failure',
    headless: false,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'qauto',
      //testDir: './tests/qauto',
      testMatch: '**.spec.ts',
      //grep: new RegExp('@smoke'),
      use: {
        testIdAttribute: 'data-pw',
        headless: false,
        baseURL: process.env.BASE_URL,
            httpCredentials: {
                  username: process.env.USER_NAME!,
                  password: process.env.USER_PASS!
                              },
    trace: 'on',
      },
    },
/*
  {
      name: 'regression',
      //grep: new RegExp('@smoke'),
     // testDir: './tests/regression',
      //testMatch: '**.regression.spec.ts',
      use: { 
        ...devices['Desktop Firefox'] 
      },
    },
 /* 
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    }, */

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
