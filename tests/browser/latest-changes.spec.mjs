import { test, expect } from "@playwright/test";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const manualRoot = fileURLToPath(new URL("../../", import.meta.url));

test("front page displays current commit subjects below the contents overview", async ({ page }) => {
  const subjects = JSON.parse(execFileSync("ruby", [
    "-r", "json", "-r", "./scripts/generate_latest_changes",
    "-e", "puts JSON.generate(LatestChanges.commits(Dir.pwd).map { |entry| entry.fetch(:subject) })"
  ], { cwd: manualRoot, encoding: "utf8" }));
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto("/index.html");
    const changes = page.locator("#latest-changes-list");
    await expect(changes).toBeVisible();
    await expect(changes.locator("tbody tr")).toHaveCount(subjects.length);
    for (let i = 0; i < subjects.length; i++) {
      await expect(changes.locator("tbody tr").nth(i).locator("td").nth(1)).toHaveText(subjects[i]);
    }
    await expect(changes.getByRole("link", { name: "View full commit history" })).toHaveAttribute("href", "https://github.com/OPALX-project/opalx-manual/commits");
    expect(await page.evaluate(() => {
      const overview = document.querySelector("#find-your-path");
      const latest = document.querySelector("#latest-changes");
      return Boolean(overview.compareDocumentPosition(latest) & Node.DOCUMENT_POSITION_FOLLOWING);
    })).toBe(true);
  }
});
