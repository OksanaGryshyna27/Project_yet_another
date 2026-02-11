import { expect } from '@playwright/test';
import { test } from '../fixture';



test('Verify successful logged in user with fixture', async ({ loggedInApp }) => {
  

    await loggedInApp.accountPage.page.goto('/account');

    await expect(loggedInApp.accountPage.page).toHaveURL('/account');
    await expect(loggedInApp.accountPage.header.navMenu).toHaveText('Jane Doe')

});