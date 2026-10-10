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












}