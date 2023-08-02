/// <reference types = 'cypress' />

describe("Handles Visibility",()=>{
    it("Handles Visibility",()=>{
        //set hide or show
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#displayed-text").should("be.visible")
        cy.get("#hide-textbox").click()
        cy.get("#displayed-text").should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get("#displayed-text").should('be.visible')

        //automate Radio Buttons
        cy.get('#radio-btn-example').find('input[value = "radio3"]').check().should('be.checked')
    })
})

//Can select by ID
//Class
//tagname[property=value]
//[property=value]