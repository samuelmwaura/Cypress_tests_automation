/// <reference types = "cypress"/>

describe("Handles Static Select",()=>{
    it("Handle Static select",()=>{
        
        //HANDLE STATIC DROPDOWNS
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("select").select('option3').should('have.value','option3') //Select and validate if the correct one was selected.

        //HANDLE DYNAMIC DROPDOWNS
        cy.get('input[id="autocomplete"]').type('ke')
        cy.get('#ui-id-1 .ui-menu-item div').each((element,index,elementList)=>{ //Move from parent to child by spacing.Grab the array of options displayed when you input the common property of the displayed options
            const elementValue = element.text()
            if(elementValue === 'Kenya'){ //compare with intended value to select
                cy.wrap(element).click()
            }
        })

        cy.get('input[id="autocomplete"]').should('have.value','Kenya') //Assert correct selection - Do an operation and immediately assert.

    })
})