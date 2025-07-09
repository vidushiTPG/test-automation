import { expect } from '@playwright/test';
import { test } from '../fixtures/customFixtures';
import homePage from '../pages/HomePage';

test('should register a new user successfully', async ({ page, homePage, loginPage, signUpPage }) => {
    await homePage.navigateToHomePage();

    await homePage.isSliderVisible();
     loginPage = await homePage.clickOnSignupLoginButton();
    expect(await loginPage.isNewUserSignupHeadingVisible()).toBeTruthy();

    await loginPage.enterName('Test User');
    await loginPage.enterEmail('testuserdefeffe@example.com');
    signUpPage = await loginPage.clickOnSignupButton();

    //to the test intentionally failing
    // await expect(signupPage.isNewUserSignupHeadingVisible()).toBeTruthy(); 

    await expect(signUpPage.isSignupHeadingVisible()).toBeTruthy();


  });

  test.skip('Test that env variable working', async ({ page }) => {
    // Access environment variables
    console.log(process.env.env);
    console.log(process.env.email);
    console.log(process.env.password);
    if (!process.env.env) {
      throw new Error('baseURL environment variable is not defined');
    }
    await page.goto(process.env.env);
  });