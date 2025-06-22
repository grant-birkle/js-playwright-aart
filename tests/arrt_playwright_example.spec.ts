import { test, expect } from '@playwright/test';

test('AART title', async ({ page }) => {
  await page.goto('https://www.arrt.org');

  // Verify AART's Title
  await expect(page).toHaveTitle("Welcome to the American Registry of Radiologic Technologists (ARRT) website - ARRT.org - ARRT");
});

test("About AART", async ({ page }) => {
  await page.goto('https://www.arrt.org/');

 // Select About dropdown:
  const aboutDropdown = page.locator('[data-toggle="dropdown"]').first()
  await aboutDropdown.click()

  // Select the About Us item
  await page.getByRole('link', { name: 'About Us' }).click()

  // Verify About page has correct URL:
  await expect(page).toHaveURL('https://www.arrt.org/pages/about/about-us');

  // verify About Page Title:
  expect(page).toHaveTitle("Welcome to the American Registry of Radiologic Technologists (ARRT) website - ARRT.org - ARRT")
  const title = await page.title();
  console.log(title);
});
