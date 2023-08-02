/// <reference types = "cypress"/>

describe("Handles Static Select",()=>{
    it("Handle Static select",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get("select").select('option3').should('have.value','option3') //Select and validate if the correct one was selected.
    })
})