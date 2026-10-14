import {test as base} from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { dataProvider } from "../utils/dataProvider";
import { TestConfig } from "../test.config";
import { ShoppingCart } from "../pages/ShoppingCart";

const testconfigFixture=new TestConfig();
const logindataFixture=dataProvider.getdatadfromjson("F:/IndustryLevel/testdata/logindata.json");
const validDataFromFixture=logindataFixture.find(data=>data.testName==="Valid login");


export const test= base.extend(
    {

     homePage: async({page},use)=>
        {
            await use(new HomePage(page));
        },
    loginPage: async({page},use)=>
        {
            await use(new LoginPage(page));
        },
    registerPage: async({page},use)=>
        {
            await use(new RegisterPage(page));
        },
    loggedIn:async({page,loginPage,homePage},use)=>
        {
           await page.goto(testconfigFixture.appUrl);
           await homePage.clickOnMyAccount();
           await homePage.clickOnLogin();
           await loginPage.login(validDataFromFixture.email,validDataFromFixture.password);
            await use();
           await homePage.clickOnMyAccount();
           await homePage.clickonlogout();
        },
     shoppingCart:async({page},use)=>
        {
            await use(new ShoppingCart(page));
        }


    })
