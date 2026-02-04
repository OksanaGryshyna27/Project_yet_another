import { Locator, Page } from "@playwright/test";

export class BillingAddressPage {
    page: Page;
    stateField: Locator;
    postCodeField: Locator;
    proceedToCheckout: Locator;

    constructor(page: Page) {
        this.page = page;
        this.stateField = this.page.getByTestId('state')
        this.postCodeField = this.page.getByTestId('postal_code')
        this.proceedToCheckout = this.page.getByTestId('proceed-3')
    }

    async fillStateField(state: string)  {
        await this.stateField.fill(state);
    }

    async fillPostCodeField(postCode: string)  {
        await this.postCodeField.fill(postCode);
    }

    async clickProceedToCheckout() {
        await this.proceedToCheckout.click();
    }
}