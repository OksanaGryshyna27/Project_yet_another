import { Locator, Page } from "@playwright/test";

export class BillingAddressPage {
    page: Page;
    stateField: Locator;
    postCodeField: Locator;
    proceedToCheckout: Locator;
    streetField: Locator;
    cityField: Locator;
    countryField: Locator;

    constructor(page: Page) {
        this.page = page;
        this.stateField = this.page.getByTestId('state')
        this.postCodeField = this.page.getByTestId('postal_code')
        this.proceedToCheckout = this.page.getByTestId('proceed-3')
        this.streetField = this.page.getByTestId('street')
        this.cityField = this.page.getByTestId('city')
        this.countryField = this.page.getByTestId('country')

    }

    async fillStateField(state: string)  {
        await this.stateField.fill(state);
    }

    async fillPostCodeField(postCode: string)  {
        await this.postCodeField.fill(postCode);
    }

    async fillStreetField(street: string)  {
        await this.streetField.fill(street);
    }

    async fillCityField(city: string)  {
        await this.cityField.fill(city);
    }

    async fillCountryField(country: string)  {
        await this.countryField.fill(country);
    }


    async clickProceedToCheckout() {
        await this.proceedToCheckout.click();
    }
}