import { test, expect } from '@playwright/test';

test('Home page should load with correct title', async ({ page }) => {
  await page.goto('/');
  // VuePress v2 default theme title format: "Page Title | Site Title"
  await expect(page).toHaveTitle(/KiloNorth Docs/);
  
  // Check for the main heading on the home page
  await expect(page.getByRole('heading', { name: 'Welcome to KiloNorth Docs' })).toBeVisible();
});

test('Navigation to Credits page works', async ({ page }) => {
  await page.goto('/');
  
  // Click the Credits link in the navbar
  await page.getByRole('link', { name: 'Credits', exact: true }).click();
  
  // Verify navigation to the credits page
  await expect(page).toHaveURL(/\/credits/);
  await expect(page.getByRole('heading', { name: 'About This Documentation' })).toBeVisible();
  
  // Verify sidebar is NOT present on the credits page
  const sidebar = page.locator('.vp-sidebar');
  await expect(sidebar).not.toBeVisible();
});
