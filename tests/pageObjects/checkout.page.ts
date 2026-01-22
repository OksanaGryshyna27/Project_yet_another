import { Locator, Page, expect } from "@playwright/test";


export class CheckoutPage {
    page: Page;
    itemQuantity: Locator;
    productItem: Locator;
    proceedButton: Locator;
    productPriceCheckout: Locator;
    totalPriceCheckout: Locator;
    proceedToCheckoutButton1: Locator;
    proceedToCheckoutButton2: Locator;



    constructor(page: Page) {
        this.page = page;
        this.itemQuantity = this.page.getByTestId('product-quantity');
        this.productItem = this.page.getByTestId('product-title');
        this.proceedButton = this.page.getByTestId('proceed-1');
        this.productPriceCheckout = this.page.getByTestId('product-price');
        this.totalPriceCheckout = this.page.getByTestId('cart-total');
        this.proceedToCheckoutButton1 = this.page.getByTestId('proceed-1');
        this.proceedToCheckoutButton2 = this.page.getByTestId('proceed-2');
        
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

    async getProductNameCheckout(): Promise<string> {
        return (await this.productItem.textContent())!.trim();
    }

    async getProductPrice(): Promise<number> {
        const priceText = await this.productPriceCheckout.textContent();
        return Number(priceText?.replace('$', '').trim());
    }

    async getTotalPrice(): Promise<number> {
        const totalText = await this.totalPriceCheckout.textContent();
        return Number(totalText?.replace('$', '').trim());
    }

    async clickProceedToCheckoutButton1() {
        await this.proceedToCheckoutButton1.click()
    }

    async clickProceedToCheckoutButton2() {
        await this.proceedToCheckoutButton2.click()
    }
}