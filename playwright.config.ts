import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  globalSetup: 'globalSetapTest.ts',
  // globalTeardown: 'global-setup.ts',
  testMatch: '**.spec.ts',
  use: {
    headless: false,
    baseURL: process.env.BASE_URL,
    httpCredentials: {
      username: process.env.USER_NAME!,
      password: process.env.USER_PASS!
    },
    trace: 'on',
   // testIdAttribute: 'qa-dont-touch'
  },
  projects: [

    /*
    {
      name: 'login',
      testDir: './tests/setup',
      testMatch: 'login.setup.ts',
      use: { ...devices['Desktop Chrome'] }
    }, 
    {
      name: 'example',
      testDir: './tests/storage',
      testMatch: '**.spec.ts',
      use: { 
        ...devices['Desktop Chrome'],
        storageState: 'session-storage.json'
      },
     dependencies: ['login']
    }, */
    /*{
      name: 'fixtures',
      testDir: './tests/fixture',
      testMatch: '**.spec.ts',
      use: { ...devices['Desktop Chrome'] }
    }, */

      {
      name: 'api-tests',
      testDir: './tests/api',
      testMatch: '**.spec.ts',
      use: { ...devices['Desktop Chrome'] }
    }, 
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});