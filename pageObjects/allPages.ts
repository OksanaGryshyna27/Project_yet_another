import { Page } from "@playwright/test";
import { AccountPage } from "./account.page"; 
import { LoginPage } from "./login.page"; 
import { CheckoutPage } from "./checkout.page"; 
import { HomePage } from "./home.page"; 
import { ProductDetails } from "./productDetails.page";
import { HeaderFragment } from "./Fragments/header.fragment";
import { BillingAddressPage } from "./billingAddress.page";
import { PaymentPage } from "./payment.page";

export class AllPages {
    loginPage: LoginPage;
    accountPage: AccountPage;
    checkoutPage: CheckoutPage;
    homePage: HomePage;
    productDetailsPage: ProductDetails;
    headerFragment: HeaderFragment;
    billingAddressPage: BillingAddressPage;
    paymentPage: PaymentPage;

    constructor(page: Page) {
        this.loginPage = new LoginPage(page);
        this.accountPage = new AccountPage(page);
        this.checkoutPage = new CheckoutPage(page);
        this.homePage = new HomePage(page);
        this.productDetailsPage = new ProductDetails(page);
        this.headerFragment = new HeaderFragment(page);
        this.billingAddressPage = new BillingAddressPage(page);
        this.paymentPage = new PaymentPage(page);
    }
}