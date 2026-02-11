import { test,expect } from '@playwright/test';
import { AccountPage } from '../pageObjects/account.page'; 
import { HomePage } from '../pageObjects/home.page'; 
import { LoginPage } from '../pageObjects/login.page'; 
import { ProductDetails } from '../pageObjects/productDetails.page';
import { USER_EMAIL, USER_PASSWORD } from '../config/baseConfig';

test('Verify user can view product details', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const accountPage = new AccountPage(page);
    const productDetails = new ProductDetails(page);

    await homePage.openHomePage();
    await loginPage.openLoginPage();
    await loginPage.performLogin(USER_EMAIL, USER_PASSWORD);
    await expect(accountPage.header.navMenu).toHaveText('Jane Doe');
    await homePage.openHomePage();
    await homePage.clickProductByName('Combination Pliers');
    await productDetails.verifyProductURL(); 
    await productDetails.verifyProductName('Combination Pliers');
    await productDetails.verifyProductPrice('14.15');
    await productDetails.verifyAddToCartButtonVisible();
    await productDetails.verifyAddToFavoriteButtonVisible();

    


}
);
