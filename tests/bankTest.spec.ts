import { test, expect } from "@playwright/test";
import { randomInt } from "crypto";
import { text } from "stream/consumers";

test.describe("Min første test Suite", () => {
  test.beforeEach(async ({ page }) => {
    // Logger på nettbanken.
    await page.goto("http://51.20.79.181:8080/bank/login");
    await page.getByPlaceholder("Enter User Name").fill("jsmith@demo.io");
    await page.getByPlaceholder("Enter Password").fill("Demo123!");
    await page.getByPlaceholder("Enter Password").press("Enter");
  });

  test.only("Min første test", async ({ page }) => {
    // Forslag til løsning på oppgave 1
    await page.getByRole("link", { name: "  Checking" }).click();
    await page.getByRole("link", { name: " New Checking" }).click();
    await page.getByLabel("Standard Checking").check();
    await page.getByLabel("Individual").check();
    await page.locator("#name").click();
    const kontonavn: String = `Testkonto${randomInt(10) * randomInt(999)}`;
    await page.locator("#name").fill(`${kontonavn}`);
    await page.locator("#openingBalance").click();
    await page.locator("#openingBalance").fill("1000");
    await page.getByRole("button", { name: " Submit" }).click();
    const testkontoer = await page.getByText(`${kontonavn}`);
    expect(testkontoer !== undefined).toBeTruthy();
  });

  test("min andre test", async ({ page }) => {
    //lag en test som setter inn penger på en av kontoene til J. Smith legg til en sjekk på at det ble fullført.
  });

  test.afterAll(async ({ page }) => {
    await page.close();
  });
});
