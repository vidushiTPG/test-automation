import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';

test.describe('Register User Test', () => {
let homePage;
let loginPage;
let signupPage;


  test('should register a new user successfully', async ({ page }) => {
    // Instantiate page objects with the current 'page'
    homePage = new HomePage(page);
    await homePage.navigateToHomePage();

    await homePage.isSliderVisible();
     loginPage = await homePage.clickOnSignupLoginButton();
    expect(await loginPage.isNewUserSignupHeadingVisible()).toBeTruthy();

    await loginPage.enterName('Test User');
    await loginPage.enterEmail('testuserdefeffe@example.com');
    signupPage = await loginPage.clickOnSignupButton();

    //to the test intentionally failing
    // await expect(signupPage.isNewUserSignupHeadingVisible()).toBeTruthy(); 

    await expect(signupPage.isSignupHeadingVisible()).toBeTruthy();


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
});