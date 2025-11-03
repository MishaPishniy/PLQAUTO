import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class GaraePage extends BasePage {

     readonly _addCarsBtn: Locator
     readonly _addCarModel: Locator
     readonly _addCarBrandSelect: Locator
     readonly _addCarModelSelect: Locator
     readonly _addCarMiledge: Locator
     readonly _addBtn: Locator


    constructor(page: Page) {
        super(page, '/panel/garage')

        this._addCarsBtn =  page.getByRole('button',{name: 'Add car'})
        this._addCarModel = page.locator('app-add-car-modal')
        this._addCarBrandSelect = this._addCarModel.locator('#addCarBrand')
        this._addCarModelSelect = this._addCarModel.locator('#addCarModel')
        this._addCarMiledge = this._addCarModel.locator('#addCarMileage')
        this._addBtn = this._addCarModel.getByRole('button' , {name: 'Add'})
    }
}