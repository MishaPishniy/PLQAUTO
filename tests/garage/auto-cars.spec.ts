import { test, expect } from '@playwright/test';
import { HomePage } from '../../src/pages/HomePage';
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
    
    test.only('user can add cars' , async({page})=>{

const homePage = new HomePage(page)
await homePage.navigate()
const garagePage = await  homePage.loginAsGuest()

//test
 await garagePage._addCarsBtn.click()
 await garagePage._addCarBrandSelect.selectOption('Porsche')
 await garagePage._addCarModelSelect.selectOption('911')
 await garagePage._addCarMiledge.fill('12345')
 await garagePage._addBtn.click()
    
 })
})