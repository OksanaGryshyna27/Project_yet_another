import { Locator, Page, expect } from "@playwright/test";

export class ProductDetails {
    page: Page;
    productName: Locator;
    productPrice: Locator;
    addToCartButton: Locator;
    addToFavoriteButton: Locator;
    


    constructor(page: Page) {
        this.page = page;
        this.productName = page.getByTestId('product-name');
        this.productPrice = page.getByTestId('unit-price');
        this.addToCartButton = this.page.getByTestId('add-to-cart');
        this.addToFavoriteButton = this.page.getByTestId('add-to-favorites');

    }
    async expectProductName(expectedName: string) {
        await expect(this.productName).toHaveText(expectedName);
    }

    async expectProductURL() {
        await expect(this.page).toHaveURL(/\/product\//);
    }

    async expectProductPricr(expectedPrice: string) {
        await expect(this.productPrice).toContainText(expectedPrice);
    }
    
    async expectAddToCartButtonVisible() {
        await expect(this.addToCartButton).toBeVisible();
    }

    async expectAddToFavoriteButtonVisible() {
        await expect(this.addToFavoriteButton).toBeVisible();
    }
    }
