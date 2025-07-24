import { Page, Locator } from '@playwright/test';

export async function getVisibleLocator(page: Page, locators: string[]): Promise<Locator> {
  for (const xpath of locators) {
    const locator = page.locator(xpath);
    if (await locator.isVisible()) {
      return locator;
    }
  }
  throw new Error(`None of the locators were visible: ${locators.join(', ')}`);
}
