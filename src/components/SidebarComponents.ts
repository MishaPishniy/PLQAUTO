import { Locator, Page } from "@playwright/test";
import { BaseComponent } from "./BaseComponent";

export class SideBarCOmponent extends BaseComponent{

private readonly _garageBtn: Locator 
private readonly _expensesBtn: Locator 
private readonly _Instructions: Locator 
private readonly _logOutBtn: Locator 

constructor (page: Page){
    super(page, page.locator('.sidebar-wrapper'))
    this._garageBtn = this._container.getByRole('link', {name:'Garage'})
    this._expensesBtn = this._container.getByRole ('link', {name:'Fuel expenses'})
    this._Instructions = this._container.getByRole ('link', {name:'Instructions'})
    this._logOutBtn = this._container.locator('.icon-logout')
}

get garageBtn() {
    return this._garageBtn
}

get expensesBtn () {
    return this._expensesBtn
}

get Instructions() {
    return this._Instructions
}

get logOutBtn() {
    return this._logOutBtn
}

}