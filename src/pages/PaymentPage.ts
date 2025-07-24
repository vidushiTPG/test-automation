import { Page, Locator } from '@playwright/test';

export default class PaymentPage {
    private readonly NAME_ON_CARD: Locator;
    private readonly CARD_NUMBER: Locator;
    private readonly CVC: Locator;
    private readonly EXPIRY_MONTH: Locator;
    private readonly EXPIRY_YEAR: Locator;
    private readonly PAY_AND_CONFIRM_BUTTON: Locator;
    private readonly ORDER_SUCCESS_MESSAGE: Locator;
    constructor(private page: Page) {
        this.NAME_ON_CARD = this.page.locator('input[name="name_on_card"]');
        this.CARD_NUMBER = this.page.locator('input[name="card_number"]');
        this.CVC = this.page.locator('input[name="cvc"]');
        this.EXPIRY_MONTH = this.page.locator('input[name="expiry_month"]');
        this.EXPIRY_YEAR = this.page.locator('input[name="expiry_year"]');
        this.PAY_AND_CONFIRM_BUTTON = this.page.locator('button:has-text("Pay and Confirm Order")');
        this.ORDER_SUCCESS_MESSAGE = this.page.locator('p:has-text("Your order has been placed successfully!")');
    }
    async enterPaymentDetails({ name, cardNumber, cvc, expiryMonth, expiryYear }: { name: string, cardNumber: string, cvc: string, expiryMonth: string, expiryYear: string }) {
        await this.NAME_ON_CARD.fill(name);
        await this.CARD_NUMBER.fill(cardNumber);
        await this.CVC.fill(cvc);
        await this.EXPIRY_MONTH.fill(expiryMonth);
        await this.EXPIRY_YEAR.fill(expiryYear);
    }
    async clickPayAndConfirm() {
        await this.PAY_AND_CONFIRM_BUTTON.click();
    }
    async isOrderSuccessVisible() {
        return await this.ORDER_SUCCESS_MESSAGE.isVisible();
    }
}
