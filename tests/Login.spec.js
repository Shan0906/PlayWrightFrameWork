import { test } from "../fixtureData/fixture";
import { expect } from "@playwright/test";
import { dataProvider } from "../utils/dataProvider";



const loginData=dataProvider.getdatadfromjson('./testdata/logindata.json');

test.beforeEach(async({page,homePage})=>
{ 
  await page.goto('https://naveenautomationlabs.com/opencart/');
  await homePage.clickOnMyAccount();
  await homePage.clickOnLogin();
});

for(let dataLogin of loginData)
    {
        test(dataLogin.testName,async({loginPage,page})=>
            {
                await loginPage.login(dataLogin.email,dataLogin.password);
                   if(dataLogin.expected==="success")
            {
               await expect(page).toHaveTitle("My Account");
            }
        else
            { const msg=await loginPage.errorMessage();
                await expect(msg).toContain('Warning');
                
            }
            }

        );

      
    }