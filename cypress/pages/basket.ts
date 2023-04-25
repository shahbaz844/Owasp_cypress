import { HomePage } from "./home_page";
import { BasketSelectors } from "./selectors";

export class Basket extends HomePage{

  basketSelectors = new BasketSelectors();

  /**
   * verify Your Basket Page
   */
  verifyBasketPage(){
     this.verifyElementContainsText(this.basketSelectors.basketPageHeading,this.strings.basketPageHeading+Cypress.env('email'))
  }

  /**
   * verify items exist in cart
   */
  verifyItemsInBasket(expected_length){
     this.verifyElementExistAndVisible(this.basketSelectors.itemsInBasket)
     this.verifyNumberOfItemsInCart(expected_length)
  }

  /**
   *  verify items in cart
   *  @param expected_length - expected number of items in cart
   */
  verifyNumberOfItemsInCart(expected_length:number){
    cy.get(this.basketSelectors.itemsInBasket).then(($item)=>{
      const itemCount = Cypress.$($item).length
      expect(itemCount).to.eq(expected_length)
    })
  }

  /**
   * click on checkout button
   */
  tapOnCheckout(){
    this.getElementAndClick(this.basketSelectors.checkoutButton)
  }

  /**
   * verify basket items and tap on checkout
   */
  verifyBasketItemsAndTapOnCheckout(itemsInBasket){
    this.setDelay()
    this.verifyBasketPage();
    this.verifyItemsInBasket(itemsInBasket)
    this.tapOnCheckout()
  }
}