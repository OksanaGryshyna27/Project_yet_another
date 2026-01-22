import { Locator, Page, expect } from "@playwright/test";

export class PaymentPage {
    page: Page;
    paymentMethod: Locator;
    creditCardNumber: Locator;
    expirationDate: Locator;
    cvv: Locator;
    cardHolder: Locator;
    confirmButton: Locator;
    paymentSuccessMessage: Locator;


   

    constructor(page: Page) {
        this.page = page;
        this.paymentMethod = this.page.getByTestId('payment-method');
        this.creditCardNumber = this.page.getByTestId('credit_card_number');
        this.expirationDate = this.page.getByTestId('expiration_date');
        this.cvv = this.page.getByTestId('cvv');
        this.cardHolder = this.page.getByTestId('card_holder_name');
        this.confirmButton = this.page.getByTestId('finish');
        this.paymentSuccessMessage = this.page.getByTestId('payment-success-message');
  
    }

    async selectPaymentOption(optionText: string) {
        await this.paymentMethod.selectOption(optionText);
    }

    async fillCreditCardNumber(cardNumber: string) {
        await this.creditCardNumber.fill(cardNumber);
    }

    async fillExpirationDate(monthsToAdd: number = 3) {
        const date = new Date();
        date.setMonth(date.getMonth() + monthsToAdd);

        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString();

        const formattedExpirationDate = `${month}/${year}`;

        await this.expirationDate.fill(formattedExpirationDate);
    }

    async fillCvv(cvv: string) {
        await this.cvv.fill(cvv);
    }

    async fillCardHolder(name: string) {
        await this.cardHolder.fill(name);
    }

    async clickConfirmButton() {
        await this.confirmButton.click();
    }

    async verifyPaymentSuccessMessage() {
        await expect (this.paymentSuccessMessage).toBeVisible();
    }
}