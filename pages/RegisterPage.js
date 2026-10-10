export class RegisterPage
{
 constructor(page)
 {
    this.page=page;
    this.firstNameInput=page.locator('#input-firstname');
    this.lastNameInput=page.locator('#input-lastname');
    this.emailInput=page.locator('#input-email');
    this.telephoneInput=page.locator('#input-telephone');
    this.passWordInput=page.locator('#input-password');
    this.passWordConfirm=page.locator('#input-confirm');
    this.subScribeBtn=page.getByRole('radio',{name:'Yes'});
    this.privacyPolicyBtn=page.locator('input[name="agree"]');
    this.continueBtn=page.getByRole('button',{name:'Continue'});
 }

async enterFirstName(fname)
{
    await this.firstNameInput.fill(fname);
}
async enterLastName(lname)
{
    await this.lastNameInput.fill(lname);
}
async enterEmail(Email)
{
    await this.emailInput.fill(Email);
}
async enterTellphone(Tnumber)
{
    await this.telephoneInput.fill(Tnumber);
}
async enterPass(passNumber)
{
    await this.passWordInput.fill(passNumber);
}
async enterConfirmPass(Cpass)
{
    await this.passWordConfirm.fill(Cpass);
}
async clickOnprivacyPolicyBtn()
{
    await this.privacyPolicyBtn.check();
}
async clickOncontinueBtn()
{
    await this.continueBtn.click();
}
async clickonsubScribeBtn()
{
    await this.subScribeBtn.check();
}













}