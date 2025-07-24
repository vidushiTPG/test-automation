import { test } from '../fixtures/customFixtures';
import { expect } from '@playwright/test';
import { personalDetailsData, userAddressData, validRandomCredentials } from '../data/validCredentials';
import { generateAddress } from '../data/validCredentials';
import { getTestLogger } from '../logging/logger';
import fs from 'fs';


test('should register a new user and delete the account', async ({ homePage, loginPage, signUpPage }, testInfo) => {
  const logger = getTestLogger(testInfo.title);
  logger.info('Test started');

  // 1. Launch browser & 2. Navigate to url
  await homePage.navigateToHomePage();
  logger.info('Navigated to home page');

  // 3. Verify home page is visible successfully
  await expect(homePage.isSliderVisible).toBeTruthy();
  logger.info('Home page slider is visible');

  // 4. Click on 'Signup / Login' button
  await homePage.clickOnSignupLoginButton();
  logger.info('Clicked Signup/Login button');

  // 5. Verify 'New User Signup!' is visible
  await expect(loginPage.isNewUserSignupHeadingVisible()).toBeTruthy();
  logger.info('New User Signup heading is visible');

  // 6. Enter name and email address
  await loginPage.enterName(validRandomCredentials.name);
  await loginPage.enterEmail(validRandomCredentials.email);
  logger.info('Entered name and email');

  // 7. Click 'Signup' button
  await loginPage.clickOnSignupButton();
  logger.info('Clicked Signup button');

  // 8. Verify 'ENTER ACCOUNT INFORMATION' is visible
  await expect(signUpPage.isSignupHeadingVisible()).toBeTruthy();
  logger.info('Signup heading is visible');

  // 9. Fill details: Name, Email, Password, Date of birth
  await test.step('Fill personal details, and address details', async () => {
  await signUpPage.fillPersonalDetails(personalDetailsData);
    logger.info('Filled personal details');
    await signUpPage.checkNewsletter();
    await signUpPage.checkSpecialOffer();
    await signUpPage.fillAddressDetails(userAddressData);
    logger.info('Filled address details');
  });

  // 13. Click 'Create Account button'
  await signUpPage.clickCreateAccount();
  logger.info('Clicked Create Account button');

  // 14. Verify that 'ACCOUNT CREATED!' is visible
  await expect(signUpPage.isAccountCreatedVisible()).toBeTruthy();
  logger.info('Account created message is visible');

  // 15. Click 'Continue' button
  await signUpPage.clickContinue();
  logger.info('Clicked Continue button');

  // 16. Verify that 'Logged in as username' is visible
  await expect(homePage.isLoggedInAs(validRandomCredentials.name)).toBeTruthy();
  logger.info('Logged in as username is visible');

  // 17. Click 'Delete Account' button
  await homePage.clickDeleteAccount();
  logger.info('Clicked Delete Account button');

  // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
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
