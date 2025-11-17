import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { GaraePage } from "./GaragePage";
import { SignInMadal } from "../components/SignInModal";

export class HomePage  extends BasePage {

    protected readonly _header: Locator
    protected readonly _gestLoginInBtn: Locator
    protected readonly _signInBtn: Locator
    protected readonly _signInPopUp: SignInMadal
    
 
     
    
    constructor(page: Page) {
        super(page, '/')
        this._header = this._page.locator('.header')
        this._gestLoginInBtn  = this._header.getByRole('button', {name: 'Guest log in'})
        this._signInBtn  = this._header.getByRole('button', {name: 'Sign in'})
        this._signInPopUp = new SignInMadal(this._page)
    }

    async loginAsGuest (){
        await this._gestLoginInBtn.click()
        return new GaraePage(this._page)
    }

    async loginAsUser (login: string, pass: string){
    await this._signInBtn.click()
    await this._signInPopUp.login(login , pass)
    return new GaraePage(this._page)

  }

    get header(){
    return this._header
  }
}