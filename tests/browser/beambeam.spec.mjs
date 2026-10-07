import { test, expect } from "@playwright/test";

test("Beam-Beam offers the source-only experiment bundle without the historical section", async ({ page }) => {
  await page.goto("/physics/beam-beam/index.html");
  await expect(page.locator("#sec-beam-beam-1v-testcase")).toHaveCount(0);
  const reproduction = page.locator("#sec-beam-beam-reproducibility");
  const download = reproduction.getByRole("link", { name: "downloadable input-and-script bundle" });
  await expect(download).toHaveAttribute("href", "https://github.com/OPALX-project/opalx-documents/blob/main/examples/2026/beam-beam/2026-10-06-beam-beam-experiments.tar.gz");
  await expect(reproduction).toContainText("no generated results");
  for (const number of [1, 2, 3, 4]) {
    await expect(reproduction).toContainText(`sandbox/experiment-${number}`);
  }
});

test("BEAMBEAM has a current element reference and physics link", async ({ page }) => {
  await page.goto("/user-guide/elements.html#beambeam");
  const section = page.locator("section#beambeam");
  await expect(section).toBeVisible();
  await expect(section).toContainText("Zero disables the mirror");
  await expect(section).toContainText("WITNESS_CONTAINERS");
  const toggle = page.getByRole("button", { name: "Toggle Elements sections", exact: true });
  if (await toggle.getAttribute("aria-expanded") === "false") await toggle.click();
  await expect(page.locator('#quarto-sidebar a[href$="#beambeam"]')).toBeVisible();
  const physicsLink = section.getByRole("link", { name: "Beam-Beam physics", exact: true });
  let physicsPage = page;
  if (await physicsLink.getAttribute("target") === "_blank") {
    [physicsPage] = await Promise.all([page.waitForEvent("popup"), physicsLink.click()]);
  } else {
    await physicsLink.click();
  }
  await expect(physicsPage).toHaveURL(/physics\/beam-beam\/index.html/);
  await expect(physicsPage.locator("h1.title")).toContainText("Beam-Beam");
});

test("Beam-Beam chapter renders figures and equations at desktop and mobile widths", async ({ page }) => {
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto("/physics/beam-beam/index.html");
    await page.evaluate(async () => {
      await window.MathJax?.startup?.promise;
      await Promise.all([...document.querySelectorAll("main img")].map(img => img.decode()));
    });
    await expect(page.locator("main figure img")).toHaveCount(6);
    await expect(page.locator("main mjx-container").first()).toBeVisible();
    await expect(page.locator("main mjx-merror")).toHaveCount(0);
    for (const id of ["sec-beam-beam-model", "sec-beam-beam-current-results", "sec-beam-beam-architecture"]) {
      await expect(page.locator(`#${id}`)).toBeAttached();
    }
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1);
    expect(overflow).toBe(false);
  }
});
