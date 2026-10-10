import { test } from "../fixtureData/fixture";
import { expect} from "@playwright/test"
import { RandomDataGenrator } from "../utils/randomDataGenerator";

test.beforeEach(async({page,homePage})=>
    {
      await page.goto("https://naveenautomationlabs.com/opencart/");
      await homePage.clickOnMyAccount();
      await homePage.clickOnRegister();
    });

test.skip("Registration test case",async({page,registerPage})=>
    {  // this is random data
        const firstNameRandomData=RandomDataGenrator.getrandomfirstname();
        const lastNameRandomData=RandomDataGenrator.getrandomlastname();
        const emailGerrateRandomData=RandomDataGenrator.getrandomEmail();
        const phoneRandomData=RandomDataGenrator.getrandomPhone();
        const PassRandomData=RandomDataGenrator.getrandomPassword();

        //this is test case
       await registerPage.registrationform(firstNameRandomData,lastNameRandomData,emailGerrateRandomData,phoneRandomData,PassRandomData);
        await registerPage.clickonsubScribeBtn();
        await registerPage.clickOnprivacyPolicyBtn();
        await registerPage.clickOncontinueBtn();

        await expect(await registerPage.isAccountCreated()).toBe(true);
        
        
     })
     test.only("Registartion without firstname",async({page,registerPage})=>
        {
        const lastNameRandomData=RandomDataGenrator.getrandomlastname();
        const emailGerrateRandomData=RandomDataGenrator.getrandomEmail();
        const phoneRandomData=RandomDataGenrator.getrandomPhone();
        const PassRandomData=RandomDataGenrator.getrandomPassword();
        await registerPage.registrationform("",lastNameRandomData,emailGerrateRandomData,phoneRandomData,PassRandomData);
        await registerPage.clickonsubScribeBtn();
        await registerPage.clickOnprivacyPolicyBtn();
        await registerPage.clickOncontinueBtn();
        await expect(page).toHaveURL(/route=account\/register/);
        await expect(registerPage.errorfirstnameMessage()).toHaveText('First Name must be between 1 and 32 characters!');

        })
     
     ;