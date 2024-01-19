
const { test, expect } = require('@playwright/test');

test('ラクスのサイトが表示されているか', async ({ page }) => {
    // Google検索エンジンを開く
    await page.goto('https://www.google.com/');
    // 検索欄に「株式会社ラクス」を入力
    await page.getByRole('combobox', { name: '検索' }).click();
    await page.getByRole('combobox', { name: '検索' }).fill('株式会社ラクス');
    // Enterを押す
    await page.getByRole('combobox', { name: '検索' }).press('Enter');
    // 検索結果から公式サイトをクリック
    await page.getByRole('link', { name: '企業の成長を支援するクラウドサービス | 株式会社ラクス ラクス https://www.rakus.co.jp' }).click();
    // テスト：公式サイトが表示されているか
  
  })