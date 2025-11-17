import { Page, test } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';


const USER = process.env.APP_USER_EMAIL!
const PASS = process.env.APP_USER_PASS!

export const loggedPageTest = test.extend<{adminPage: Page , guestPage: Page}>({

    adminPage: async({page}, use) =>{

         
                 const homePage = new HomePage(page)
                 await homePage.navigate()
                 await homePage.loginAsUser(USER,PASS)
                 await page.getByRole('button', {name: 'Add car'}).waitFor()
                 await use(page)



    },

    guestPage: async({page}, use) =>{
        
        
                 const homePage = new HomePage(page)
                 await homePage.navigate()
                 await homePage.loginAsGuest()
                 await page.getByRole('button', {name: 'Add car'}).waitFor()
                 await use(page)

    }

})