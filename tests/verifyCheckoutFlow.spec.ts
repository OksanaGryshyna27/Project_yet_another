import { expect } from "@playwright/test";
import { test } from "../fixture";
import { address } from "../testData/address.data";
import { payment } from "../testData/payment.data";


test('Verify logged in user can complete checkout', async ({ loggedInApp }) => {

    await loggedInApp.homePage.openHomePage();
    await loggedInApp.homePage.openFirstItem();
    const product = await loggedInApp.productDetailsPage.getProductData();
    expect(product.name).toBeTruthy();
    expect(product.price).toBeTruthy();
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
    await loggedInApp.billingAddressPage.fillStateField(address.state);
    await loggedInApp.billingAddressPage.fillPostCodeField(address.postalCode);
    await loggedInApp.billingAddressPage.clickProceedToCheckout();
    await loggedInApp.paymentPage.selectPaymentOption('Credit Card');
    await loggedInApp.paymentPage.fillCreditCardNumber(payment.creditCardNumber);
    await loggedInApp.paymentPage.fillExpirationDate();
    await loggedInApp.paymentPage.fillCvv(payment.cvv);
    await loggedInApp.paymentPage.fillCardHolder(payment.cardHolder);
    await loggedInApp.paymentPage.clickConfirmButton();
    await loggedInApp.paymentPage.verifyPaymentSuccessMessage();
    
})
