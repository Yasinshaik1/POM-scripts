import {test,expect} from '@playwright/test'

class Dashboardpage{
    constructor(page){
        this.page = page
        this.Adminbutton = page.locator('//a[@class="oxd-main-menu-item"][1]')
        this.jobdropdown = page.locator('//li[@class="oxd-topbar-body-nav-tab --parent"][1]')
        this.jobtitle = page.locator('//a[@class="oxd-topbar-body-nav-tab-link"][1]')
        this.Addbutton = page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]')
        this.jobtitleattribute = page.locator(" (//input[@class='oxd-input oxd-input--active'])[2]")
        
    }
}