import { defineConfig, devices } from '@playwright/test';
import { TestConfig } from './test.config';
const configTest=new TestConfig();
export default defineConfig({
  timeout: 30 * 1000,

  testDir: './tests',

  fullyParallel: true,

  retries: 0,

  workers: 1,

  reporter: [
    ['html'],
    ['allure-playwright'],
    ['list']
  ],

  use: {
    baseURL:configTest.appUrl,
    trace: 'on-first-retry',

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    viewport: {
      width: 1280,
      height: 720
    },

    ignoreHTTPSErrors: true,

    permissions: ['geolocation']
  },

  projects: [
    {
      name: 'chromium',

      use: {
        ...devices['Desktop Chrome']
      }
    }
  ]
});