import { test as base } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import PaymentPage from '../pages/PaymentPage';



type UIPages = {
    loginPage: LoginPage;
    signUpPage: SignUpPage;
    homePage: HomePage;
    productPage: ProductPage;
    cartPage: CartPage;
    paymentPage: PaymentPage;
};

export const test = base.extend<UIPages>({
    loginPage: async ({ page }, use)  => {
        const login = new LoginPage(page);
        await use(login);
    },
    homePage: async ({ page }, use)  => {
        const home = new HomePage(page);
        await use(home);
    },
    signUpPage: async ({ page }, use) => {
        const signUpPage = new SignUpPage(page);
        await use(signUpPage);
    },
    productPage: async ({ page }, use) => {
        const productPage = new ProductPage(page);
        await use(productPage);
    },
    cartPage: async ({ page }, use) => {
        const cartPage = new CartPage(page);
        await use(cartPage);
    },
    paymentPage: async ({ page }, use) => {
        const paymentPage = new PaymentPage(page);
        await use(paymentPage);
    }
});






