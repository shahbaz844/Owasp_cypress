import { HomePageSelectors } from "./selectors";
import { BasePage } from "./base_page";

export class HomePage extends BasePage{

  homeSelectors = new HomePageSelectors()

  /**
   * click on account in navbar
   */
  tapOnAccount(){
    this.getElementAndClick(this.homeSelectors.navbarAccountButton)
  }

  /**
   * click on Login under Account in navbar
   */
  tapOnLogin(){
    this.getElementAndClick(this.homeSelectors.navbarLoginButton)
  }

  /**
   * click on navbar logo
   */
  tapOnNavbarLogo(){
    this.getElementAndClick(this.homeSelectors.navbarLogo)
  }

  /**
   * click on product add to basket button
   */
  tapOnProductAddToBasket(...cards){
    this.setDelay()
    for(let index in cards){
      cy.get(this.homeSelectors.itemCard).eq(Number(index)).find(this.homeSelectors.addToBasketButton).click();
      this.verifyPopupMessage(index)
      this.setDelay()
    }
  }

  /**
   * verify pop message
   */
  verifyPopupMessage(index){
    cy.get(this.homeSelectors.itemCard).eq(index).find(this.homeSelectors.itemName).invoke('text').then((text)=>{
      cy.get(this.homeSelectors.addToBasketPopup,{timeout:10000}).contains(this.strings.addToBasketPopupStringPart1+text+this.strings.addToBasketPopupStringPart2)
    })
  }

  /**
   * click on basket in navbar
   */
  tapOnBasket(){
    this.getElementAndClick(this.homeSelectors.navbarBasket);
  }

  /**
   * verify and click on search icon
   */
  tapOnSearchIcon(){
    this.verifyElementExistAndVisible(this.homeSelectors.navbarSearchIcon)
    this.getElementAndClick(this.homeSelectors.navbarSearchIcon)
  }

  /**
   * type in search field
   */
  typeInSearchArea(){
    cy.get(this.homeSelectors.searchArea).type(this.strings.appleText+`{enter}`)
  }

  /**
   * verify two products after search
   */
  verifyNumberOfProductsAfterSearch(expected_length:number){
    cy.get(this.homeSelectors.itemCard).then(($item)=>{
      const itemCount = Cypress.$($item).length
      expect(itemCount).to.eq(expected_length)
    })
  }

  /**
   * verify no banana product after search apple
   */
  verifyAfterSearchProduct(){
    cy.get(this.homeSelectors.itemCard).find(this.homeSelectors.itemName).each(($itemName)=>{
      cy.wrap($itemName).should('not.have.text',this.strings.bananaText)
    })
  }

  searchAppleFromProducts(){
    this.tapOnNavbarLogo()
    this.tapOnSearchIcon()
    this.typeInSearchArea()
    this.verifyNumberOfProductsAfterSearch(2)
    this.verifyAfterSearchProduct()
  }
}