import { test, expect } from "@playwright/test";
import { randomInt } from "crypto";
import { text } from "stream/consumers";

test.describe("Min første test Suite", () => {
  test.beforeEach(async ({ page }) => {
    // Logger på nettbanken.
    await page.goto("http://13.53.168.89:8080/bank/login");
    await page.getByPlaceholder("Enter User Name").fill("jsmith@demo.io");
    await page.getByPlaceholder("Enter Password").fill("Demo123!");
    await page.getByPlaceholder("Enter Password").press("Enter");
  });

  test("Min første test", async ({ page }) => {
    //await page.pause();
    await page.getByRole("link", { name: "  Checking" }).click();
    await page.getByRole("link", { name: " New Checking" }).click();
    await page.getByLabel("Standard Checking").check();
    await page.getByLabel("Individual").check();
    await page.locator("#name").click();
    await page.locator("#name").fill("Testkonto98789");
    await page.locator("#openingBalance").click();
    await page.locator("#openingBalance").fill("1000");
    await page.getByRole("button", { name: " Submit" }).click();
    await page.pause();
    await expect(page.getByText("Testkonto98789")).toBeVisible();
    // await page.getByText("Testkonto", { exact: true }).click();
  });

  test("min andre test", async ({ page }) => {
    // await page.pause();
    await page.getByRole("link", { name: "Checking" }).click();
    await page.getByRole("link", { name: "New Checking" }).click();
    await page.getByLabel("Standard Checking").check();
    await page.getByLabel("Individual").check();
    await page.locator("#name").click();
    const kontonavn: String = `Testkonto${randomInt(10) * randomInt(999)}`;
    await page.locator("#name").fill(`${kontonavn}`);
  });

  test.only("min tredje test", async ({ page }) => {
    await page.goto("http://13.53.168.89:8080/bank/account/checking-view");
    await page.pause();
    const testkontoer = await page.getByText("Testkonto98789");
    expect(testkontoer !== undefined).toBeTruthy();
    //await expect(page.locator( : "Testkonto98789")).toContain("Testkonto98789");
    // await expect(page.getByText("Testkonto98789")).toBeVisible();
    //await expect(
    //  page.getByRole("heading", { name: "Testkonto98789" })
    //).toBeVisible();
  });

  test.afterAll(async ({ page }) => {
    await page.close();
  });
});
