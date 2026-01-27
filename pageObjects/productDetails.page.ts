import { Locator, Page, expect } from "@playwright/test";

export class ProductDetails {
    page: Page;
    productName: Locator;
    productPrice: Locator;
    addToCartButton: Locator;
    addToFavoriteButton: Locator;
    toast: Locator;
    
    


    constructor(page: Page) {
        this.page = page;
        this.productName = page.getByTestId('product-name');
        this.productPrice = page.getByTestId('unit-price');
        this.addToCartButton = this.page.getByTestId('add-to-cart');
        this.addToFavoriteButton = this.page.getByTestId('add-to-favorites');
        this.toast = page.locator('#toast-container');
        

    }
    async verifyProductName(expectedName: string) {
        await expect(this.productName).toHaveText(expectedName);
    }

    async verifyProductURL() {
        await expect(this.page).toHaveURL(/\/product\//);
    }

    async verifyProductPrice(expectedPrice: string) {
        await expect(this.productPrice).toContainText(expectedPrice);
    }
    
    async verifyAddToCartButtonVisible() {
        await expect(this.addToCartButton).toBeVisible();
    }

    async verifyAddToFavoriteButtonVisible() {
        await expect(this.addToFavoriteButton).toBeVisible();
    }

    async clickToAddCartButton() {
        await (this.addToCartButton).click();
    }

    async verifyToastVisible() {
        await expect(this.toast).toBeVisible();
    }

    async verifyToastText() {
        await expect(this.toast).toContainText(
            'Product added to shopping cart'
        );
    }

    async verifyToastDisappears() {
        await expect(this.toast).toBeHidden({ timeout: 8000 });
    }

    async getProductData() {
        const name = await this.productName.textContent();
        const price = await this.productPrice.textContent();

        return {
    name: name?.trim() ?? '',
    price: Number(
      price
        ?.replace('$', '')
        .replace('€', '')
        .trim()
    ),
  };
}

    }
