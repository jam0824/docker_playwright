import { chromium } from 'playwright';
const { test, expect } = require('@playwright/test');

test('テスターちゃんのサイトが表示されるか', async() => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await browser.newPage();
    await page.goto('https://testerchan.hatenadiary.com/');
    await page.screenshot({ path: `images/test.png` })
    const title = await page.title();
    console.log(title);
    expect(title).toBe('テスターちゃん【4コマ漫画】');
    await page.waitForTimeout(5000);
    await browser.close();
})

