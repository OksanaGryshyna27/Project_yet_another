import { expect } from '@playwright/test';
import { test } from '../fixture';


//const email = process.env.USER_EMAIL!;
//const password = process.env.USER_PASSWORD!;

test('Verify successful logged in user with fixture', async ({ loggedInApp }) => {
  

    //const accountPage = new AccountPage(loggedInApp);
    await loggedInApp.accountPage.page.goto('/account');

    await expect(loggedInApp.accountPage.page).toHaveURL('/account');
    await expect(loggedInApp.accountPage.header.navMenu).toHaveText('Jane Doe')

});