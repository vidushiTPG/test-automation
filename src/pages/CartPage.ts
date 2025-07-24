import { Page, Locator } from '@playwright/test';
import { waitForAndClick } from '../utils/actionHelpersUtil';

export default class CartPage {
    private readonly CART_PAGE_HEADER: Locator;
    private readonly PROCEED_TO_CHECKOUT_BUTTON: Locator;
    private readonly REGISTER_LOGIN_BUTTON: Locator;
    private readonly ADDRESS_DETAILS: Locator;
    private readonly ORDER_REVIEW: Locator;
    private readonly COMMENT_TEXTAREA: Locator;
    private readonly PLACE_ORDER_BUTTON: Locator;
    constructor(private page: Page) {
        this.CART_PAGE_HEADER = this.page.locator('h2:has-text("Shopping Cart")');
        this.PROCEED_TO_CHECKOUT_BUTTON = this.page.locator('a:has-text("Proceed To Checkout")');
        this.REGISTER_LOGIN_BUTTON = this.page.locator('a:has-text("Register / Login")');
        this.ADDRESS_DETAILS = this.page.locator('ul#address_delivery');
        this.ORDER_REVIEW = this.page.locator('h2:has-text("Review Your Order")');
        this.COMMENT_TEXTAREA = this.page.locator('textarea[name="message"]');
        this.PLACE_ORDER_BUTTON = this.page.locator('a:has-text("Place Order")');
    }
    async isCartPageVisible() {
        return await this.CART_PAGE_HEADER.isVisible();
    }
    async clickProceedToCheckout() {
        await waitForAndClick(this.PROCEED_TO_CHECKOUT_BUTTON);
    }
    async clickRegisterOrLogin() {
        await waitForAndClick(this.REGISTER_LOGIN_BUTTON);
    }
    async isAddressDetailsVisible() {
        return await this.ADDRESS_DETAILS.isVisible();
    }
    async isOrderReviewVisible() {
        return await this.ORDER_REVIEW.isVisible();
    }
    async enterOrderComment(comment: string) {
        await this.COMMENT_TEXTAREA.fill(comment);
    }
    async clickPlaceOrder() {
        await waitForAndClick(this.PLACE_ORDER_BUTTON);
    }
}
