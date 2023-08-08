/// <reference types = "cypress" />
/// <reference types = "cypress-iframe"/>
import 'cypress-iframe'

describe("Handles Frames",()=>{
    it('Handles Frames',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded("#courses-iframe")
        cy.iframe().find('a[href="mentorship"]').eq(0).click()
        cy.wait(10000)
        cy.iframe().find('.pricingModel').then((element)=>{
          element.should('have.length',2)
        })
           
    })
})

//We need switch our focus to the iframe only.The frame is loaded into the cypress object/iframe mode.