import { Locator, Page } from "@playwright/test";
import { HeaderFragment } from "./Fragments/header.fragment";


export class HomePage {

    page: Page;
    header: HeaderFragment;
    productNames: Locator;
    sortDropdown: Locator;
    productPrices: Locator;
    categoryList: Locator;


    constructor(page: Page) {
        this.page = page;
        this.header = new HeaderFragment(page);
        this.productNames = this.page.getByTestId('product-name');
        this.sortDropdown = this.page.getByTestId('sort');
        this.productPrices = this.page.getByTestId('product-price');
        this.categoryList = this.page.getByTestId('category-list');

    }
    async openHomePage() {
        await this.page.goto('/')
    }

  

    async clickProductByName(name: string) {
        const card = this.page.locator('.card [data-test="product-name"]', { hasText: name });
        await card.click();

    }

    async getProductNames(): Promise<string[]> {
        return await this.productNames.allTextContents();
    }

    async selectSortOption(optionText: string) {
        await this.sortDropdown.selectOption(optionText);
    }
    
    async getProductPrices(): Promise<number[]> {
        const pricesText = await this.productPrices.allTextContents();

        return pricesText.map(price =>
            Number(price.replace('$', '').trim())
        )
    }

    async selectCategory(categoryName: string) {
  await this.page.getByLabel(categoryName).check();
    }
    
    async openFirstItem() {
        await this.productNames.first().click();
    }
}