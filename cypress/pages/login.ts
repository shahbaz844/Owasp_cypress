import { BasePage } from "./base_page";
import { LoginPageSelectors } from "./selectors";
import { HomePage } from "./home_page";

export class Login extends BasePage{

  loginSelectors = new LoginPageSelectors()
  home = new HomePage()

  /**
   * visit URL
   */
  visitUrl(){
    cy.visit(Cypress.env('baseUrl'))
  }

  /**
   * enter username
   */
  enterUsername(){
    this.enterText(this.loginSelectors.email, Cypress.env('email'))
  }

  /**
   * enter password
   */
  enterPassword(){
    this.enterText(this.loginSelectors.password, Cypress.env('password'))
  }

  /**
   * tap on login button
   */
  tapOnLogin(){
    this.getElementAndClick(this.loginSelectors.loginButton)
  }

  /**
   *  tap on welcome popup close button
   */
  tapOnWelcomePopupCloseButton(){
    this.getElementAndClick(this.loginSelectors.welcomePopupCloseButton)
  }

  /**
   *  Login
   */
  login(){
    this.visitUrl();
    this.home.tapOnAccount();
    this.home.tapOnLogin();
    this.tapOnWelcomePopupCloseButton();
    this.enterUsername();
    this.enterPassword();
    this.tapOnLogin();
  }
}
