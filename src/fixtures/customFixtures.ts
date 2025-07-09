import { test as base } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import HomePage from '../pages/HomePage';


type UIPages = {
    loginPage: LoginPage;
    signUpPage: SignUpPage;
    homePage: HomePage;
};

export const test = base.extend<UIPages>( {
    
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
    await use(signUpPage)
}
});






