import { test, expect } from '@playwright/test';
import {HomePage} from '../../src/pages/HomePage'
import { GaraePage } from '../../src/pages/GaragePage'
import { request } from 'http';

const USER = process.env.APP_USER_EMAIL!
const PASS = process.env.APP_USER_PASS!

test.describe('Garage tests with POM', () => {
    let garagePage: GaraePage;

    test('Verify added cars', async ({ page }) => {
        //1. testData внутри теста ----
        const testData = {
            "status": "ok",
            "data": [
                {
                    "id": 176802,
                    "carBrandId": 2,
                    "carModelId": 6,
                    "initialMileage": 434,
                    "updatedMileageAt": "2024-07-09T16:50:01.000Z",
                    "carCreatedAt": "2024-07-09T16:50:01.000Z",
                    "mileage": 434,
                    "brand": "BMW",
                    "model": "3",
                    "logo": "412848218412jdsf.png"
                },
                {
                    "id": 176798,
                    "carBrandId": 1,
                    "carModelId": 1,
                    "initialMileage": 4,
                    "updatedMileageAt": "2024-07-09T15:41:48.000Z",
                    "carCreatedAt": "2024-07-09T15:41:48.000Z",
                    "mileage": 4,
                    "brand": "Audi",
                    "model": "TT",
                    "logo": "audi.png"
                }
            ]
        };

        // 2. Мокаем /api/cars ДО перехода на страницу 
        await page.route(request => request.url().includet('**/api/cars*') && request.method() === 'POST', 
        async route => {
            route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify(testData),
            });
        });

        // 3. Переходим на страницу и логинимся
        const homePage = new HomePage(page);
        await homePage.navigate();
        garagePage = await homePage.loginAsUser(USER,PASS);

   
        await page.pause();

        // проверки (пример) 
        // await expect(garagePage.carItems).toHaveCount(2);
        // await expect(page.locator('text=BMW')).toBeVisible();
    });


    test('Abort request', async ({ page }) => {
        await page.route('**/api/cars*', route => route.abort());
        const homePage = new HomePage(page);
        await homePage.navigate();
        garagePage = await homePage.loginAsUser(USER,PASS);

        await page.pause();
    });

});