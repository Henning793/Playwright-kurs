import { test, expect } from "@playwright/test";
test.describe("Min første test Suite", () => {
  //beforeEach logger seg på før hver test som kjøres
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
    // Hent kontoinfoen til jsmith fra alle sparekontoer, legg inn tester på suksess og logg beløpet til Console.
  });
});
