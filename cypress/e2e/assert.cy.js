/// <reference types = "cypress" />

describe('Asserts on element quality',()=>{
    it('Asserts on quality',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.products').find('.product').as('availableProducts')  // Alias the whole result for easy reference
        cy.get('@availableProducts').each((element,index,elementList)=>{ // Use the alias and iterate on the result
            const productName = element.find('h4.product-name').text()
            if(productName.includes('Brocolli')){
                cy.wrap(element).find('button').should('have.text','ADD TO CART') //should is from the chai library that asserts on the property of the element
                 // Remember I have to wrap  the element in the cy.wrap since it is a promise hence cannot tag the .should at the end without resolving the promise.Also you cannot tag any other cypress ,method without first resolving that variable.
            }
        })
    })
})