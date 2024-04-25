import { test, expect } from "@playwright/test";

// Husk å lese README.md

test.describe("Min første test Suite", () => {
  test("Min første test", async ({ page }) => {
    // Lag først en test som logger inn i nettbanken og gå til forsiden av nettbanken.
    // Lag en sjekk/test som verifiserer at du er logget inn.
    // brukernavn: jsmith@demo.io
    // passord: Demo123!
    // Bruk dokumentasjonen og hverandre til hjelp: https://playwright.dev/docs/intro
    // Kjør testene med: "npx playwright test --headed" eller "npm run test" i terminalen
    await page.goto("http://16.171.175.98:8080/bank");

    await page.pause(); // dette stopper playwright og åpner kodegeneratoren.
  });
});
