import { test, expect } from "@playwright/test";

test.describe("Min første test Suite", () => {
  test("Min første test", async ({ page }) => {
    // Lag først en test som logger inn i nettbanken og gå til forsiden av nettbanken.
    // Lag en sjekk/test som verifiserer at du er logget inn.
    // brukernavn: jsmith@demo.io
    // passord: Demo123!
    // Bruk dokumentasjonen og hverandre til hjelp:
    await page.goto(
      "http://ec2-13-49-246-53.eu-north-1.compute.amazonaws.com:8080/bank/login"
    );
  });
});
