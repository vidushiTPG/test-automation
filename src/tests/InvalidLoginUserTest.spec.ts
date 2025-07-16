import { test } from '../fixtures/customFixtures';
import { expect } from '@playwright/test';
import { getTestLogger } from '../logging/logger';
import fs from 'fs';
import { invalidRandomCredentials } from '../data/validCredentials';

const invalidEmail = invalidRandomCredentials.email;
const invalidPassword = invalidRandomCredentials.password;
const errorText = 'Your email or password is incorrect!';

test('should show error for incorrect login credentials', async ({ homePage, loginPage }, testInfo) => {
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

  // 6. Enter incorrect email address and password
  await loginPage.enterLoginEmail(invalidEmail);
  await loginPage.enterLoginPassword(invalidPassword);
  logger.info('Entered invalid credentials');

  // 7. Click 'login' button
  await loginPage.clickLoginButton();
  logger.info('Clicked login button');

  // 8. Verify error 'Your email or password is incorrect!' is visible
  const errorVisible = await loginPage.isLoginErrorVisible(errorText);
  await expect(errorVisible).toBeTruthy();
  logger.info(`Error message visible: ${errorVisible}`);

  // Attach log file to report
  const logPath = `logs/${testInfo.title}.log`;
  if (fs.existsSync(logPath)) {
    await testInfo.attach('Test Log', { path: logPath, contentType: 'text/plain' });
  }
  logger.info('Test finished');
});
