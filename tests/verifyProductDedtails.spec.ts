import { test,expect } from '@playwright/test';
import { AccountPage } from "./pageObjects/account.page";
import { HomePage } from "./pageObjects/home.page";
import { LoginPage } from "./pageObjects/login.page";
import { ProductDetails } from './productDetails.page';





test('Verify user can view product details', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const accountPage = new AccountPage(page);
    const productDetails = new ProductDetails(page);


    await homePage.openHomePage();
    await loginPage.openLoginPage();
    await loginPage.performLogin("customer@practicesoftwaretesting.com", "welcome01");
    await expect(accountPage.header.navMenu).toHaveText('Jane Doe');
    await homePage.openHomePage();
    await homePage.clickProductByName('Combination Pliers');
    await productDetails.expectProductURL(); 
    await productDetails.expectProductName('Combination Pliers');
    await productDetails.expectProductPricr('14.15');
    await productDetails.expectAddToCartButtonVisible();
    await productDetails.expectAddToFavoriteButtonVisible();

    


}
);
