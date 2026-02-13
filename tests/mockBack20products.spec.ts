import { expect } from '@playwright/test';
import { test } from '../fixture';
import { API_BASE_URL } from '../config/baseConfig';
import { createMockProducts } from '../utils/mockProducts';

test('Verify 20 products are visible on the page', { tag: ['@regression'] }, async ({ allPages }) => {

    await allPages.page.route(`${API_BASE_URL}/products*`, async route => {
        
        const response = await route.fetch();
        const json = await response.json();

        json.data = createMockProducts(json.data, 20);

        await route.fulfill({ response, json });
  });

    await allPages.homePage.openHomePage();

    await expect(allPages.homePage.productNames).toHaveCount(20);
});
