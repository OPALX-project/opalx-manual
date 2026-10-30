import { expect, test } from "@playwright/test";

const solverPage = "/user-guide/field-solver/index.html";

for (const [label, url] of [["explicit", solverPage], ["directory", "/user-guide/field-solver/"]]) {
  test(`Binning is subsection 18.8 with working navigation (${label} URL)`, async ({ page }, testInfo) => {
    await page.goto(`${url}#binning`);
    const section = page.locator("section#binning");
    await expect(page.locator("h1.title")).toContainText("Field Solvers");
    await expect(section.locator("h2 .header-section-number")).toHaveText("18.8");
    await expect(section).toContainText("MAXBINS");
    await expect(section).toContainText("The parser accepts VELOCITYZ, GAMMAZ.");
    await expect(page.locator('#quarto-sidebar a[href*="/structures/"]')).toHaveCount(0);

    const toggle = page.getByRole("button", { name: "Toggle Field Solver sections", exact: true });
    if (await toggle.getAttribute("aria-expanded") === "false") await toggle.click();
    const entry = page.locator('#quarto-sidebar [data-opalx-toc-anchor="binning"]');
    await expect(entry).toBeVisible();
    await expect(entry).toContainText("18.8");
    await expect(entry).toContainText("Binning");
    await expect(entry.locator("a.sidebar-link")).toHaveClass(/active/);
    await section.locator("h2").scrollIntoViewIfNeeded();
    await page.screenshot({ path: testInfo.outputPath("binning.png") });

    await page.locator(".opal-version-selector").getByText("OPAL", { exact: true }).click();
    await expect(page.getByRole("radio", { name: "OPAL", exact: true })).toBeChecked();
    await expect(section).toBeHidden();
    await expect(entry).toBeHidden();
  });
}

test("the former Structures Binning URL redirects to the new section", async ({ page }) => {
  await page.goto("/user-guide/structures/index.html#binning");
  await expect(page).toHaveURL(/\/user-guide\/field-solver\/index\.html#binning$/);
  await expect(page.locator("section#binning")).toBeVisible();
});
