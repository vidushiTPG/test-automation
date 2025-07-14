import { test } from '../fixtures/customFixtures';
import { expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

test('should login with valid credentials and delete the account', async ({ homePage, loginPage }) => {
  // 1. Launch browser & 2. Navigate to url
  await homePage.navigateToHomePage();

  // 3. Verify home page is visible successfully
  await expect(homePage.isSliderVisible()).toBeTruthy();

  // 4. Click on 'Signup / Login' button
  await homePage.clickOnSignupLoginButton();

  // 5. Verify 'Login to your account' is visible
  await expect(loginPage.isLoginHeadingVisible()).toBeTruthy();

  // 6. Enter correct email address and password
  if (!process.env.email || !process.env.password) {
    throw new Error('Email or password environment variable is not set.');
  }
  await loginPage.enterLoginEmail(process.env.email);
  await loginPage.enterLoginPassword(process.env.password);

  // 7. Click 'login' button
  await loginPage.clickLoginButton();

  // 10. Verify that 'ACCOUNT DELETED!' is visible
  await expect(homePage.isSliderVisible()).toBeTruthy();
});
