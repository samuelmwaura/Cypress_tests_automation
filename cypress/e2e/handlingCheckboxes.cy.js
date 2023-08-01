/// <reference types = "cypress" />

describe('automation of Selections',()=>{
    it('Shows Selection',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('body> :nth-child(3)').as('selectorsSection')
        cy.get('@selectorsSection').find('#checkBoxOption1').check().should('be.checked').and('have.value','option1') // Be is used to check behaviour.And helps chain assertions.Here the should only takes one argument since it is checking behaviour.
        
        cy.get('@selectorsSection').find('#checkBoxOption1').uncheck().should('not.be.checked')

        cy.get('@selectorsSection').find("input[type ='checkbox']").check(['option1','option3']) // Fnd what is common among all the inputs and reference it correctly input[property = property].The array in check is to pass the values of what will be checked.
    })
})
