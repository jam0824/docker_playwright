import { chromium } from 'playwright';
const { test, expect } = require('@playwright/test');

test('ラクスのサイトが表示されているか', async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.google.com');
  const title = await page.title();
  console.log(title);
  await browser.close();
});