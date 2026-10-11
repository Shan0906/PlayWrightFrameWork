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

getProduct(productName)
{
    return this.page.getByText(productName,{exact:true}).first();
}

async countassertionOfProduct()
{
    return await this.productCount.count();
}










}