import { test, expect } from "@playwright/test";
import { text } from "stream/consumers";
test.describe("Min første test Suite", () => {
  //beforeEach logger seg på før hver test som kjøres
  test.beforeEach(async ({ page }) => {
    // Logger på nettbanken.
    await page.goto(
      "http://ec2-16-171-236-130.eu-north-1.compute.amazonaws.com:8080/bank/login"
    );
    await page.pause();
    await page.getByPlaceholder("Enter User Name").fill("jsmith@demo.io");
    await page.getByPlaceholder("Enter Password").fill("Demo123!");
    await page.getByPlaceholder("Enter Password").press("Enter");
  });

  test("Min første test", async ({ page }) => {
    // Automatiser en test for å opprette en "Checking Account" til J. Smith.
    // Legg til en verifisering som sjekker at testen er vellykket.
  });
});
