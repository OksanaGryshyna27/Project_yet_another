import { expect } from '@playwright/test';
//import { LoginPage } from './pageObjects/login.page';
//import { AccountPage } from './pageObjects/account.page';
import { test } from './fixture';
//import { AllPages } from './allPages';

//const email = process.env.USER_EMAIL!;
//const password = process.env.USER_PASSWORD!;

test('Verify successful logged in user with fixture', async ({ loggedInApp, allPages }) => {
  

    //const accountPage = new AccountPage(loggedInApp);
    

   await expect(loggedInApp.accountPage.page).toHaveURL('https://practicesoftwaretesting.com/account');
    //await expect (accountPage.pageTitle).toHaveText('My account');
    await expect(allPages.accountPage.header.navMenu).toHaveText('Jane Doe')

});