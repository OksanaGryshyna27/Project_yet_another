import { Locator, Page } from "@playwright/test";

export class HeaderFragment {
    page: Page;
    signInButton: Locator;
    homeButton: Locator;
    categoriesButton: Locator;
    contactButton: Locator;
    signOutButton: Locator;
    navMenu: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signInButton = page.getByTestId('nav-sign-in');
        this.homeButton = page.getByTestId('nav-home');
        this.categoriesButton = page.getByTestId('nav-categories');
        this.contactButton = page.getByTestId('nav-contact');
        this.signOutButton = page.getByTestId('nav-sign-out');
        this.navMenu = page.getByTestId('nav-menu')
    }

      async openSignIn() { await this.signInButton.click(); }
    async openUserMenu() { await this.navMenu.click(); }

    async logOut() {
        await this.navMenu.click();
        await this.signOutButton.click();
    }

}

