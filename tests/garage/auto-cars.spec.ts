import { test, expect } from '@playwright/test';
import { HomePage } from '../../src/pages/HomePage';
import { GaraePage } from '../../src/pages/GaragePage';
/* 
test.only('user can add cars' , async({page})=>{



 await page.goto('/')
 const header = page.locator('.header')
 const signInBtn = header.getByRole('button', {name: 'Guest log in'})
 const addCarsBtn =  page.getByRole('button',{name: 'Add car'})
 const addCarModel = page.locator('app-add-car-modal')
 const addCarBrandSelect = addCarModel.locator('#addCarBrand')
 const addCarModelSelect = addCarModel.locator('#addCarModel')
 const addCarMiledge = addCarModel.locator('#addCarMileage')
 const addBtn = addCarModel.getByRole('button' , {name: 'Add'})


 //Test 

 await signInBtn.click()
 await addCarsBtn.click()
 await addCarBrandSelect.selectOption('Porsche')
 await addCarModelSelect.selectOption('911')
 await addCarMiledge.fill('12345')
 await addBtn.click()
 await page.pause()

}) */


 test.describe('Check add cars' , ()=> {

    let garagePage: GaraePage

    test.beforeEach(async({page})=>{
        const homePage = new HomePage(page)
        await homePage.navigate()
        garagePage = await homePage.loginAsGuest()
    })

test('verify', async ()=> {
    await garagePage.addCarsBtn.click()
    await expect.soft(garagePage.addBtn).toBeVisible()
})

    test('user can add cars' , async({page})=>{
/*
const homePage = new HomePage(page)
await homePage.navigate()
const garagePage = await  homePage.loginAsGuest()
*/
//test

 await garagePage.addCarsBtn.click()
 await garagePage.selectBrand('Porsche')
 //await garagePage._addCarBrandSelect.selectOption('Porsche')
 await garagePage.addCarModelSelect.selectOption('911')
 await garagePage.addCarMiledge.fill('1234')
 await garagePage.addBtn.click()

 })

test('user can add cars in cars list visible' , async({page})=>{
/*
//login
const homePage = new HomePage(page)
await homePage.navigate() 
const garagePage = await  homePage.loginAsGuest()*/

//test
await garagePage.addCar('Porsche','911', 231231)
await garagePage.addCar('Porsche','911', 21)
await expect(garagePage.carItem).toHaveCount(2)

 })

 test.only('user can log out from garage' , async()=>{


//test

await garagePage.sideBar.logOutBtn.click()

 })
})