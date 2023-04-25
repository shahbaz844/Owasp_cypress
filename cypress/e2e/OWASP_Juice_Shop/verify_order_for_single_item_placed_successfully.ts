import { Login } from "../../pages/login"
import { HomePage } from "../../pages/home_page";
import { Address } from "../../pages/address";

describe("Verify order for single item placed successfully", function() {
  let login = new Login();
  let homePage = new Address();

  it("Verify order for single item placed successfully", function() {
    // login.login()
    homePage.tapOnProductAddToBasket(1);
    homePage.tapOnBasket();
    homePage.verifyBasketItemsAndTapOnCheckout(1)
    homePage.verifyAndClickOnAddNewAddress()
    homePage.CreateNewAddress()
    homePage.selectDeliveryAddress(0)

  });

  it("Verify order for two items placed successfully", function() {
    homePage.tapOnNavbarLogo();
    homePage.tapOnProductAddToBasket(1,2);
    homePage.tapOnBasket();
    homePage.verifyBasketItemsAndTapOnCheckout(2)
    homePage.verifyAndClickOnAddNewAddress()
    homePage.CreateNewAddress()
    homePage.selectDeliveryAddress(1)

  });

  it("Verify search products", function() {
    homePage.tapOnNavbarLogo();
    homePage.searchAppleFromProducts()
  });
});