import { Login } from "../../pages/login"
import { Address } from "../../pages/address";

describe("Verify Search Products", function() {
  let login = new Login();
  let homePage = new Address();

  it("Verify search products", function() {
    login.login();
    homePage.searchAppleFromProducts()
  });

});