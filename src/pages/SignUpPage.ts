import { Page, Locator } from "@playwright/test";
export default class SignUpPage {

    // Enter Account Information
    private readonly SIGNUP_HEADING_TEXT: Locator;
    private readonly NAME_TEXTBOX: Locator;
    private readonly EMAIL_TEXTBOX: Locator;
    private readonly PASSWORD_TEXTBOX: Locator;
    private readonly DAYS_DROPDOWNX: Locator;
    private readonly MONTHS_DROPDOWN: Locator;
    private readonly YEARS_DROPDOWN: Locator;
    private readonly NEWSLETTER_CHECKBOX: Locator;
    private readonly SPECIAL_OFFER_CHECKBOX: Locator;

    //Address Information
    private readonly FIRST_NAME_TEXTBOX: Locator;
    private readonly LAST_NAME_TEXTBOX: Locator;    
    private readonly COMPANY_TEXTBOX: Locator;
    private readonly ADDRESS1_TEXTBOX: Locator;
    private readonly ADDRESS2_TEXTBOX: Locator; 
    private readonly COUNTRY_DROPDOWN: Locator;
    private readonly STATE_TEXTBOX: Locator;
    private readonly CITY_TEXTBOX: Locator;
    private readonly ZIPCODE_TEXTBOX: Locator;
    private readonly MOBILE_NUMBER_TEXTBOX: Locator;
    private readonly CREATE_ACCOUNT_BUTTON: Locator;
    


    constructor(private page: Page) {
        
        // Enter Account Information
        this.SIGNUP_HEADING_TEXT = this.page.locator('//h2[text()="Enter Account Information"]');
        this.NAME_TEXTBOX = this.page.locator('#name');
        this.EMAIL_TEXTBOX = this.page.locator('#email');
        this.PASSWORD_TEXTBOX = this.page.locator('#password');
        this.DAYS_DROPDOWNX = this.page.locator('#days');
        this.MONTHS_DROPDOWN = this.page.locator('#months');
        this.YEARS_DROPDOWN = this.page.locator('#years');
        this.NEWSLETTER_CHECKBOX = this.page.locator('#newsletter');
        this.SPECIAL_OFFER_CHECKBOX = this.page.locator('//label[@for="optin"]');

        //Address Information
        this.FIRST_NAME_TEXTBOX = this.page.locator('#first_name');
        this.LAST_NAME_TEXTBOX = this.page.locator('#last_name');
        this.COMPANY_TEXTBOX = this.page.locator('#company');
        this.ADDRESS1_TEXTBOX = this.page.locator('#address1');
        this.ADDRESS2_TEXTBOX = this.page.locator('#address2');
        this.COUNTRY_DROPDOWN = this.page.locator('#country');
        this.STATE_TEXTBOX = this.page.locator('#state');
        this.CITY_TEXTBOX = this.page.locator('#city');
        this.ZIPCODE_TEXTBOX = this.page.locator('#zipcode');
        this.MOBILE_NUMBER_TEXTBOX = this.page.locator('#mobile_number');
        this.CREATE_ACCOUNT_BUTTON = this.page.locator('//button[text()="Create Account"]');
        
    }

    async isSignupHeadingVisible() {
        return await this.SIGNUP_HEADING_TEXT.isVisible();
    }

