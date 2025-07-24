import { Page, Locator } from '@playwright/test';
import { waitForAndClick } from '../utils/actionHelpersUtil';

export default class ProductPage {
    private readonly ADD_TO_CART_BUTTON: Locator;
    private readonly CONTINUE_SHOPPING_BUTTON: Locator;
    constructor(private page: Page) {
        this.ADD_TO_CART_BUTTON = this.page.locator('(//a[contains(text(),"Add to cart")])[1]');
        this.CONTINUE_SHOPPING_BUTTON = this.page.locator('button.close-modal');
    }
    async addFirstProductToCart() {
        await waitForAndClick(this.ADD_TO_CART_BUTTON);

    }

    async clickContinueShoppingButtonOnModal() {
          if (await this.CONTINUE_SHOPPING_BUTTON.isVisible({timeout: 2000}).catch(()=>false)) {
            await waitForAndClick(this.CONTINUE_SHOPPING_BUTTON);
        }
    }
}
