import {expect, test} from '@playwright/test'
import {HomePage} from '../../src/pages/HomePage'
import { GaraePage } from '../../src/pages/GaragePage'

//const USER = process.env.APP_USER_EMAIL!
//const PASS = process.env.APP_USER_PASS!

test.describe('check storage', async()=>{
  
 //test.beforeEach(async ({page})=>{
      
 //     const homePage = new HomePage(page)
  //   await homePage.navigate()
  //   await homePage.loginAsUser(USER,PASS)
    
   // }) 

    test('create car' , async ({page}) => {

        const garagePage = new GaraePage(page)
        await garagePage.navigate()
        await garagePage.addCar('Porsche','911',12345)
        await page.pause()
  
    }) 
}) 