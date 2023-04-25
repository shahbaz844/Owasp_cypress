import { DemoNetlifySelectors } from "./selectors";
import {BasePage} from "./base_page";
import {Strings} from "../globals/strings";

export class DemoNetlify extends BasePage{
    selectors = new DemoNetlifySelectors();
    strings = new Strings();

    /**
     * clear out the text from the dragged Object Container
     * @returns {boolean} True if cleared successfully
     */

    clearDraggedContainerText(){
        return cy.get(this.selectors.draggedObjectContainer).clear()
    }

    /**
     * select 1st color from the list
     * @returns {boolean} True if selected successfully
     */

    selectColor(){
        return cy.get(this.selectors.selectColor).first().click({force:true})
    }

    /**
     * write a sample string in dragged container
     * @param sample any valid string
     * @returns {boolean} True if string is typed successfully
     */

    writeSampleString(sample:string){
        return cy.get(this.selectors.draggedObjectContainer).type(sample)
    }

    /**
     * tap on dragged object and this will load the bar for color selection, select color and write down something
     * @param sample any valid string
     * @returns {boolean} True
     */

    selectAndWriteInNewColor(sample:string){
        this.getElementAndClick(this.selectors.draggedObjectContainer)
        this.setDelay()
        this.clearDraggedContainerText()
        this.getElementAndClick(this.selectors.openColorWindow)
        this.selectColor()
        this.writeSampleString(sample)

    }

    /**
     * verify response body have status code 200 and success key exist with value to be true
     */

    validateSuccessResponse(){
        cy.wait('@getDetails').then((interception) => {
            let Response = interception.response
            expect(Response.statusCode).to.eq(200)
            expect(Response.body.success).to.eq(true)
        });
    }

    /**
     * hit intercept call and make an alias
     */

    getApiDetails(){
        cy.intercept({method: 'POST', url: Cypress.env("api_url"),}).as('getDetails')
    }

    /**
     * tap on save design button and validate the response
     */

    validateSaveDesignResponse(){
        this.getApiDetails()
        this.verifyTextThenClick(this.selectors.saveDesign, this.strings.saveDesign, 0)
        this.validateSuccessResponse()
    }

    /**
     * get iframe and then body
     */

    getIframe(){
        return cy.get(this.selectors.iFrame).its(this.selectors.iFrameBody)
    }

    /**
     * perform drag and drop by passing valid params
     * @param finalObject
     * @param forceFlag
     */

    dragAndDropObject(finalObject:any, forceFlag:boolean){
        cy.get(finalObject).trigger('dragstart')
        cy.get(this.selectors.objectToDropPosition)
            .trigger('dragenter', { force: forceFlag })
            .trigger('dragover', { force: forceFlag })
            .trigger('drop', { force: forceFlag })
            .trigger('dragend', { force: forceFlag });
    }

    /**
     * we select the object based on Keyword we are selecting A as our object in this case
     * perform drag and drop
     * then change the color
     * hit save changes
     * @param sample
     * @param forceFlag
     * @param keyword
     */

    dragAndDropObjectThenWriteInIt(forceFlag:boolean, sample:string, keyword:string){
        let finalObject = `${this.selectors.objectToDrag}${keyword}`
        this.getIframe()
            .within({}, $iframes => {
                this.dragAndDropObject(finalObject, forceFlag)
                this.selectAndWriteInNewColor(sample)
            })
    }

}