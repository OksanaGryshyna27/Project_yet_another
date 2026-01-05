import { test, expect } from '@playwright/test';
import { LoginPage } from './pageObjects/login.page';
import { AccountPage } from './pageObjects/account.page';

const email = process.env.USER_EMAIL!;
const password = process.env.USER_PASSWORD!;

test('has title', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('/auth/login');
    await loginPage.performLogin(email, password);
    // await page.locator('[data-test="email"]').fill("customer@practicesoftwaretesting.com");
    // await page.locator('[data-test="password"]').fill("welcome01");
    // await page.locator('[data-test="login-submit"]').click();

    const accountPage = new AccountPage(page);
    

    await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');
    await expect (accountPage.pageTitle).toHaveText('My account');
    await expect(accountPage.header.navMenu).toHaveText('Jane Doe')
});
