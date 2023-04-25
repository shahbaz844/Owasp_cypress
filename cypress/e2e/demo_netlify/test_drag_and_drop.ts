import {DemoNetlify} from "../../pages/demo_netlify";


describe("Test Drag and Drop", () => {
    let demo = new DemoNetlify();

    it("Verify that user should be able to perform drag and drop successfully for Text", () => {
        cy.visit(Cypress.env('base_url'));
        demo.dragAndDropObjectThenWriteInIt(true, demo.strings.sample, demo.strings.objectKeyword)
        cy.log(`Drag and drop${demo.strings.objectKeyword} Tool. Added text ${demo.strings.sample} and
         changed the color of the text`)
        demo.validateSaveDesignResponse()
        cy.log("After Click on Save Design button I verified that the API call is successful")
    });
});
