export class HomePage
{

constructor(page)
{
    this.page=page;
    this.lnkMyAccount = page.locator('#top-links').getByRole('link', { name: 'My Account' });
    this.lnkRegister= page.getByText('Register',{exact:true});
    this.lnkLogin= page.getByText('Login',{exact:true});
    this.searchBox=page.getByPlaceholder('Search');
    this.searchBtn=page.locator("//span/button[contains(@type,'button')]");
    this.productCount=page.locator(".product-thumb");
    this.logout=page.locator("//ul[@class='dropdown-menu dropdown-menu-right']/li").getByRole("link",{name:"Logout"});
    this.addtoCart=page.getByRole('button',{name:'Add to Cart'});
    this.checkoutCart=page.getByRole('link',{name:'Shopping Cart'});
}

async isHomePageExist()
{
   const title= await this.page.title()
   return title !=='';
}

async clickOnMyAccount()
{
    await this.lnkMyAccount.click();
}

async clickOnRegister()
{
    await this.lnkRegister.click();
}

async clickOnLogin()
{
    await this.lnkLogin.click();
}

async searchProduct(productName)
{
    await this.searchBox.fill(productName);
}

async clickOnSearch()
{
    await this.searchBtn.click();
    
}

getProduct(productName) {
    return this.page.locator('.product-thumb')
        .filter({
            has: this.page.getByRole('heading', { name: productName })
        })
        .locator('img')
        .first();
}

async countassertionOfProduct()
{
    return await this.productCount.count();
}

async clickonlogout()
{
    await this.logout.click();
}

async clickOnAddToCart()
{
    await this.addtoCart.first().click();
}
async clickOncheckoutCart()
{
    await this.checkoutCart.click();
}
getProductDetails(productName) {
    return this.page.locator('#content')
        .getByRole('link', { name: productName, exact: true })
        .last();
}








}