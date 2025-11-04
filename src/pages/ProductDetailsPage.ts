import { Page, Locator } from '@playwright/test';

export class ProductDetailsPage {
  readonly page: Page;
  readonly PRODUCT_NAME: Locator;
  readonly PRODUCT_IMAGE: Locator;
  readonly PRODUCT_PRICE: Locator;
  readonly PRODUCT_DESCRIPTION: Locator;
  readonly REVIEW_FORM_NAME: Locator;
  readonly REVIEW_FORM_EMAIL: Locator;
  readonly REVIEW_FORM_MESSAGE: Locator;
  readonly REVIEW_FORM_SUBMIT: Locator;
  readonly REVIEW_SUCCESS_MESSAGE: Locator;

  constructor(page: Page) {
    this.page = page;
    this.PRODUCT_NAME = page.locator('h2');
    this.PRODUCT_IMAGE = page.locator('img[alt="Blue Top"]');
    this.PRODUCT_PRICE = page.locator('span.price-new');
    this.PRODUCT_DESCRIPTION = page.locator('//p[contains(text(),"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.")]');
    this.REVIEW_FORM_NAME = page.locator('#name');
    this.REVIEW_FORM_EMAIL = page.locator('#email');
    this.REVIEW_FORM_MESSAGE = page.locator('#review');
    this.REVIEW_FORM_SUBMIT = page.locator('//button[contains(text(),"Submit")]');
    this.REVIEW_SUCCESS_MESSAGE = page.locator('//div[contains(text(),"Thank you for your review.")]');
  }

  async submitReview(name: string, email: string, message: string): Promise<boolean> {
    await this.REVIEW_FORM_NAME.fill(name);
    await this.REVIEW_FORM_EMAIL.fill(email);
    await this.REVIEW_FORM_MESSAGE.fill(message);
    await this.REVIEW_FORM_SUBMIT.click();
    return (await this.REVIEW_SUCCESS_MESSAGE.isVisible()) ? true : false;
  }
}
