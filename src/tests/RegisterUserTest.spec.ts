import { test } from '../fixtures/customFixtures';
import { expect } from '@playwright/test';
import { validCredentials } from '../data/validCredentials';
import { generateAddress } from '../data/validCredentials';



test('should register a new user and delete the account', async ({ homePage, loginPage, signUpPage }) => {
  // 1. Launch browser & 2. Navigate to url
  await homePage.navigateToHomePage();

  // 3. Verify home page is visible successfully
  await expect(homePage.isSliderVisible).toBeTruthy();

  // 4. Click on 'Signup / Login' button
  await homePage.clickOnSignupLoginButton();

  // 5. Verify 'New User Signup!' is visible
  await expect(loginPage.isNewUserSignupHeadingVisible()).toBeTruthy();

  // 6. Enter name and email address
  await loginPage.enterName(validCredentials.name);
 // const email = generateEmail();
  await loginPage.enterEmail(validCredentials.email);

  // 7. Click 'Signup' button
  await loginPage.clickOnSignupButton();

  // 8. Verify 'ENTER ACCOUNT INFORMATION' is visible
  await expect(signUpPage.isSignupHeadingVisible()).toBeTruthy();

  // 9. Fill details: Name, Email, Password, Date of birth
  await test.step('Fill personal details, and address deatils', async () => {
    await signUpPage.fillPersonalDetails(validCredentials.name, validCredentials.email, validCredentials.password, '10', 'May', '1990');
    await signUpPage.checkNewsletter();
    await signUpPage.checkSpecialOffer(); 
    const address = generateAddress();

    await signUpPage.fillAddressDetails(address.firstName, address.lastName, address.company, address.address1, address.address2, address.country, address.state, address.city, address.zipCode, address.mobileNumber);
  });

  // 13. Click 'Create Account button'
  await signUpPage.clickCreateAccount();

  // 14. Verify that 'ACCOUNT CREATED!' is visible
  await expect(signUpPage.isAccountCreatedVisible()).toBeTruthy();

  // 15. Click 'Continue' button
  await signUpPage.clickContinue();

  // 16. Verify that 'Logged in as username' is visible
  await expect(homePage.isLoggedInAs(validCredentials.name)).toBeTruthy();

  // 17. Click 'Delete Account' button
  await homePage.clickDeleteAccount();

  // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
  await expect(homePage.isAccountDeletedVisible()).toBeTruthy();
  await homePage.clickContinueAfterDelete();
});
