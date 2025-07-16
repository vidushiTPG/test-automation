import { test } from '../fixtures/customFixtures';
import { expect } from '@playwright/test';

const invalidEmail = 'wrong.email@example.com';
const invalidPassword = 'WrongPassword123';
const errorText = 'Your email or password is incorrect!';

test('should show error for incorrect login credentials', async ({ homePage, loginPage }) => {
  // 1. Launch browser & 2. Navigate to url
  await homePage.navigateToHomePage();

  // 3. Verify home page is visible successfully
  await expect(homePage.isSliderVisible()).toBeTruthy();

  // 4. Click on 'Signup / Login' button
  await homePage.clickOnSignupLoginButton();

  // 5. Verify 'Login to your account' is visible
  await expect(loginPage.isLoginHeadingVisible()).toBeTruthy();

  // 6. Enter incorrect email address and password
  await loginPage.enterLoginEmail(invalidEmail);
  await loginPage.enterLoginPassword(invalidPassword);

  // 7. Click 'login' button
  await loginPage.clickLoginButton();

  // 8. Verify error 'Your email or password is incorrect!' is visible
  await expect(loginPage.isLoginErrorVisible(errorText)).toBeTruthy();
});
