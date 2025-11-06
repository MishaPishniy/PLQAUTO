import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { SideBarCOmponent } from "../components/SidebarComponents";

export class GaraePage extends BasePage {

     private readonly _addCarsBtn: Locator
     private readonly _addCarModel: Locator
     private readonly _addCarBrandSelect: Locator
     private readonly _addCarModelSelect: Locator
     private readonly _addCarMiledge: Locator
     private readonly _addBtn: Locator
     private readonly _carItem: Locator
     private readonly _sideBar: SideBarCOmponent


    constructor(page: Page) {
        super(page, '/panel/garage')

        this._addCarsBtn =  page.getByRole('button',{name: 'Add car'})
        this._addCarModel = page.locator('app-add-car-modal')
        this._addCarBrandSelect = this._addCarModel.locator('#addCarBrand')
        this._addCarModelSelect = this._addCarModel.locator('#addCarModel')
        this._addCarMiledge = this._addCarModel.locator('#addCarMileage')
        this._addBtn = this._addCarModel.getByRole('button' , {name: 'Add'})
        this._carItem = this._page.locator('.car-item')
        this._sideBar = new SideBarCOmponent(this._page)
    }

    async selectBrand(brand : 'Audi' | 'BMW' | 'Ford' | 'Fiat' |'Porsche'){
        return this._addCarBrandSelect.selectOption(brand)
    }

    async addCar(brand : 'Audi' | 'BMW' | 'Ford' | 'Fiat' |'Porsche', model: '911' | 'x5', mileage: number){
        await this._addCarsBtn.click()
        await this.selectBrand(brand)
        await this._addCarModelSelect.selectOption(model)
        await this._addCarMiledge.fill(mileage.toString())
        await this._addBtn.click()
    }

    get addCarsBtn(){
        return this._addCarsBtn
    }

    get addCarModel() {
         return this._addCarModel
    }

    get addCarBrandSelect() {
         return this._addCarModelSelect
    }
    
    get addCarModelSelect() {
         return this._addCarModelSelect
    }
    
    get addCarMiledge() {
         return this._addCarMiledge
    }
    
    get addBtn() {
         return this._addBtn
    }
    
    get carItem() {
         return this._carItem
    }

    get sideBar() {
        return this._sideBar
    }
}