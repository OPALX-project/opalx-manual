import { test, expect } from '@playwright/test';

for (const width of [1440, 390]) {
  test(`featured news movie opens and plays at width ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto('/index.html');
    await page.getByRole('button', { name: 'Pause news', exact: true }).click();
    await page.getByRole('button', { name: 'Next news item' }).click();
    const strip = page.locator('.news-slide').nth(1);
    await expect(page.locator('.news-slide').first()).toContainText('OPALX 1.0.0 released 1.11.2026');
    await expect(strip).toBeVisible();
    expect(await page.evaluate(() => {
      const logos = document.querySelector('.institution-grid');
      const contents = document.querySelector('#find-your-path');
      const news = document.querySelector('#news');
      const changes = document.querySelector('#latest-changes');
      return !!(logos.compareDocumentPosition(news) & Node.DOCUMENT_POSITION_FOLLOWING)
        && !!(news.compareDocumentPosition(contents) & Node.DOCUMENT_POSITION_FOLLOWING)
        && !!(news.compareDocumentPosition(changes) & Node.DOCUMENT_POSITION_FOLLOWING);
    })).toBe(true);
    await strip.scrollIntoViewIfNeeded();
    await expect.poll(() => strip.locator('img').evaluate(img => img.complete && img.naturalWidth > 0)).toBe(true);
    const video = page.locator('#news-movie video');
    await expect(video.locator('source')).not.toHaveAttribute('src');
    await page.getByRole('button', { name: 'Play PSI MuE4', exact: true }).click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await video.evaluate(async element => { await element.play(); });
    await expect.poll(() => video.evaluate(element => element.currentTime)).toBeGreaterThan(0);
    expect(await video.evaluate(element => element.duration)).toBeGreaterThan(49);
    await page.screenshot({ path: `/tmp/opalx-news-player-${width}.png` });
    await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog')).not.toBeVisible();
    await expect.poll(() => video.evaluate(element => element.paused)).toBe(true);
    await page.getByRole('button', { name: 'Watch movie' }).click();
    await page.getByRole('button', { name: 'Close movie' }).click();
    await expect(page.getByRole('dialog')).not.toBeVisible();
    await strip.scrollIntoViewIfNeeded();
    await page.screenshot({ path: `/tmp/opalx-news-strip-${width}.png` });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  });
}

test('News ticker and manual changes are side by side on desktop and stack on mobile', async ({ page }) => {
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto('/index.html');
    const news = await page.locator('.frontpage-news').boundingBox();
    const history = await page.locator('.frontpage-history').boundingBox();
    if (width > 700) {
      expect(Math.abs(news.y - history.y)).toBeLessThan(2);
      expect(history.x).toBeGreaterThan(news.x);
    } else {
      expect(history.y).toBeGreaterThan(news.y + news.height);
    }
    await expect(page.locator('#latest-changes-list th')).toHaveText(['Date', 'Change']);
    await expect(page.locator('#latest-changes-list tbody tr')).toHaveCount(3);
    await expect(page.locator('#latest-changes-list')).not.toContainText('Recent manual updates');
    await page.locator('.frontpage-updates').scrollIntoViewIfNeeded();
    await page.screenshot({ path: `/tmp/opalx-news-history-${width}.png` });
  }
});

test('release-first ticker repeats every three seconds, supports pause and keeps history visible', async ({ page }) => {
  await page.clock.install();
  await page.goto('/index.html');
  const slides = page.locator('.news-slide');
  await expect(slides.nth(0)).toBeVisible();
  await expect(slides.nth(0)).toContainText('OPALX 1.0.0 released 1.11.2026');
  await page.locator('.news-ticker').hover();
  await page.clock.fastForward(3100);
  await expect(slides.nth(1)).toBeVisible();
  await expect(slides.nth(0)).not.toBeVisible();
  await expect(page.locator('#latest-changes-list')).toBeVisible();
  await page.clock.fastForward(3100);
  await expect(slides.nth(0)).toBeVisible();
  await page.getByRole('button', { name: 'Pause news', exact: true }).click();
  await page.clock.fastForward(10000);
  await expect(slides.nth(0)).toBeVisible();
  await page.getByRole('button', { name: 'Resume news', exact: true }).click();
  await page.clock.fastForward(3100);
  await expect(slides.nth(1)).toBeVisible();
});

test('news panel retains movie dimensions throughout rotation at desktop and mobile widths', async ({ page }) => {
  await page.clock.install();
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto('/index.html');
    const panel = page.locator('.news-slides');
    const release = await panel.boundingBox();
    await page.clock.fastForward(3100);
    await expect(page.locator('.news-slide').nth(1)).toBeVisible();
    const movie = await panel.boundingBox();
    expect(Math.abs(release.height - movie.height)).toBeLessThan(1);
    expect(Math.abs(release.width - movie.width)).toBeLessThan(1);
    await page.clock.fastForward(3100);
    const repeated = await panel.boundingBox();
    expect(Math.abs(repeated.height - movie.height)).toBeLessThan(1);
  }
});
