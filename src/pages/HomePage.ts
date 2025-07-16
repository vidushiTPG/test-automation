import {Page, Locator} from '@playwright/test';
import LoginPage from './LoginPage';
import { expect } from '@playwright/test';

export default class HomePage {
    private readonly SLIDER: Locator;
    private readonly SIGNUP_LOGIN_BUTTON: Locator;
    private readonly pageTitle: Locator;
    private readonly DELETE_ACCOUNT_BUTTON: Locator;
    private readonly ACCOUNT_DELETED_MESSAGE: Locator;
    private readonly CONTINUE_BUTTON: Locator;



    constructor(private page: Page){
        this.page = page;
        this.SLIDER = this.page.locator('#slider-carousel');
        this.SIGNUP_LOGIN_BUTTON = this.page.locator("//a[text()=' Signup / Login']");
        this.DELETE_ACCOUNT_BUTTON = this.page.locator("//a[text()=' Delete Account']");
        this.ACCOUNT_DELETED_MESSAGE = this.page.locator("//h2[contains(text(),'ACCOUNT DELETED!')]");
        this.CONTINUE_BUTTON = this.page.locator("//a[text()='Continue']");

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

    async isLoggedInAs(username: string) {
        const LOGGED_IN_USERNAME = this.page.locator(`//a[contains(text(),'Logged in as ${username}')]`);
        return await LOGGED_IN_USERNAME.isVisible();
    }
    async clickDeleteAccount() {
        await this.DELETE_ACCOUNT_BUTTON.click();
    }
    async isAccountDeletedVisible() {
        return await this.ACCOUNT_DELETED_MESSAGE.isVisible();
    }
    async clickContinueAfterDelete() {
        const continueBtn = this.page.locator("//a[text()='Continue']");
        await continueBtn.waitFor({ state: 'visible', timeout: 10000 });
        await continueBtn.waitFor({ state: 'attached', timeout: 10000 });
        await expect(continueBtn).toBeVisible({ timeout: 10000 });
        await expect(continueBtn).toBeEnabled({ timeout: 10000 });
        await continueBtn.click();
    }
     
}
