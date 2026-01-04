import {test,expect} from '@playwright/test'
import {loginpagecourseORANGEHRM} from '../pages/loginpageORANGEHRM'

test('login with valid credentials', async ({page}) =>{
    const loginpageobj = new loginpagecourseORANGEHRM(page)
    await loginpageobj.validURL()
    await loginpageobj.validcred('Admin', 'admin123')
    await expect (page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
})

test('codgen generated code', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Username' }).fill('A');
  await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
  await page.getByRole('listitem').filter({ hasText: /^Job Titles$/ }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('yasin');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('row', { name: ' yasin  ' }).click();
});