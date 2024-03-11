import { test, expect } from "@playwright/test";
import { randomInt } from "crypto";
import { text } from "stream/consumers";

/***
Testene vi nå har sett på er langt fra perfekt.
1) Hvilke tanker har du/dere for å gjøre de bedre?
    - Jeg tenker da på nøyaktighet/pressisjon av testen.
    - Er testen lav på vedlikehold?
    - Er testene skrevet godt mtp generell "best practice"

2) Kan vi legge på flere/eller bedre sjekker på om testene var vellykket?
3) Hvordan tror dere det går med testdataen til denne brukeren om 6 måneder?
4) Slå deg løs og lag flere tester til denne brukeren som du tenker er nødvendig/lurt.
***/

test.describe("Min første test Suite", () => {
  test.beforeEach(async ({ page }) => {
    // Logger på nettbanken.
    await page.goto("http://51.20.79.181:8080/bank/login");
    await page.getByPlaceholder("Enter User Name").fill("jsmith@demo.io");
    await page.getByPlaceholder("Enter Password").fill("Demo123!");
    await page.getByPlaceholder("Enter Password").press("Enter");
  });

  test("Min første test", async ({ page }) => {
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
    // Forslag til løsning på oppgave 2:
    //lag en test som setter inn penger på en av kontoene til J. Smith legg til en sjekk på at det ble fullført.
  });

  test.afterAll(async ({ page }) => {
    await page.close();
  });
});
