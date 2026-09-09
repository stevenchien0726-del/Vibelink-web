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
    for (const width of [375, 390, 430, 768, 1440]) {
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
        return !el.closest('[aria-hidden="true"]') && box.width && (box.left < -1 || box.right > innerWidth + 1);
      }).map(el => el.tagName + '.' + el.className));
      assert.deepEqual(overflow, []);
      const planets = page.getByRole('navigation', { name: '星際 RoadMap 關卡導航' }).getByRole('link');
      assert.equal(await planets.count(), 5);
      const boxes = [];
      for (let index = 0; index < 5; index++) {
        const planet = planets.nth(index);
        const box = await planet.boundingBox();
        assert(box.width >= 44 && box.height >= 44);
        for (const other of boxes) assert(box.x + box.width <= other.x || other.x + other.width <= box.x || box.y + box.height <= other.y || other.y + other.height <= box.y, 'planet targets overlap');
        boxes.push(box);
      }
      await page.getByRole('navigation', { name: '星際 RoadMap 關卡導航' }).scrollIntoViewIfNeeded();
      if (output) await page.screenshot({ path: path.join(output, `planets-${width}.png`) });
      for (let index = 0; index < 5; index++) {
        await planets.nth(index).click();
        await page.waitForFunction(i => location.hash === `#step-${i}` && document.querySelector(`#step-${i}`).getBoundingClientRect().top >= 0 && document.querySelector(`#step-${i}`).getBoundingClientRect().top < 60, index + 1);
        await page.waitForFunction(i => document.querySelector(`nav a[href="#step-${i}"][aria-current="step"]`), index + 1);
      }
      await page.goBack();
      await page.waitForFunction(() => location.hash === '#step-4' && document.querySelector('nav a[href="#step-4"][aria-current="step"]'));
      await page.goForward();
      await page.waitForFunction(() => location.hash === '#step-5' && document.querySelector('nav a[href="#step-5"][aria-current="step"]'));
      for (const index of [1, 3, 5]) {
        await page.goto(`${base}${route}#step-${index}`);
        await page.waitForFunction(i => document.querySelector(`#step-${i}`).getBoundingClientRect().top >= 0 && document.querySelector(`#step-${i}`).getBoundingClientRect().top < 60 && document.querySelector(`nav a[href="#step-${i}"][aria-current="step"]`), index);
      }
      await page.keyboard.press('Tab');
      await planets.nth(0).focus();
      assert(await planets.nth(0).evaluate(el => el.matches(':focus-visible') && getComputedStyle(el).outlineStyle !== 'none'));
      await page.keyboard.press('Tab');
      assert(await planets.nth(1).evaluate(el => el === document.activeElement));
      await page.keyboard.press('Enter');
      await page.waitForFunction(() => location.hash === '#step-2');
      await planets.nth(2).focus();
      await page.keyboard.press('Space');
      await page.waitForFunction(() => location.hash === '#step-3');
      assert.equal(await page.getByRole('navigation', { name: '星際 RoadMap 關卡導航' }).evaluate(el => el.getAnimations({ subtree: true }).length), 0);
      await page.goto(base + route);
      if (output) await page.screenshot({ path: path.join(output, `roadmap-${width}.png`), fullPage: true });
      assert.equal(await page.getByRole('link', { name: '開始 RoadMap' }).count(), 0);
      for (const [stepNumber, filename, imageHeight] of [[3, 'cute-profile-upload.png', 1356], [4, 'cute-atomic-tags-search.png', 1434], [5, 'cute-ai-radar-input.png', 1473]]) {
        const screenshot = page.locator(`#step-${stepNumber} img`);
        await screenshot.scrollIntoViewIfNeeded();
        await screenshot.evaluate(img => img.decode());
        const imageInfo = await screenshot.evaluate(img => {
          const box = img.getBoundingClientRect(), parent = img.parentElement.getBoundingClientRect(), style = getComputedStyle(img);
          return { src: decodeURIComponent(img.currentSrc), width: box.width, height: box.height, radius: style.borderRadius, loading: img.loading, alt: img.alt, intrinsicWidth: img.getAttribute('width'), intrinsicHeight: img.getAttribute('height'), gap: box.top - img.previousElementSibling.getBoundingClientRect().bottom, centered: Math.abs((box.left + box.right) - (parent.left + parent.right)) < 1, loaded: img.complete && img.naturalWidth > 0 };
        });
        assert(imageInfo.src.includes(`/campus-roadmap/${filename}`));
        assert(imageInfo.loaded && imageInfo.centered && imageInfo.width <= 400);
        assert(Math.abs(imageInfo.height / imageInfo.width - imageHeight / 660) < .002);
        assert.equal(imageInfo.intrinsicWidth, '660');
        assert.equal(imageInfo.intrinsicHeight, String(imageHeight));
        assert.equal(imageInfo.radius, '20px');
        assert.equal(imageInfo.loading, 'lazy');
        assert(imageInfo.alt.includes('紅框'));
        assert(Math.abs(imageInfo.gap - 20) < 1);
        if (output) await screenshot.screenshot({ path: path.join(output, `step-${stepNumber}-image-${width}.png`) });
      }
      await planets.nth(0).click();
      assert.equal(new URL(page.url()).hash, '#step-1');
      await page.getByRole('link', { name: '下一關 →', exact: true }).click();
      assert.equal(new URL(page.url()).hash, '#step-2');
      assert.match(await page.getByRole('link', { name: 'App Store 下載' }).getAttribute('href'), /apps\.apple\.com\/tw\/app\/vibelink-social\/id6778701913/);
      const googlePlay = page.getByRole('link', { name: 'Google Play 下載' });
      const googlePlayUrl = 'https://play.google.com/store/apps/details?id=com.vibecity.vibelink';
      assert.equal(await googlePlay.getAttribute('href'), googlePlayUrl);
      assert.equal(await googlePlay.getAttribute('target'), '_blank');
      assert.equal(await googlePlay.getAttribute('rel'), 'noopener noreferrer');
      assert.equal(await page.getByText('Android — Coming Soon', { exact: true }).count(), 0);
      assert((await googlePlay.boundingBox()).height >= 44);
      assert.equal(await googlePlay.evaluate(el => getComputedStyle(el).cursor), 'pointer');
      // Intercept only the external response: verify the real click's destination
      // without making the regression suite depend on Google Play availability.
      await page.context().route(googlePlayUrl, request => request.fulfill({ status: 200, contentType: 'text/html', body: '<title>Store destination verified</title>' }));
      for (const activation of ['click', 'keyboard']) {
        const opened = page.waitForEvent('popup');
        if (activation === 'click') await googlePlay.click();
        else {
          await page.keyboard.press('Tab');
          await googlePlay.focus();
          assert(await googlePlay.evaluate(el => el.matches(':focus-visible')));
          await page.keyboard.press('Enter');
        }
        const popup = await opened;
        await popup.waitForLoadState('domcontentloaded');
        assert.equal(popup.url(), googlePlayUrl);
        await popup.close();
      }
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
      console.log(`PASS ${width}px: 5 planets, direct hashes, history, Enter/Space/Tab, focus, 44px targets, reduced motion, MENU, five steps, completion, overflow, console`);
    }
    const page = await browser.newPage();
    for (const pathname of ['/', '/vibelink', '/about', '/vibe-tv', '/vibe-membership', '/vibe-ecosystem', '/investor', '/privacy', '/delete-account', '/child-safety', route]) {
      assert.equal((await page.goto(base + pathname)).status(), 200, pathname);
    }
    await page.emulateMedia({ reducedMotion: 'no-preference' });
    assert.equal(await page.locator('html').evaluate(el => getComputedStyle(el).scrollBehavior), 'smooth');
    const navigation = page.getByRole('navigation', { name: '星際 RoadMap 關卡導航' });
    await navigation.getByRole('link').nth(2).click();
    await page.waitForFunction(() => location.hash === '#step-3' && Math.abs(document.querySelector('#step-3').getBoundingClientRect().top - 24) < 2);
    await navigation.scrollIntoViewIfNeeded();
    await page.waitForFunction(() => document.querySelector('nav a[href="#step-3"][aria-current="step"]'));
    if (output) await page.screenshot({ path: path.join(output, 'current-mission.png') });
    console.log('PASS all 11 public routes HTTP 200; actual smooth scroll to 24px offset / reduced-motion override');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
