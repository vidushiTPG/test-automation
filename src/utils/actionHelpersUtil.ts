
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