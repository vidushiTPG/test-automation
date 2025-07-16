import { test } from '../fixtures/customFixtures';
import { expect } from '@playwright/test';
import { validRandomCredentials } from '../data/validCredentials';
import { getTestLogger } from '../logging/logger';
import fs from 'fs';
import dotenv from 'dotenv';

test.skip('should login with valid credentials and delete the account', async ({ homePage, loginPage }, testInfo) => {
  const logger = getTestLogger(testInfo.title);
  logger.info('Test started');

  // 1. Launch browser & 2. Navigate to url
  await homePage.navigateToHomePage();
  logger.info('Navigated to home page');

  // 3. Verify home page is visible successfully
  await expect(homePage.isSliderVisible()).toBeTruthy();
  logger.info('Home page slider is visible');

  // 4. Click on 'Signup / Login' button
  await homePage.clickOnSignupLoginButton();
  logger.info('Clicked Signup/Login button');

  // 5. Verify 'Login to your account' is visible
  await expect(loginPage.isLoginHeadingVisible()).toBeTruthy();
  logger.info('Login heading is visible');

  // 6. Enter correct email address and password
  if (!process.env.email || !process.env.password) {
    throw new Error('Email or password environment variable is not set.');
  }
  await loginPage.enterLoginEmail(process.env.email);
  await loginPage.enterLoginPassword(process.env.password);
  logger.info('Entered valid credentials');

  // 7. Click 'login' button
  await loginPage.clickLoginButton();
  logger.info('Clicked login button');

  // 8. Verify that 'Logged in as username' is visible
  await expect(homePage.isLoggedInAs(validRandomCredentials.name)).toBeTruthy();
  logger.info('Logged in as username is visible');

  // 9. Click 'Delete Account' button
  await homePage.clickDeleteAccount();
  logger.info('Clicked Delete Account button');

  // 10. Verify that 'ACCOUNT DELETED!' is visible
  await expect(homePage.isAccountDeletedVisible()).toBeTruthy();
  logger.info('Account deleted message is visible');

  // Attach log file to report
  const logPath = `logs/${testInfo.title}.log`;
  if (fs.existsSync(logPath)) {
    await testInfo.attach('Test Log', { path: logPath, contentType: 'text/plain' });
  }
  logger.info('Test finished');
});
