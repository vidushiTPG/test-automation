import {Locator, Page} from '@playwright/test';
import SignupPage from './SignupPage';


export default class LoginPage {
    private readonly NEW_USER_SIGNUP_HEADING_TEXT: Locator;
    private readonly LOGIN_HEADING_TEXT: Locator;
    private readonly NAME_TEXTBOX: Locator;
    private readonly EMAIL_TEXTBOX: Locator ;
    private readonly SIGNUP_BUTTON : Locator;
    constructor(private page: Page) {
        this.NEW_USER_SIGNUP_HEADING_TEXT = this.page.locator("//h2[text()='New User Signup!']");
        this.LOGIN_HEADING_TEXT = this.page.locator("//h2[text()='Login to your account']");
        this.NAME_TEXTBOX = this.page.getByRole('textbox', {name: 'name'});
        this.EMAIL_TEXTBOX = this.page.locator('//input[@data-qa="signup-email"]');
        this.SIGNUP_BUTTON = this.page.locator('//button[text()="Signup"]');
    }

    async isNewUserSignupHeadingVisible() {
        return await this.NEW_USER_SIGNUP_HEADING_TEXT.isVisible();
    }
    async isLoginHeadingVisible() {
        return await this.LOGIN_HEADING_TEXT.isVisible();
    }
    async enterName(name: string) { 
        await this.NAME_TEXTBOX.fill(name);
    }
    async enterEmail(email: string) {
        await this.EMAIL_TEXTBOX.fill(email);
    }
    async clickOnSignupButton() {
        await this.SIGNUP_BUTTON.click().catch((error) => {
            console.error('Error clicking on Signup button:', error);
        });
        const signupPage = new SignupPage(this.page);
        return signupPage;
    }
    async isNameTextboxVisible() {
        return await this.NAME_TEXTBOX.isVisible();
    }
    async isEmailTextboxVisible() {
        return await this.EMAIL_TEXTBOX.isVisible();
    }
    async isSignupButtonVisible() {
        return await this.SIGNUP_BUTTON.isVisible();
    }
    async isSignupButtonEnabled() {
        return await this.SIGNUP_BUTTON.isEnabled();
    }
    async isSignupButtonDisabled() {
        return !(await this.SIGNUP_BUTTON.isEnabled());
    }      
}