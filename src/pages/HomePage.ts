import {Page, Locator} from '@playwright/test';
import LoginPage from './LoginPage';

export default class HomePage {
    private readonly SLIDER: Locator;
    private readonly SIGNUP_LOGIN_BUTTON: Locator;
    private readonly pageTitle: Locator;

    constructor(private page: Page){
        this.page = page;
        this.SLIDER = this.page.locator('#slider-carousel');
        this.SIGNUP_LOGIN_BUTTON = this.page.locator("//a[text()=' Signup / Login']");
    }

    async navigateToHomePage() {
        await this.page.goto('/');
    }
    
    async clickOnSignupLoginButton() {
        await this.SIGNUP_LOGIN_BUTTON.click().catch((error) => {
            console.error('Error clicking on Signup/Login button:', error);
        });
        const loginPage = new LoginPage(this.page);
        return loginPage;

    }   

    async isSliderVisible() {
        return await this.SLIDER.isVisible();
    }

    async getPageTitle(): Promise<string> {
        return await this.page.title();
}
     
}
