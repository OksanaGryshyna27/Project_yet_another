import { test, expect } from '@playwright/test';
import { HomePage } from './pageObjects/home.page';
import { SortType } from './categories.enum';

[
  { option: SortType.priceLowHigh, direction: 'asc' },
  { option: SortType.priceHighLow, direction: 'desc' },
].forEach(({ option, direction }) => {
  test(`Verify sorting by ${option}`, async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.openHomePage();
    await homePage.selectSortOption(option);

    const productPrices = await homePage.getProductPrices();

    const sortedPrices = [...productPrices].sort((a, b) =>
      direction === 'asc'
        ? a - b
        : b - a
    );

    expect(productPrices).toEqual(sortedPrices);
  });
});