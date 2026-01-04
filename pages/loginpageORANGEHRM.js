import {test, expect} from '@playwright/test'
exports.loginpagecourseORANGEHRM = class loginpagecourseORANGEHRM{
    constructor (page){
        this.page = page
        this.Usernameattribute = page.locator('input[name="username"]')
        this.passwordattribute = page.locator('input[name="password"]')
        this.loginbutton = page.locator('button[type="submit"]')

    }
    async validURL(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    async validcred(validusername,validpassword){
        await this.Usernameattribute.fill(validusername)
        await this.passwordattribute.fill(validpassword)
        await this.loginbutton.click()
    }
    
    
}