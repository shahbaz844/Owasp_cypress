import { Login } from "../../pages/login"
import { Address } from "../../pages/address";

describe("Verify order for two items placed successfully", function() {
  let login = new Login();
  let homePage = new Address();

  it("Verify order for two items placed successfully", function() {
    login.login();
    homePage.tapOnProductAddToBasket(1,2);
    homePage.tapOnBasket();
    homePage.verifyBasketItemsAndTapOnCheckout(2)
    homePage.verifyAndClickOnAddNewAddress()
    homePage.CreateNewAddress()
    homePage.selectDeliveryAddress(1)

  });

});