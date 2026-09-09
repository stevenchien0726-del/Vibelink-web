// Run against `npm run start -- --port 3100` with Playwright available in NODE_PATH.
// Uses the installed Edge browser; no browser download or app dependency required.
/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS resolves the external Playwright runtime through NODE_PATH. */
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const base = process.env.ROADMAP_BASE_URL || 'http://localhost:3100';
const output = process.env.ROADMAP_SCREENSHOTS;
const route = '/vibelink/cute-campus-roadmap';

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  try {
    for (const width of [375, 390, 430, 1440]) {
      const page = await browser.newPage({ viewport: { width, height: width > 500 ? 1000 : 844 }, reducedMotion: 'reduce' });
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
      assert.equal((await page.goto(base)).status(), 200);
      await page.getByRole('button', { name: 'MENU', exact: true }).click();
      const menuLink = page.getByRole('link', { name: '中國科大 Campus RoadMap', exact: true });
      await menuLink.waitFor({ state: 'visible' });
      assert(await menuLink.isVisible());
      const menu = await page.locator('#home-menu').boundingBox();
      assert(menu.x >= 0 && menu.x + menu.width <= width && menu.y + menu.height <= 844 + (width > 500 ? 156 : 0));
      if (output) { fs.mkdirSync(output, { recursive: true }); await page.screenshot({ path: path.join(output, `menu-${width}.png`) }); }
      await menuLink.click();
      await page.waitForURL(`**${route}`);
      await page.getByRole('heading', { level: 1 }).waitFor();
      assert.equal(await page.locator('h1').count(), 1);
      assert.equal(await page.locator('section[id^="step-"]').count(), 5);
      assert.equal(await page.locator('html').evaluate(el => getComputedStyle(el).scrollBehavior), 'auto');
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
      const overflow = await page.locator('main *').evaluateAll(elements => elements.filter(el => {
        const box = el.getBoundingClientRect();
        return box.width && (box.left < -1 || box.right > innerWidth + 1);
      }).map(el => el.tagName + '.' + el.className));
      assert.deepEqual(overflow, []);
      if (output) await page.screenshot({ path: path.join(output, `roadmap-${width}.png`), fullPage: true });
      await page.getByRole('link', { name: '開始 RoadMap' }).click();
      assert.equal(new URL(page.url()).hash, '#step-1');
      await page.getByRole('link', { name: '下一關 →', exact: true }).click();
      assert.equal(new URL(page.url()).hash, '#step-2');
      assert.match(await page.getByRole('link', { name: 'App Store 下載' }).getAttribute('href'), /apps\.apple\.com\/tw\/app\/vibelink-social\/id6778701913/);
      assert.equal(await page.getByRole('link', { name: 'Google Play 下載' }).count(), 0);
      await page.getByRole('link', { name: '準備好了 →' }).click();
      await page.getByRole('link', { name: '完成 → 前往下一關' }).click();
      assert.equal(new URL(page.url()).hash, '#step-4');
      assert(await page.getByText('@cute.edu.tw', { exact: true }).last().isVisible());
      if (output) await page.screenshot({ path: path.join(output, `atomic-${width}.png`) });
      await page.getByRole('link', { name: '我加入了 →' }).click();
      await page.getByRole('link', { name: '🚀 啟動 AI Radar' }).click();
      assert.equal(new URL(page.url()).hash, '#step-2');
      const complete = page.locator('summary').filter({ hasText: '我完成第一次探索了' });
      await complete.focus();
      await page.keyboard.press('Enter');
      assert(await page.getByRole('heading', { name: 'CUTE RoadMap Complete' }).isVisible());
      await page.locator('summary').filter({ hasText: '探索 Home' }).click();
      assert(await page.getByText('打開 App，看看最新生活貼文。', { exact: true }).isVisible());
      if (output) { await complete.scrollIntoViewIfNeeded(); await page.screenshot({ path: path.join(output, `complete-${width}.png`) }); }
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
      assert.deepEqual(errors, []);
      await page.close();
      console.log(`PASS ${width}px: MENU navigation, five steps, anchors, links, keyboard completion, overflow, console`);
    }
    const page = await browser.newPage();
    for (const pathname of ['/', '/vibelink', '/about', '/vibe-tv', '/vibe-membership', '/vibe-ecosystem', '/investor', '/privacy', '/delete-account', '/child-safety', route]) {
      assert.equal((await page.goto(base + pathname)).status(), 200, pathname);
    }
    await page.emulateMedia({ reducedMotion: 'no-preference' });
    assert.equal(await page.locator('html').evaluate(el => getComputedStyle(el).scrollBehavior), 'smooth');
    console.log('PASS all 11 public routes HTTP 200; default smooth scroll / reduced-motion override');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
