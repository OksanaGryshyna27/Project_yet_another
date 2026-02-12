import { test } from "../fixture";
test('Verify user can add product to cart', async ({ apiLoggedInApp }) => {
    

    await apiLoggedInApp.homePage.openHomePage();
    await apiLoggedInApp.homePage.clickProductByName('Slip Joint Pliers');
    await apiLoggedInApp.productDetailsPage.verifyProductURL();
    await apiLoggedInApp.productDetailsPage.verifyProductName('Slip Joint Pliers');
    await apiLoggedInApp.productDetailsPage.verifyProductPrice('9.17');
    await apiLoggedInApp.productDetailsPage.clickToAddCartButton();
    await apiLoggedInApp.productDetailsPage.verifyToastVisible();
    await apiLoggedInApp.productDetailsPage.verifyToastText();
    await apiLoggedInApp.productDetailsPage.verifyToastDisappears();
    await apiLoggedInApp.headerFragment.verifyCartQuantity('1')
    await apiLoggedInApp.headerFragment.goToCheckout();
    await apiLoggedInApp.checkoutPage.verifyCheckoutURL();
    await apiLoggedInApp.checkoutPage.verifyItemCount('1');
    await apiLoggedInApp.checkoutPage.verifyProductTitle('Slip Joint Pliers');
    await apiLoggedInApp.checkoutPage.verifyProceedButtonVisible();
}
)
    

