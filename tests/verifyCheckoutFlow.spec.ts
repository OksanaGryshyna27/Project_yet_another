import { expect } from "@playwright/test";
import { test } from "../fixture";
import { address } from "../testData/address.data";
import { payment } from "../testData/payment.data";


test('Verify logged in user can complete checkout', { tag: ['@regression'] }, async ({ apiLoggedInApp }) => {

    await apiLoggedInApp.homePage.openHomePage();
    await apiLoggedInApp.homePage.openFirstItem();
    const product = await apiLoggedInApp.productDetailsPage.getProductData();
    expect(product.name).toBeTruthy();
    expect(product.price).toBeTruthy();
    await apiLoggedInApp.productDetailsPage.clickToAddCartButton();
    await apiLoggedInApp.headerFragment.goToCheckout();
    const checkoutName = await apiLoggedInApp.checkoutPage.getProductNameCheckout();
    const checkoutPrice = await apiLoggedInApp.checkoutPage.getProductPrice();
    const totalPrice = await apiLoggedInApp.checkoutPage.getTotalPrice();

    expect(checkoutName).toBe(product.name);
    expect(checkoutPrice).toBe(product.price);
    expect(totalPrice).toBe(product.price);

    await apiLoggedInApp.checkoutPage.clickProceedToCheckoutButton1();
    await apiLoggedInApp.checkoutPage.clickProceedToCheckoutButton2();
    await apiLoggedInApp.billingAddressPage.fillStreetField(address.street);
    await apiLoggedInApp.billingAddressPage.fillCityField(address.city);
    await apiLoggedInApp.billingAddressPage.fillStateField(address.state);
    await apiLoggedInApp.billingAddressPage.fillCountryField(address.country);
    await apiLoggedInApp.billingAddressPage.fillPostCodeField(address.postalCode);
    await apiLoggedInApp.billingAddressPage.clickProceedToCheckout();
    await apiLoggedInApp.paymentPage.selectPaymentOption('Credit Card');
    await apiLoggedInApp.paymentPage.fillCreditCardNumber(payment.creditCardNumber);
    await apiLoggedInApp.paymentPage.fillExpirationDate();
    await apiLoggedInApp.paymentPage.fillCvv(payment.cvv);
    await apiLoggedInApp.paymentPage.fillCardHolder(payment.cardHolder);
    await apiLoggedInApp.paymentPage.clickConfirmButton();
    await apiLoggedInApp.paymentPage.verifyPaymentSuccessMessage();
    
})
