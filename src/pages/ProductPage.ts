import { Page, Locator } from '@playwright/test';
import { waitForAndClick } from '../utils/actionHelpersUtil';

export default class ProductPage {
    private readonly ADD_TO_CART_BUTTON: Locator;
    private readonly CONTINUE_SHOPPING_BUTTON: Locator;
    private readonly PRODUCT_NAME: Locator;
    private readonly PRODUCT_PRICE: Locator;
    private readonly PRODUCT_QUANTITY: Locator;
    private readonly PRODUCT_IMAGE: Locator;
    private readonly PRODUCT_DESCRIPTION: Locator;

    constructor(private page: Page) {
        this.ADD_TO_CART_BUTTON = this.page.locator('(//a[contains(text(),"Add to cart")])[1]');
        this.CONTINUE_SHOPPING_BUTTON = this.page.locator('button.close-modal');
        this.PRODUCT_NAME = this.page.locator('h2');
        this.PRODUCT_PRICE = this.page.locator('span.price-new');
        this.PRODUCT_QUANTITY = this.page.locator('#quantity');
        this.PRODUCT_IMAGE = this.page.locator('img[alt="Blue Top"]');
        this.PRODUCT_DESCRIPTION = this.page.locator('//p[contains(text(),"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.")]');
    }
    async addFirstProductToCart() {
        await waitForAndClick(this.ADD_TO_CART_BUTTON);
    }

    async clickContinueShoppingButtonOnModal() {
        if (await this.CONTINUE_SHOPPING_BUTTON.isVisible({timeout: 2000}).catch(()=>false)) {
            await waitForAndClick(this.CONTINUE_SHOPPING_BUTTON);
        }
    }

    async getProductNameText() {
        return this.PRODUCT_NAME.textContent();
    }

    async getProductPrice() {
        return this.PRODUCT_PRICE.textContent();
    }

    async getQuantityValue() {
        return this.PRODUCT_QUANTITY.getAttribute('value');
    }

    async setQuantity(value: number) {
        await this.PRODUCT_QUANTITY.fill(String(value));
    }

    async getProductImage() {
        return this.PRODUCT_IMAGE.getAttribute('src');
    }

    async getProductDescription() {
        return this.PRODUCT_DESCRIPTION.textContent();
    }
}
