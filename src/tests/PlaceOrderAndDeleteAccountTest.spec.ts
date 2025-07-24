import { test } from '../fixtures/customFixtures';
import { expect } from '@playwright/test';
import { validRandomCredentials, personalDetailsData, userAddressData } from '../data/validCredentials';
import { getTestLogger } from '../logging/logger';
import fs from 'fs';

// Assumes you have productPage, cartPage, paymentPage POMs with the required methods

test('should place an order and delete the account', async ({ homePage, loginPage, signUpPage, productPage, cartPage, paymentPage }, testInfo) => {
  const logger = getTestLogger(testInfo.title);
  logger.info('Test started');

  // 1-3. Launch browser, navigate, verify home
  await homePage.navigateToHomePage();
  logger.info('Navigated to home page');
  await expect(homePage.isSliderVisible()).toBeTruthy();
  logger.info('Home page slider is visible');

  // 4. Add products to cart
  await productPage.addFirstProductToCart();
  logger.info('Added first product to cart');

  // 5. Click 'Cart' button
  await homePage.clickViewCartButton();
  logger.info('Clicked Cart button');

  // 6. Verify cart page is displayed
  await expect(cartPage.isCartPageVisible()).toBeTruthy();
  logger.info('Cart page is visible');

  // 7. Click Proceed To Checkout
  await cartPage.clickProceedToCheckout();
  logger.info('Clicked Proceed To Checkout');

  // 8. Click 'Register / Login' button
  await cartPage.clickRegisterOrLogin();
  logger.info('Clicked Register/Login button');

  // 9. Fill all details in Signup and create account
  await loginPage.enterName(validRandomCredentials.name);
  await loginPage.enterEmail(validRandomCredentials.email);
  await loginPage.clickOnSignupButton();
  logger.info('Started signup process');
  await expect(signUpPage.isSignupHeadingVisible()).toBeTruthy();
  await signUpPage.fillPersonalDetails(personalDetailsData);
  await signUpPage.checkNewsletter();
  await signUpPage.checkSpecialOffer();
  await signUpPage.fillAddressDetails(userAddressData);
  await signUpPage.clickCreateAccount();
  logger.info('Filled signup and address details');

  // 10. Verify 'ACCOUNT CREATED!' and click 'Continue' button
  await expect(signUpPage.isAccountCreatedVisible()).toBeTruthy();
  logger.info('Account created message is visible');
  await signUpPage.clickContinue();
  logger.info('Clicked Continue after account creation');

  // 11. Verify 'Logged in as username' at top
  await expect(homePage.isLoggedInAs(validRandomCredentials.name)).toBeTruthy();
  logger.info('Logged in as username is visible');

  // 12. Click 'Cart' button
  await homePage.clickCartNavButton();
  logger.info('Clicked Cart Nav button');

  // 13. Click 'Proceed To Checkout' button
  await cartPage.clickProceedToCheckout();
  logger.info('Clicked Proceed To Checkout again');

  // 14. Verify Address Details and Review Your Order
  await expect(cartPage.isAddressDetailsVisible()).toBeTruthy();
  await expect(cartPage.isOrderReviewVisible()).toBeTruthy();
  logger.info('Address details and order review are visible');

  // 15. Enter description in comment text area and click 'Place Order'
  await cartPage.enterOrderComment('Please deliver between 9am-5pm');
  await cartPage.clickPlaceOrder();
  logger.info('Entered comment and placed order');

  // 16. Enter payment details
  await paymentPage.enterPaymentDetails({
    name: 'Test User',
    cardNumber: '4111111111111111',
    cvc: '123',
    expiryMonth: '12',
    expiryYear: '2028'
  });
  logger.info('Entered payment details');

  // 17. Click 'Pay and Confirm Order' button
  await paymentPage.clickPayAndConfirm();
  logger.info('Clicked Pay and Confirm Order');

  // 18. Verify success message
  await expect(paymentPage.isOrderSuccessVisible()).toBeTruthy();
  logger.info('Order success message is visible');

  // 19. Click 'Delete Account' button
  await homePage.clickDeleteAccount();
  logger.info('Clicked Delete Account button');

  // 20. Verify 'ACCOUNT DELETED!' and click 'Continue' button
  await expect(homePage.isAccountDeletedVisible()).toBeTruthy();
  logger.info('Account deleted message is visible');
  await homePage.clickContinueAfterDelete();
  logger.info('Clicked Continue after delete');

  // Attach log file to report
  const logPath = `logs/${testInfo.title}.log`;
  if (fs.existsSync(logPath)) {
    await testInfo.attach('Test Log', { path: logPath, contentType: 'text/plain' });
  }
  logger.info('Test finished');
});
