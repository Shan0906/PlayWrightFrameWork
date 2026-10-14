import { test } from "../fixtureData/fixture";
import { expect} from "@playwright/test"
import { TestConfig } from "../test.config";
const testConfig = new TestConfig();

test("Search Product i phone",async({loggedIn,homePage})=>
    {
       await homePage.searchProduct(testConfig.productName);
       await homePage.clickOnSearch();
       await expect(homePage.getProduct(testConfig.productName)).toBeVisible();
       const originalProductCount=await homePage.countassertionOfProduct();
       expect(originalProductCount).toBeGreaterThan(0);
      

    });