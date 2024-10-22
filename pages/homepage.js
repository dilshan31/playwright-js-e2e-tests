exports.HomePage = class HomePage
{
    constructor(page)
    {
        this.page=page
        this.btn_addToCartCypress = page.locator("(//div[@class='bottom-div col-lg-24']//button)[1]")
        this.btn_addToCartSelenium = page.locator("(//span[@id='cardChip']/following-sibling::button)[2]")
        this.btn_cart = page.locator("//button[normalize-space(text())='Cart']")
        this.btn_enrollNow = page.locator("//button[normalize-space(text())='Enroll Now']");
        this.btn_menu = page.locator("//img[@alt='menu']");
        this.btn_signOut = page.locator("//button[normalize-space(text())='Sign out']");
    }

    // async goto(){
    //     await this.page.goto('https://freelance-learn-automation.vercel.app/login')
    // }

    async addtocart(){
        await this.btn_addToCartCypress.click();
        await this.btn_addToCartSelenium.click();
        await this.btn_cart.click();
        await this.btn_enrollNow.click();
    }

    async signOut(){
        await this.btn_menu.click();
        await this.btn_signOut.click();
        

    }
}