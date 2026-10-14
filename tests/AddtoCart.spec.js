import { test } from "../fixtureData/fixture";
import { expect } from "@playwright/test";
import { TestConfig } from "../test.config";
const testConfig = new TestConfig()
test("Verify product in add to cart",async({page,loggedIn,loginPage,homePage})=>
    {
        
        await homePage.searchProduct(testConfig.productName);
        await homePage.clickOnSearch();
        await expect(homePage.getProduct(testConfig.productName)).toBeVisible();
        await homePage.clickOnAddToCart();
        await homePage.clickOncheckoutCart();
        await expect(homePage.getProductDetails(testConfig.productName)).toBeVisible();
        

    });