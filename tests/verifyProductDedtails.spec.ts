//import { expect } from '@playwright/test';
import { test } from '../fixture';
//import { USER_EMAIL, USER_PASSWORD } from '../config/baseConfig';

test('Verify user can view product details', { tag: ['@smoke'] }, async ({ apiLoggedInApp }) => {
 

    await apiLoggedInApp.homePage.openHomePage();
    // await apiLoggedInApp.loginPage.openLoginPage();
    // await apiLoggedInApp.loginPage.performLogin(USER_EMAIL, USER_PASSWORD);
    // await expect(apiLoggedInApp.accountPage.header.navMenu).toHaveText('Jane Doe');
    // await apiLoggedInApp.homePage.openHomePage();
    await apiLoggedInApp.homePage.clickProductByName('Combination Pliers');
    await apiLoggedInApp.productDetailsPage.verifyProductURL(); 
    await apiLoggedInApp.productDetailsPage.verifyProductName('Combination Pliers');
    await apiLoggedInApp.productDetailsPage.verifyProductPrice('14.15');
    await apiLoggedInApp.productDetailsPage.verifyAddToCartButtonVisible();
    await apiLoggedInApp.productDetailsPage.verifyAddToFavoriteButtonVisible();

    


}
);
