import { test } from '@playwright/test';
import { HomePage } from '../pageObjects/home.page'; 
import { ProductDetails } from '../pageObjects/productDetails.page'; 
import { HeaderFragment } from '../pageObjects/Fragments/header.fragment'; 
import { CheckoutPage } from '../pageObjects/checkout.page';

test('Verify user can add product to cart', async ({ page }) => {
    const homePage = new HomePage(page);
    const productDetails = new ProductDetails(page);
    const headerFragment = new HeaderFragment(page);
    const checkoutPage = new CheckoutPage(page);

    await homePage.openHomePage();
    await homePage.clickProductByName('Slip Joint Pliers');
    await productDetails.verifyProductURL();
    await productDetails.verifyProductName('Slip Joint Pliers');
    await productDetails.verifyProductPrice('9.17');
    await productDetails.clickToAddCartButton();
    await productDetails.verifyToastVisible();
    await productDetails.verifyToastText();
    await productDetails.verifyToastDisappears();
    await headerFragment.verifyCartQuantity('1')
    await headerFragment.goToCheckout();
    await checkoutPage.verifyCheckoutURL();
    await checkoutPage.verifyItemCount('1');
    await checkoutPage.verifyProductTitle('Slip Joint Pliers');
    await checkoutPage.verifyProceedButtonVisible();
}
)
    