    async enterName(name: string) {
        await this.NAME_TEXTBOX.fill(name);
    }
    async enterEmail(email: string) {
        await this.EMAIL_TEXTBOX.fill(email);
    }
    async enterPassword(password: string) {
        await this.PASSWORD_TEXTBOX.fill(password);
    }
    async selectDay(day: string) {      
        await this.DAYS_DROPDOWNX.selectOption(day);
    }
    async selectMonth(month: string) {
        await this.MONTHS_DROPDOWN.selectOption(month);
    }
    async selectYear(year: string) {
        await this.YEARS_DROPDOWN.selectOption(year);
    }
    async checkNewsletter() {
        await this.NEWSLETTER_CHECKBOX.check();
    }
    async checkSpecialOffer() {     
        await this.SPECIAL_OFFER_CHECKBOX.check();
    }
    async enterFirstName(firstName: string) {   
        await this.FIRST_NAME_TEXTBOX.fill(firstName);
    }
    async enterLastName(lastName: string) {
        await this.LAST_NAME_TEXTBOX.fill(lastName);
    }
    async enterCompany(company: string) {
        await this.COMPANY_TEXTBOX.fill(company);
    }
    async enterAddress1(address1: string) {
        await this.ADDRESS1_TEXTBOX.fill(address1);
    }
    async enterAddress2(address2: string) {
        await this.ADDRESS2_TEXTBOX.fill(address2);
    }
    async selectCountry(country: string) {
        await this.COUNTRY_DROPDOWN.selectOption(country);
    }           
    async enterState(state: string) {
        await this.STATE_TEXTBOX.fill(state);
    }
    async enterCity(city: string) {
        await this.CITY_TEXTBOX.fill(city);
    }
    async enterZipcode(zipcode: string) {
        await this.ZIPCODE_TEXTBOX.fill(zipcode);
    }
    async enterMobileNumber(mobileNumber: string) {
        await this.MOBILE_NUMBER_TEXTBOX.fill(mobileNumber);
    }
    async clickOnCreateAccountButton() {
        await this.CREATE_ACCOUNT_BUTTON.click();
    }       
    async isNameTextboxVisible() {
        return await this.NAME_TEXTBOX.isVisible();
    }
    async isEmailTextboxVisible() {
        return await this.EMAIL_TEXTBOX.isVisible();
    }
    async isPasswordTextboxVisible() {
        return await this.PASSWORD_TEXTBOX.isVisible();
    }
    async isDaysDropdownVisible() {
        return await this.DAYS_DROPDOWNX.isVisible();
    }
    async isMonthsDropdownVisible() {
        return await this.MONTHS_DROPDOWN.isVisible();
    }
    async isYearsDropdownVisible() {
        return await this.YEARS_DROPDOWN.isVisible();
    }
    async isNewsletterCheckboxVisible() {
        return await this.NEWSLETTER_CHECKBOX.isVisible();
    }
    async isSpecialOfferCheckboxVisible() {
        return await this.SPECIAL_OFFER_CHECKBOX.isVisible();
    }
    async isFirstNameTextboxVisible() {
        return await this.FIRST_NAME_TEXTBOX.isVisible();
    }
    async isLastNameTextboxVisible() {
        return await this.LAST_NAME_TEXTBOX.isVisible();
    }
    async isCompanyTextboxVisible() {
        return await this.COMPANY_TEXTBOX.isVisible();
    }
    async isAddress1TextboxVisible() {
        return await this.ADDRESS1_TEXTBOX.isVisible();
    }
    async isAddress2TextboxVisible() {
        return await this.ADDRESS2_TEXTBOX.isVisible();
    }
    async isCountryDropdownVisible() {
        return await this.COUNTRY_DROPDOWN.isVisible();
    }
    async isStateTextboxVisible() {
        return await this.STATE_TEXTBOX.isVisible();
    }
    async isCityTextboxVisible() {
        return await this.CITY_TEXTBOX.isVisible();
    }
    async isZipcodeTextboxVisible() {
        return await this.ZIPCODE_TEXTBOX.isVisible();
    }
    async isMobileNumberTextboxVisible() {
        return await this.MOBILE_NUMBER_TEXTBOX.isVisible();
    }
    async isCreateAccountButtonVisible() {
        return await this.CREATE_ACCOUNT_BUTTON.isVisible();
    }
    async isCreateAccountButtonEnabled() {
        return await this.CREATE_ACCOUNT_BUTTON.isEnabled();
    }
    async isCreateAccountButtonDisabled() { 
        return !(await this.CREATE_ACCOUNT_BUTTON.isEnabled());
    }
    async isCreateAccountButtonClickable() {
        return await this.CREATE_ACCOUNT_BUTTON.isEnabled() && await this.CREATE_ACCOUNT_BUTTON.isVisible();
    }       
    async isCreateAccountButtonNotClickable() {
        return !(await this.CREATE_ACCOUNT_BUTTON.isEnabled()) || !(await this.CREATE_ACCOUNT_BUTTON.isVisible());
    }   
    async isCreateAccountButtonDisabledOrNotVisible() {
        return !(await this.CREATE_ACCOUNT_BUTTON.isEnabled()) || !(await this.CREATE_ACCOUNT_BUTTON.isVisible());
    }
    async isCreateAccountButtonEnabledAndVisible() {
        return await this.CREATE_ACCOUNT_BUTTON.isEnabled() && await this.CREATE_ACCOUNT_BUTTON.isVisible();
    }
    async isCreateAccountButtonDisabledAndNotVisible() {
        return !(await this.CREATE_ACCOUNT_BUTTON.isEnabled()) && !(await this.CREATE_ACCOUNT_BUTTON.isVisible());
    }
    async isCreateAccountButtonEnabledOrVisible() {
        return await this.CREATE_ACCOUNT_BUTTON.isEnabled() || await this.CREATE_ACCOUNT_BUTTON.isVisible();
    }
    async isCreateAccountButtonDisabledOrVisible() {
        return !(await this.CREATE_ACCOUNT_BUTTON.isEnabled()) || await this.CREATE_ACCOUNT_BUTTON.isVisible();
    }

