import { Page } from "@playwright/test";
import { HeaderFragment } from "./Fragments/header.fragment";


export class HomePage {

    page: Page;
    header: HeaderFragment;

    constructor(page: Page) {
        this.page = page;
        this.header = new HeaderFragment(page);

    }
    async openHomePage() {
        await this.page.goto('/')
    }

  

    async clickProductByName(name: string) {
        const card = this.page.locator('.card [data-test="product-name"]', { hasText: name });
        await card.click();

    }
}