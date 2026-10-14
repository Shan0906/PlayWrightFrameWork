import { test} from "../fixtureData/fixture";
import { expect } from "allure-playwright";
import { TestConfig } from "../test.config";
const testConfig = new TestConfig();
test("Verify added product into cart and qunatity",async({loggedIn,homePage,shoppingCart})=>
    {
            await homePage.searchProduct(testConfig.productName);
            await homePage.clickOnSearch();
            await expect(homePage.getProduct(testConfig.productName)).toBeVisible();
            await homePage.clickOnAddToCart();
            await homePage.clickOncheckoutCart();
            const productnameassertion=await shoppingCart.getCartProductRow(testConfig.productName);
            await expect(productnameassertion).toBeVisible();
            const productquantitiassertion=await shoppingCart.getCartProductQuantity(testConfig.productName);
            await expect(productquantitiassertion).toHaveValue("1");
    });