    async isCreateAccountButtonEnabledAndNotVisible() {
        return await this.CREATE_ACCOUNT_BUTTON.isEnabled() && !(await this.CREATE_ACCOUNT_BUTTON.isVisible());
    }
    async isCreateAccountButtonDisabledAndVisible() {
        return !(await this.CREATE_ACCOUNT_BUTTON.isEnabled()) && await this.CREATE_ACCOUNT_BUTTON.isVisible();
    }
    async isCreateAccountButtonEnabledOrNotVisible() {
        return await this.CREATE_ACCOUNT_BUTTON.isEnabled() || !(await this.CREATE_ACCOUNT_BUTTON.isVisible());
    }
    async isCreateAccountButtonEnabledAndVisibleOrDisabledAndNotVisible() {
        return (await this.CREATE_ACCOUNT_BUTTON.isEnabled() && await this.CREATE_ACCOUNT_BUTTON.isVisible()) ||
               (!(await this.CREATE_ACCOUNT_BUTTON.isEnabled()) && !(await this.CREATE_ACCOUNT_BUTTON.isVisible()));
    }
    async isCreateAccountButtonDisabledAndVisibleOrEnabledAndNotVisible() {
        return (!(await this.CREATE_ACCOUNT_BUTTON.isEnabled()) && await this.CREATE_ACCOUNT_BUTTON.isVisible()) ||
               (await this.CREATE_ACCOUNT_BUTTON.isEnabled() && !(await this.CREATE_ACCOUNT_BUTTON.isVisible()));
    }   
    async isCreateAccountButtonEnabledOrVisibleOrDisabledAndNotVisible() {
        return (await this.CREATE_ACCOUNT_BUTTON.isEnabled() || await this.CREATE_ACCOUNT_BUTTON.isVisible()) ||
               (!(await this.CREATE_ACCOUNT_BUTTON.isEnabled()) && !(await this.CREATE_ACCOUNT_BUTTON.isVisible()));
    }
    async isCreateAccountButtonDisabledOrVisibleOrEnabledAndNotVisible() {

        return (!(await this.CREATE_ACCOUNT_BUTTON.isEnabled()) || await this.CREATE_ACCOUNT_BUTTON.isVisible()) ||
               (await this.CREATE_ACCOUNT_BUTTON.isEnabled() && !(await this.CREATE_ACCOUNT_BUTTON.isVisible()));
    }
    async isCreateAccountButtonEnabledAndVisibleOrDisabledAndNotVisibleOrEnabledOrVisible() {
        return (await this.CREATE_ACCOUNT_BUTTON.isEnabled() && await this.CREATE_ACCOUNT_BUTTON.isVisible()) ||
               (!(await this.CREATE_ACCOUNT_BUTTON.isEnabled()) && !(await this.CREATE_ACCOUNT_BUTTON.isVisible())) ||
               (await this.CREATE_ACCOUNT_BUTTON.isEnabled() || await this.CREATE_ACCOUNT_BUTTON.isVisible());
    }
    async isCreateAccountButtonDisabledAndVisibleOrEnabledAndNotVisibleOrDisabledOrVisible() {
        return (!(await this.CREATE_ACCOUNT_BUTTON.isEnabled()) && await this.CREATE_ACCOUNT_BUTTON.isVisible()) ||
               (await this.CREATE_ACCOUNT_BUTTON.isEnabled() && !(await this.CREATE_ACCOUNT_BUTTON.isVisible())) ||
               (!(await this.CREATE_ACCOUNT_BUTTON.isEnabled()) || await this.CREATE_ACCOUNT_BUTTON.isVisible());
    }

}