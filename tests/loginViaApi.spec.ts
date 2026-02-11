import { test } from '../fixture';
import { expect } from '@playwright/test';

test('user is logged in via API fixture', async ({ apiLoggedInApp }) => {
    await apiLoggedInApp.homePage.openHomePage();

    await expect(
        apiLoggedInApp.headerFragment.navMenu).toContainText('Jane Doe');
    
});