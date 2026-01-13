import { test, expect } from '@playwright/test';
import { HomePage } from './pageObjects/home.page';

[
  { option: 'Name (A - Z)', direction: 'asc' },
  { option: 'Name (Z - A)', direction: 'desc' },
].forEach(({ option, direction }) => {
  test(`Verify sorting by ${option}`, async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.openHomePage();
    await homePage.selectSortOption(option);

    const productNames = await homePage.getProductNames();

    const sortedNames = [...productNames].sort((a, b) =>
      direction === 'asc'
        ? a.localeCompare(b)
        : b.localeCompare(a)
    );

    expect(productNames).toEqual(sortedNames);
  });
});