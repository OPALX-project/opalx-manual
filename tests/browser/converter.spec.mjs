import { test, expect } from "@playwright/test";
import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";

const checksum = "b5cd2e3354f7be274f28c0b1ffe81d4f215cabf5a969f12fa731efc0265c1151";

test("first-simulation chapter links to converter section 4.4", async ({ page }) => {
  await page.goto("/getting-started/first-simulation.html");
  const section = page.locator("section#sec-toopalx");
  await expect(section.locator("h2")).toContainText("4.4");
  await expect(section.locator("h2")).toContainText("Convert OPAL, ASTRA and Elegant inputs");
  const reference = page.locator("main p a.quarto-xref[href$='#sec-toopalx']");
  await expect(reference).toHaveCount(1);
  await expect(reference).toContainText("4.4");
  const destination = new URL(await reference.getAttribute("href"), page.url());
  expect(destination.hash).toBe("#sec-toopalx");
  expect(destination.pathname).toBe("/getting-started/first-simulation.html");
  let destinationPage = page;
  if (await reference.getAttribute("target") === "_blank") {
    const opened = page.waitForEvent("popup");
    await reference.click();
    destinationPage = await opened;
    await destinationPage.waitForLoadState("domcontentloaded");
  } else {
    await reference.click();
  }
  await expect(destinationPage.locator("#sec-toopalx h2")).toBeInViewport();
  await expect(section).toContainText("version 1.4.2");
  await expect(section).toContainText("FIELDSOLVER, TYPE=NONE");
});

test("converter download is the exact frozen standalone script", async ({ page }) => {
  await page.goto("/getting-started/first-simulation.html#sec-toopalx");
  const link = page.locator("section#sec-toopalx a[download='toOPALX.py']");
  await expect(link).toHaveCount(1);
  const pending = page.waitForEvent("download");
  await link.click();
  const download = await pending;
  expect(download.suggestedFilename()).toBe("toOPALX.py");
  const bytes = await readFile(await download.path());
  expect(bytes.length).toBe(419852);
  expect(createHash("sha256").update(bytes).digest("hex")).toBe(checksum);
  const checksumLink = page.locator("section#sec-toopalx a[download='toOPALX.py.sha256']");
  const response = await page.request.get(new URL(await checksumLink.getAttribute("href"), page.url()).href);
  expect(response.ok()).toBeTruthy();
  expect(await response.text()).toBe(`${checksum}  toOPALX.py\n`);
});


test("converter stays visible with a saved OPAL preference on desktop and mobile", async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem("opalx-documentation-version-v1", "opal"));
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto("/getting-started/first-simulation.html");
    const section = page.locator("section#sec-toopalx");
    await expect(section).toBeVisible();
    await expect(page.locator(".opal-version-selector")).toHaveCount(0);
    expect(await page.evaluate(() => localStorage.getItem("opalx-documentation-version-v1"))).toBe("opal");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy();
    await section.locator("h2").scrollIntoViewIfNeeded();
    await page.screenshot({ path: `/tmp/opalx-converter-${width}.png` });
  }
});
