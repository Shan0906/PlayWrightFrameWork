import { test } from "../fixtureData/fixture";
import { expect} from "@playwright/test"
import { RandomDataGenrator } from "../utils/randomDataGenerator";

test.beforeEach(async({page,homePage})=>
    {
      await page.goto("https://naveenautomationlabs.com/opencart/");
      await homePage.clickOnMyAccount();
      await homePage.clickOnRegister();
    });

test("Registration test case",async({page,registerPage})=>
    {  // this is random data
        const firstNameRandomData=RandomDataGenrator.getrandomfirstname();
        const lastNameRandomData=RandomDataGenrator.getrandomlastname();
        const emailGerrateRandomData=RandomDataGenrator.getrandomEmail();
        const phoneRandomData=RandomDataGenrator.getrandomPhone();
        const PassRandomData=RandomDataGenrator.getrandomPassword();

        //this is test case

        await registerPage.enterFirstName(firstNameRandomData);
        await registerPage.enterLastName(lastNameRandomData);
        await registerPage.enterEmail(emailGerrateRandomData);
        await registerPage.enterTellphone(phoneRandomData);
        await registerPage.enterPass(PassRandomData);
        await registerPage.enterConfirmPass(PassRandomData);
        await registerPage.clickonsubScribeBtn();
        await registerPage.clickOnprivacyPolicyBtn();
        await registerPage.clickOncontinueBtn();

        await expect(await registerPage.isAccountCreated()).toBe(true);
        
        
     });