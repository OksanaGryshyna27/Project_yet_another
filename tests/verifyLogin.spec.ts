import { expect } from '@playwright/test';
import { test } from '../fixture';
import { USER_EMAIL, USER_PASSWORD } from '../config/baseConfig';

test('Verify user can login', async ({ allPages, page }) => {
    
    await page.goto('/auth/login');
    await allPages.loginPage.performLogin(USER_EMAIL, USER_PASSWORD);
    
    await expect(page).toHaveURL('/account');
    await expect (allPages.accountPage.pageTitle).toHaveText('My account');
    await expect(allPages.accountPage.header.navMenu).toHaveText('Jane Doe')
});
