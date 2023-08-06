/// <reference types = 'cypress'/>

describe('Handles Tables',()=>{
    it('Handles Tables',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('fieldset > #product tr td:nth-child(2)').as('courseColumns')
        cy.get('@courseColumns').each((row,indexOfRow,listOfRows)=>{
            const rowText = row.text()
            if(rowText.includes('Python Language')){
               cy.get('@courseColumns').eq(indexOfRow).next().then((priceCell)=>{              
                expect(priceCell.text()).to.equal('25') //Assert price is equal to 25
               })
            }
        })
    })
})

//next finds the next sibling of an element and is applied on get command alone in cypress
//dot Text cannot be applied on next since next is jquery hence it cannot resolve.
//You grab the cintents of the table cell dynamically.