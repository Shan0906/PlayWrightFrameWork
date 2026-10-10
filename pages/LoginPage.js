export class LoginPage
{

   constructor(page)
   {
      this.page=page;
      this.email=page.getByPlaceholder('E-Mail Address');
      this.password=page.getByPlaceholder('Password');
      this.loginBtn=page.getByRole('button',{name:'Login'});
      this.errorMsg=page.locator("//div[contains(@class,'alert alert-danger alert-dismissible')]");
      
   }

   async login(userEmail,userPassword)
   {
       await this.email.fill(userEmail);
       await this.password.fill(userPassword);
       await this.loginBtn.click();
   }

   async errorMessage()
   {
    return await this.errorMsg.textContent()
   }






}