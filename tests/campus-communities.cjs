// Supplements campus-roadmap.cjs with native clipboard and clean review screenshots.
/* eslint-disable @typescript-eslint/no-require-imports */
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const base = process.env.ROADMAP_BASE_URL || 'http://localhost:3100';
const output = process.env.ROADMAP_SCREENSHOTS;

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  try {
    console.log(`Browser: Edge ${browser.version()}`);
    for (const width of [375, 390, 430, 768, 1440]) {
      const context = await browser.newContext({ viewport: { width, height: 1000 }, reducedMotion: 'reduce' });
      await context.grantPermissions(['clipboard-read', 'clipboard-write'], { origin: base });
      const page = await context.newPage();
      await page.goto(base + '/vibelink/cute-campus-roadmap#step-6');
      const section = page.locator('#step-6');
      for (const category of ['遊戲', '興趣']) {
        await section.getByRole('button', { name: category, exact: true }).click();
        const overflow = await section.locator('*').evaluateAll(elements => elements.filter(el => {
          const box = el.getBoundingClientRect();
          return box.width && (box.left < -1 || box.right > innerWidth + 1);
        }).map(el => el.tagName + '.' + el.className));
        assert.deepEqual(overflow, []);
        const cards = section.locator('#community-cards > li');
        const a = await cards.nth(0).boundingBox(), b = await cards.nth(1).boundingBox();
        assert(width === 1440 ? Math.abs(a.y - b.y) < 1 : b.y > a.y, 'responsive column count');
        for (const control of await section.locator('button, a').all()) {
          await control.scrollIntoViewIfNeeded();
          const box = await control.boundingBox();
          assert(box.width >= 44 && box.height >= 44);
          assert(await control.evaluate(el => {
            const b = el.getBoundingClientRect();
            return el.contains(document.elementFromPoint(b.x + b.width / 2, b.y + b.height / 2));
          }), 'control is obscured');
        }
        if (output && [390, 1440].includes(width)) {
          fs.mkdirSync(output, { recursive: true });
          await section.screenshot({ path: path.join(output, `review-step6-${category === '遊戲' ? 'games' : 'interests'}-${width}.png`) });
          await section.scrollIntoViewIfNeeded();
          await page.evaluate(() => document.querySelector('#step-6').scrollIntoView());
          await page.screenshot({ path: path.join(output, `review-viewport-${category === '遊戲' ? 'games' : 'interests'}-${width}.png`) });
        }
      }
      await section.getByRole('button', { name: '遊戲', exact: true }).click();
      await section.getByRole('button', { name: '複製標籤 @leagueoflegends', exact: true }).focus();
      await page.keyboard.press('Enter');
      await section.getByRole('status').filter({ hasText: '已複製 @leagueoflegends' }).waitFor();
      assert.equal(await page.evaluate(() => navigator.clipboard.readText()), '@leagueoflegends');
      await page.emulateMedia({ reducedMotion: 'no-preference' });
      const rocket = page.locator('nav span').filter({ has: page.locator('svg') });
      assert(await rocket.evaluate(el => getComputedStyle(el).offsetPath !== 'none' && el.getAnimations().some(animation => animation.playState === 'running')));
      await page.emulateMedia({ reducedMotion: 'reduce' });
      assert.equal(await rocket.evaluate(el => el.getAnimations().length), 0);
      if (output && [390, 1440].includes(width)) {
        await page.goto(base + '/vibelink/cute-campus-roadmap');
        await page.getByRole('navigation', { name: '星際 RoadMap 關卡導航' }).screenshot({ path: path.join(output, `review-navigation-${width}.png`) });
      }
      await context.close();
      console.log(`PASS ${width}px: native clipboard via Enter, unobscured 44px controls, both categories overflow, responsive columns`);
    }
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
