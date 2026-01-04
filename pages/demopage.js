

 export class Loginpage{
    constructor(page){
        this.page = page
        this.usernameinput = page.getByPlaceholder("Username")
        this.passwordinput = page.getByPlaceholder("Password")
        this.loginbutton = page.locator('//button[@type="submit"]')
    }
    async login(Username,Password){
        await this.usernameinput.fill(Username)
        await this.passwordinput.fill(Password)
        await this.loginbutton.click()
    }


}