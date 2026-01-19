import { test, expect } from '@playwright/test';
import { LoginPage } from './pageObjects/login.page';
import { AccountPage } from './pageObjects/account.page';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

const email = process.env.USER_EMAIL!;
const password = process.env.USER_PASSWORD!;

test('has title', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('/auth/login');
    await loginPage.performLogin(email, password);
   
    const accountPage = new AccountPage(page);
    

    await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');
    await expect (accountPage.pageTitle).toHaveText('My account');
    await expect(accountPage.header.navMenu).toHaveText('Jane Doe')

    await page.context().storageState({ path: authFile });
});
