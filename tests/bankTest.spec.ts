import { test, expect } from "@playwright/test";
import { randomInt } from "crypto";

test.describe("Min første test Suite", () => {
  test.beforeEach(async ({ page }) => {
    // Logger på nettbanken.
    await page.goto(
      "http://ec2-13-49-246-53.eu-north-1.compute.amazonaws.com:8080/bank/login"
    );
    await page.getByPlaceholder("Enter User Name").fill("jsmith@demo.io");
    await page.getByPlaceholder("Enter Password").fill("Demo123!");
    await page.getByPlaceholder("Enter Password").press("Enter");
    // Navigerer til forsiden av banken.
    await page.goto(
      "http://ec2-13-49-246-53.eu-north-1.compute.amazonaws.com:8080/bank/home"
    );
  });

  test("Min første test", async ({ page }) => {
    // await page.pause();
    await page.getByRole("link", { name: "Checking" }).click();
    await page.getByRole("link", { name: "New Checking" }).click();
    await page.getByLabel("Standard Checking").check();
    await page.getByLabel("Individual").check();
    await page.locator("#name").click();
    await page.locator("#name").fill("Testkonto");
    await page.locator("#openingBalance").click();
    await page.locator("#openingBalance").fill("1000");
    await page.getByRole("button", { name: " Submit" }).click();
    await expect(page.locator(""));
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

  test.afterAll(async ({ page }) => {
    await page.close();
  });
});
