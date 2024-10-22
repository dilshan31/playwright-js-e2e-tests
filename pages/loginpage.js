exports.LoginPage = class LoginPage
{
    constructor(page)
    {
        this.page=page
        this.tf_username = page.locator("//input[@type='email']")
        this.tf_password = page.locator("//input[@type='password']")
        this.btn_signIn = page.locator("//button[@class='submit-btn']")
    }

    // async goto(){
    //     await this.page.goto('https://freelance-learn-automation.vercel.app/login')
    // }

    async login(username,password){
        await this.tf_username.type(username)
        await this.tf_password.type(password)
        await this.btn_signIn.click()
    }
}