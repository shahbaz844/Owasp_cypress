import { Basket } from "./basket";
import { AddNewAddressSelectors, SelectAddressSelectors } from "./selectors";

export class Address extends Basket {

  selectAddressSelectors = new SelectAddressSelectors()
  addNewAddressSelectors = new AddNewAddressSelectors()

  /**
   * verify select address page by heading
   */
  verifySelectAddressPage(){
    this.verifyElementContainsText(this.selectAddressSelectors.pageHeading,this.strings.selectAddressPageHeading)
  }

  /**
   *  tap on add new address
   */
  tapOnAddNewAddress(){
    this.getElementAndClick(this.selectAddressSelectors.addNewAddressButton);
  }

  /**
   * verify add new address page heading
   */
  verifyAddNewAddressPageHeading(){
    this.verifyElementContainsText(this.addNewAddressSelectors.pageHeading,this.strings.addNewAddressPageHeading)
  }

  /**
   *  add country in new address
   */
  addCountry(){
    this.enterText(this.addNewAddressSelectors.countryInputField, this.strings.country)
  }

  /**
   * add name to new address
   */
  addName(){
    this.enterText(this.addNewAddressSelectors.nameInputField, this.strings.name);
  }

  /**
   * add mobile number to new address
   */
  addMobileNumber(){
    let phoneNumber = this.generatePhoneNumber()
    this.enterText(this.addNewAddressSelectors.mobileInputField, phoneNumber)
  }

  /**
   * add zip code to new address
   */
  addZipCode(){
    let zipCode = this.generateZipCode()
    this.enterText(this.addNewAddressSelectors.zipCode, zipCode)
  }

  /**
   *  add address to new address
   */
  addAddress(){
    let address = this.generateAddress()
    this.enterText(this.addNewAddressSelectors.addressTextarea, address)
  }

  /**
   * add city to new address
   */
  addCity(){
    this.enterText(this.addNewAddressSelectors.cityInputField,this.strings.city)
  }

  /**
   * add state to new address
   */
  addState(){
    this.enterText(this.addNewAddressSelectors.stateInputField,this.strings.state)
  }

  /**
   * verify Submit button active
   */
  verifyAndClickOnSubmitButton(){
    this.verifyElementIsEnabledThenClick(this.addNewAddressSelectors.submitButton)
  }


  /**
   * verify Address exist in select address
   */
  verifyAddress(){
    this.verifyElementExistAndVisible(this.selectAddressSelectors.addressInSelectAddress)
  }

  /**
   * click on radio button to select address
   */
  selectAddress(indexNumber){
    cy.get(this.selectAddressSelectors.addressInSelectAddress).eq(indexNumber).click()
  }

  /**
   * verify continue button is enabled
   */
  verifyAndClickOnContinueButton(){
    this.verifyElementIsEnabledThenClick(this.selectAddressSelectors.continueButton)
  }

  /**
   * verify select address page and click on add new address
   */
  verifyAndClickOnAddNewAddress(){
    this.verifySelectAddressPage();
    this.tapOnAddNewAddress()
  }

  /**
   * create new address
   */
  CreateNewAddress(){
    this.verifyAddNewAddressPageHeading();
    this.addCountry()
    this.addName()
    this.addMobileNumber()
    this.addZipCode()
    this.addAddress()
    this.addCity()
    this.addState()
    this.verifyAndClickOnSubmitButton()
  }

  /**
   * select address
   */
  selectDeliveryAddress(index){
    this.verifyAddress()
    this.selectAddress(index)
    this.verifyAndClickOnContinueButton()
  }

}