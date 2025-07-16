
import { Frame } from '@playwright/test';

export async function waitForAndClick(selector) {
  try {
    await selector.waitFor({ state: 'attached' });
    await selector.waitFor({ state: 'visible' });
    await selector.click();

  } catch (error) {
    console.error(`Error waiting for and clicking on selector: ${selector}`, error);
    throw error;
    
  }
  
}

async function waitForAndFill(selector, text) {
  try {
    await selector.waitFor({ state: 'attached' });
    await selector.waitFor({ state: 'visible' });
    await selector.fill(text);

  } catch (error) {
    console.error(`Error waiting for and filling selector: ${selector}`, error);
    throw error;

  }

}

async function getTextFromElement(selector) {
  try {
    await selector.waitFor({ state: 'attached' });
    await selector.waitFor({ state: 'visible' });
    return await selector.textContent();

  } catch (error) {
    console.error(`Error waiting for and getting text from selector: ${selector}`, error);
    throw error;

  }

}

async function getAttributeValue(selector, attribute) {
  try {
    await selector.waitFor({ state: 'attached' });
    await selector.waitFor({ state: 'visible' });
    return await selector.getAttribute(attribute);

  } catch (error) {
    console.error(`Error waiting for and getting attribute ${attribute} from selector: ${selector}`, error);
    throw error;

  }

}

async function clearAndType(selector, text) {
  try {
    await selector.waitFor({ state: 'attached' });
    await selector.waitFor({ state: 'visible' });
    await selector.fill(''); // Clear the input
    await selector.fill(text); // Type the new text

  } catch (error) {
    console.error(`Error waiting for and typing in selector: ${selector}`, error);
    throw error;

  }
  
}

async function selectDropdownByValue(selector, value) {
  try {
    await selector.waitFor({ state: 'attached' });
    await selector.waitFor({ state: 'visible' });
    await selector.selectOption({ label: value });
  } catch (error) {
    console.error(`Error waiting for and selecting dropdown value: ${value} in selector: ${selector}`, error);
    throw error;
  }
}

async function selectDropdownByLabel(selector, label) {
  try {
    await selector.waitFor({ state: 'attached' });
    await selector.waitFor({ state: 'visible' });
    await selector.selectOption({ label: label });
  } catch (error) {
    console.error(`Error waiting for and selecting dropdown label: ${label} in selector: ${selector}`, error);
    throw error;
  }
}

async function getFrameByName(page, frameName: string): Promise<Frame> {
  const frame = page.frame({ name: frameName });
  if (!frame) throw new Error(`Frame with name "${frameName}" not found`);
  return frame;
}

export async function getFrameBySelector(page, selector: string): Promise<Frame> {
  const elementHandle = await page.waitForSelector(selector);
  const frame = await elementHandle.contentFrame();
  if (!frame) throw new Error(`No frame found for selector: ${selector}`);
  return frame;
}

export async function waitForElementInFrame(frame: Frame, selector: string) {
  return await frame.waitForSelector(selector, { state: 'visible' });
}

export async function clickInFrame(frame: Frame, selector: string) {
  const element = await frame.waitForSelector(selector, { state: 'visible' });
  await element.click();
}

export async function fillInFrame(frame: Frame, selector: string, value: string) {
  const element = await frame.waitForSelector(selector, { state: 'visible' });
  await element.fill(value);
}

export async function getTextInFrame(frame: Frame, selector: string): Promise<string> {
  const element = await frame.waitForSelector(selector);
  return (await element.textContent())?.trim() || '';
}

export function logAllFrames(page) {
  page.frames().forEach(f => console.log('Frame URL:', f.url()));
}

export async function evaluateInFrame<T>(frame: Frame, script: () => T): Promise<T> {
  return await frame.evaluate(script);
}


// Open New Tab/Window Handling Helpers

import { Page, BrowserContext } from '@playwright/test';

export async function clickAndWaitForNewPage(currentPage: Page, context: BrowserContext, clickSelector: string): Promise<Page> {
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    currentPage.click(clickSelector),
  ]);
  await newPage.waitForLoadState('domcontentloaded');
  return newPage;
}

export function getAllPages(context: BrowserContext): Page[] {
  return context.pages();
}

export async function getPageByTitle(context: BrowserContext, title: string): Promise<Page> {
  for (const page of context.pages()) {
    const pageTitle = await page.title();
    if (pageTitle.includes(title)) {
      return page;
    }
  }
  throw new Error(`No page with title containing "${title}" was found`);
}

export async function closeOtherPages(context: BrowserContext, keepPage: Page): Promise<void> {
  const pages = context.pages();
  for (const page of pages) {
    if (page !== keepPage) {
      await page.close();
    }
  }
}


/**
 * Waits for a popup window to open as a result of clicking on a selector.
 */
 async function handlePopupAfterClick(
  parentPage: Page,
  context: BrowserContext,
  clickSelector: string
): Promise<Page> {
  const [popupPage] = await Promise.all([
    context.waitForEvent('page'),
    parentPage.click(clickSelector)
  ]);

  await popupPage.waitForLoadState('domcontentloaded');
  return popupPage;
}

/**
 * Waits for a popup window to open after clicking a trigger.
 * Uses the 'popup' event directly from the parent page.
 *
 * @param parentPage - The parent page where the popup is triggered.
 * @param triggerSelector - The selector that, when clicked, opens the popup.
 * @returns The newly opened popup Page object.
 */
export async function waitForPopupWindow(
  parentPage: Page,
  triggerSelector: string
): Promise<Page> {
  try {
    const [popup] = await Promise.all([
      parentPage.waitForEvent('popup'),        //  Wait for popup event on the page
      parentPage.click(triggerSelector),       //  Trigger the popup
    ]);

    await popup.waitForLoadState('domcontentloaded');
    return popup;
  } catch (error) {
    console.error('Failed to handle popup:', error);
    throw error;
  }
}


