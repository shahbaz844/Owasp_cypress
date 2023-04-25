import { Strings } from "../globals/strings";

export class BasePage {

    strings = new Strings();

    /**
     * set a delay
     * @param value - value of time to wait
     */
    setDelay(value: number = 2000) {
        cy.wait(value);
    }

    /**
     * get element and click on it
     * @param selector - WebElement
     */

    getElementAndClick(selector: any) {
        return cy.get(selector, { timeout:10000 }).click({force:true})
    }


    /**
     * tap on element but before that check certain text exist
     * @param selector - selector where we have text
     * @param text - string to match
     * @param indexNumber
     */

    verifyTextThenClick(selector: any, text: string, indexNumber: number) {
        cy.get(selector)
            .eq(indexNumber)
            .should("have.text", text)
            .click({ force: true });
    }

    /**
     * type in input field
     * @param selector - selector for input field
     * @param text - string to type
     */
    enterText(selector: any, text: string){
        cy.get(selector).clear().type(text);
    }

    /**
     * verify element exist and is visible
     * @param selector - selector for element to verify
     */
    verifyElementExistAndVisible(selector: any){
        cy.get(selector).should('exist').should('be.visible');
    }

    /**
     * create a random phone number
     */
    generatePhoneNumber(){
        let phoneNumber = Math.floor(Math.random()*9000000000) + 1000000000;
        return String(phoneNumber)
    }

    /**
     *  generate random string for address
     */
    generateAddress(){
        let address = Math.random().toString(36).substring(2,7);
        return address
    }

    /**
     *  generate a random zip code
     */
    generateZipCode(){
        let zipCode = Math.floor(Math.random()*900000) + 100000;
        return String(zipCode)
    }

    /**
     * create 16 digit card number
     */
    generateCardNumber(){
        let cardNumber = Math.floor(Math.random()*1E16)
        return cardNumber
    }

    /**
     * verify element contains text
     */
    verifyElementContainsText(element,text){
        cy.get(element).contains(text)
    }

    /**
     * verify element is enabled
     * @param element
     */
    verifyElementIsEnabledThenClick(element){
        cy.get(element).should("be.enabled").click();
    }
}