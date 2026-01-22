import { Page } from "@playwright/test";
import { AccountPage } from "./pageObjects/account.page";
import { LoginPage } from "./pageObjects/login.page"
import { CheckoutPage } from "./pageObjects/checkout.page";
import { HomePage } from "./pageObjects/home.page";
import { ProductDetails } from "./productDetails.page";
import { HeaderFragment } from "./pageObjects/Fragments/header.fragment";
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