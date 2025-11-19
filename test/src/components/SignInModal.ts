import { Locator, Page } from "@playwright/test";
import { BaseComponent } from "./BaseComponent";

export class SignInMadal extends BaseComponent {

    
  private readonly _emailInput: Locator

  private readonly _passworInput: Locator
  
  private readonly _loginBut: Locator 


    constructor(page: Page) {
        
        super(page, page.locator('app-signin-modal'));
        this._emailInput = this._container.locator('#signinEmail')
        this._passworInput = this._container.locator('#signinPassword')
        this._loginBut = this._container.getByRole('button', {name: 'Login'})
    }



        async login (login: string, pass: string){
            await this._emailInput.fill(login)
            await this._passworInput.fill(pass)
            await this._loginBut.click()
        }
}