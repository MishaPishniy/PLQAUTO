import { test, expect } from '@playwright/test';
import {HomePage} from '../../src/pages/HomePage'
import { GaraePage } from '../../src/pages/GaragePage'

test.describe('Login tests', () => {

 let garagePage: GaraePage

  test.beforeEach(async ({ page }) => {
    // Блокування
     //  await page.route('**/*.{png,jpg,jpeg,gif,svg,webp}', route => route.abort());


        const homePage = new HomePage(page)
        await homePage.navigate()
        garagePage = await homePage.loginAsGuest()
    // логування 
    page.on('request', request => console.log('>>', request.method(), request.url()));
    page.on('response', response => console.log('<<', response.status(), response.url()));

    await page.goto('/');
    await page.pause(); 
  });

  test('verify', async ({page})=> {
    await garagePage.addCarsBtn.click()
    await page.pause(); 
    await expect.soft(garagePage.addBtn).toBeVisible()

})

    
  });
