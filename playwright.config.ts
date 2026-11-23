import { defineConfig, devices } from '@playwright/test';

const executablePath = process.env.VANTZ_CHROMIUM_PATH;
const launchOptions = executablePath ? { executablePath } : {};
const externalServer = process.env.VANTZ_TEST_BASE_URL;
const baseURL = externalServer ?? 'http://127.0.0.1:4182';

export default defineConfig({
  testDir: './tests',
  timeout: 240_000,
  fullyParallel: true,
  workers: 2,
  reporter: [['list'], ['json', { outputFile: 'test-results/audit.json' }]],
  use: {
    baseURL,
    launchOptions,
    trace: 'retain-on-failure',
  },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 900 } } },
    { name: 'mobile', use: { ...devices['Pixel 5'], viewport: { width: 320, height: 760 } } },
  ],
  webServer: externalServer ? undefined : {
    command: 'npm run preview -- --host 127.0.0.1 --port 4182 --strictPort',
    url: baseURL,
    timeout: 25_000,
  },
});
