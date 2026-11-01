import { test, expect } from '@playwright/test';

for (const width of [390, 768, 1440]) {
  test(`homepage design is compact and usable at width ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto('/index.html');
    const developers = page.locator('.developers');
    if (width <= 640) {
      await expect(developers).not.toHaveAttribute('open');
      await developers.locator('summary').click();
      await expect(developers).toHaveAttribute('open');
      await expect(developers).toContainText('Andreas Adelmann');
      await developers.locator('summary').click();
      const logos = page.locator('.institution-grid > div');
      const first = await logos.nth(0).boundingBox();
      const second = await logos.nth(1).boundingBox();
      expect(Math.abs(first.y - second.y)).toBeLessThan(1);
      expect(second.x).toBeGreaterThan(first.x);
    } else {
      await expect(developers).toHaveAttribute('open');
    }
    const ratio = await page.evaluate(() => parseFloat(getComputedStyle(document.querySelector('.hero h1')).fontSize) / parseFloat(getComputedStyle(document.querySelector('#news h2')).fontSize));
    expect(ratio).toBeCloseTo(1.5, 2);
    for (const button of await page.locator('.news-ticker-controls button').all()) {
      const bounds = await button.boundingBox();
      expect(bounds.height).toBeGreaterThanOrEqual(44);
      expect(bounds.width).toBeGreaterThanOrEqual(44);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.evaluate(() => scrollTo(0, 0));
    await page.screenshot({ path: `/tmp/opalx-refined-home-${width}.png`, fullPage: true });
    const theme = page.locator('.quarto-color-scheme-toggle').first();
    if (!(await theme.isVisible())) {
      await page.getByRole('button', { name: 'Toggle sidebar navigation' }).click();
    }
    await theme.click();
    const sidebar = page.getByRole('button', { name: 'Toggle sidebar navigation' });
    if (await sidebar.isVisible() && await sidebar.getAttribute('aria-expanded') === 'true') await sidebar.click();
    await expect(page.locator('body')).toHaveClass(/quarto-dark/);
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator('.hero-actions a').first()).toHaveCSS('color', 'rgb(16, 35, 61)');
    await page.waitForTimeout(350);
    await page.screenshot({ path: `/tmp/opalx-refined-dark-${width}.png`, fullPage: true });
  });
}

test('documentation card padding follows the native destination link', async ({ page }) => {
  await page.goto('/index.html');
  const card = page.locator('.doc-card').first();
  const destination = await card.locator('p:last-child a').getAttribute('href');
  let destinationPage = page;
  if (await card.locator('p:last-child a').getAttribute('target') === '_blank') {
    [destinationPage] = await Promise.all([page.waitForEvent('popup'), card.click({ position: { x: 8, y: 8 } })]);
  } else {
    await card.click({ position: { x: 8, y: 8 } });
  }
  await expect(destinationPage).toHaveURL(new URL(destination, 'http://127.0.0.1:4173/index.html').href);
});
