import { test, expect } from '@playwright/test';
import { HomePage } from '../pageObjects/home.page'; 
import { PowerTools } from '../enums/categories.enum';

test('Verify user can filter products by category - Sander', { tag: ['@regression'] }, async ({ page }) => {
    const homePage = new HomePage(page);


  await homePage.openHomePage();

  await homePage.selectCategory(PowerTools.Sander);

  const productNames = await homePage.getProductNames();

  expect(productNames.length).toBeGreaterThan(0);
});