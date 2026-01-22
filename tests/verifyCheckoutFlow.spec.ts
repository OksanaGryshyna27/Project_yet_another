import { expect } from "@playwright/test";
import { test } from "./fixture";


test('Verify logged in user can complete checkout', async ({ loggedInApp }) => {

    await loggedInApp.homePage.openHomePage();
    await loggedInApp.homePage.openFirstItem();
    const product = await loggedInApp.productDetailsPage.getProductData();
    expect(product.name).not.toBe(' ');
    expect(product.price).not.toBe(' ');
    await loggedInApp.productDetailsPage.clickToAddCartButton();
    await loggedInApp.headerFragment.goToCheckout();
    const checkoutName = await loggedInApp.checkoutPage.getProductNameCheckout();
    const checkoutPrice = await loggedInApp.checkoutPage.getProductPrice();
    const totalPrice = await loggedInApp.checkoutPage.getTotalPrice();

    expect(checkoutName).toBe(product.name);
    expect(checkoutPrice).toBe(product.price);
    expect(totalPrice).toBe(product.price);

    await loggedInApp.checkoutPage.clickProceedToCheckoutButton1();
    await loggedInApp.checkoutPage.clickProceedToCheckoutButton2();
    await loggedInApp.billingAddressPage.fillStateField('Arizona');
    await loggedInApp.billingAddressPage.fillPostCodeField('03189');
    await loggedInApp.billingAddressPage.clickProceedToCheckout();
    await loggedInApp.paymentPage.selectPaymentOption('Credit Card');
    await loggedInApp.paymentPage.fillCreditCardNumber('1111-1111-1111-1111');
    await loggedInApp.paymentPage.fillExpirationDate();
    await loggedInApp.paymentPage.fillCvv('111');
    await loggedInApp.paymentPage.fillCardHolder('Oksana Gryshyna');
    await loggedInApp.paymentPage.clickConfirmButton();
    await loggedInApp.paymentPage.verifyPaymentSuccessMessage();
    
})