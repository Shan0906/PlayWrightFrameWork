import { test } from "../fixtureData/fixture";
import { expect} from "@playwright/test"
import { dataProvider } from "../utils/dataProvider";
import { HomePage } from "../pages/HomePage";
import { TestConfig } from "../test.config";
const testConfig = new TestConfig();

const loginData=dataProvider.getdatadfromjson('F:/IndustryLevel/testdata/logindata.json');
const validData=loginData.find(data=>data.testName ==="Valid login");

test("Search Product i phone",async({page,loginPage,homePage})=>
    {
       await page.goto(testConfig.appUrl);
       await homePage.clickOnMyAccount();
       await homePage.clickOnLogin();
       await loginPage.login(validData.email,validData.password);
       await homePage.searchProduct(testConfig.productName);
       await homePage.clickOnSearch();
       await expect(homePage.getProduct(testConfig.productName)).toBeVisible();
       const originalProductCount=await homePage.countassertionOfProduct();
       expect(originalProductCount).toBeGreaterThan(0);

    });