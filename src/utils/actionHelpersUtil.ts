import {Page} from '@playwright/test';

export async function waitForAndClick(page, selector) {
    await page.waitForSelector(selector, { state: 'visible' });
      await page.click(selector);

}