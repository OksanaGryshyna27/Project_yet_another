import { Locator, Page, expect } from "@playwright/test";


export class CheckoutPage {
    page: Page;
    itemQuantity: Locator;
    productItem: Locator;
    proceedButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.itemQuantity = this.page.getByTestId('product-quantity');
        this.productItem = this.page.getByTestId('product-title');
        this.proceedButton = this.page.getByTestId('proceed-1');
    }
   
    async verifyCheckoutURL() {
        await expect(this.page).toHaveURL(/\/checkout$/);
    }

    async verifyItemCount(expectedQuantity: string) {
        await expect(this.itemQuantity).toHaveValue(expectedQuantity);
    }

    async verifyProductTitle(expectedName: string) {
        await expect(this.productItem).toHaveText(expectedName);
    }

    async verifyProceedButtonVisible() {
        await expect(this.proceedButton).toBeVisible();
    }
}