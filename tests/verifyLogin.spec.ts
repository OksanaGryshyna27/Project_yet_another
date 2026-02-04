import { expect } from '@playwright/test';
import { test } from '../fixture';

const email = process.env.USER_EMAIL!;
const password = process.env.USER_PASSWORD!;

test('Verify user can login', async ({ allPages, page }) => {
    
    await page.goto('/auth/login');
    await allPages.loginPage.performLogin(email, password);
    
    await expect(page).toHaveURL('/account');
    await expect (allPages.accountPage.pageTitle).toHaveText('My account');
    await expect(allPages.accountPage.header.navMenu).toHaveText('Jane Doe')
});
