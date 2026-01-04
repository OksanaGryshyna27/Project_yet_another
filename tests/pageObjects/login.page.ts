import { Locator, Page } from "@playwright/test"

export class LoginPage {

    page: Page;
    emailField: Locator;
    passwordField: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailField = this.page.getByTestId("email");
        this.passwordField = this.page.getByTestId("password")
    }

    async openLoginPage() {
        await this.page.goto('https://practicesoftwaretesting.com/auth/login');
    }

    async performLogin(email: string, password: string): Promise<void> {
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.page.getByTestId('login-submit').click();
}
};