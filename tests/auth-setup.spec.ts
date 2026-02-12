import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageObjects/login.page';
import { AccountPage } from '../pageObjects/account.page'; 
import path from 'path';
import { BASE_URL, USER_EMAIL, USER_PASSWORD } from '../config/baseConfig';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

//const email = process.env.USER_EMAIL!;
//const password = process.env.USER_PASSWORD!;

test('has title', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('/auth/login');
    await page.getByTestId('email').waitFor();

    console.log('BASE_URL VALUE:', BASE_URL);
    console.log('process.env.BASE_URL:', process.env.BASE_URL);

    await loginPage.performLogin(USER_EMAIL, USER_PASSWORD);
   
    const accountPage = new AccountPage(page);

    
    

    await expect(page).toHaveURL('/account');
    await expect (accountPage.pageTitle).toHaveText('My account');
    await expect(accountPage.header.navMenu).toHaveText('Jane Doe')

    await page.context().storageState({ path: authFile });
});
