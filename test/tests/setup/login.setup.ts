import {test as setup } from '@playwright/test'
import {HomePage} from '../../src/pages/HomePage'
import { isContext } from 'vm'

const USER = process.env.APP_USER_EMAIL!
const PASS = process.env.APP_USER_PASS!

setup('LOgin', async({page, context, browser, request}) =>{

       
        const homePage = new HomePage(page)
        const  newPage = await context.newPage()
        const newContext = await browser.newContext()
        const response = await request.get('/apa/users')
         await homePage.navigate()
         await homePage.loginAsUser(USER,PASS)
         await page.getByRole('button', {name: 'Add car'}).waitFor()
         await page.context().storageState({path: 'session-storage.json'})
})