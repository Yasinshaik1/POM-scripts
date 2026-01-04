
import{expect,test} from '@playwright/test'
import{Loginpage} from '../pages/demopage'

test('login page', async({page}) =>{
    const loginpage = new Loginpage(page);
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');


    await loginpage.login('Admin' , 'admin123')
    await expect(page).toHaveURL(/dashboard/)
})