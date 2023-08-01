/// <reference types = "cypress"/>
describe('Practise on all the validations',()=>{
    it("Is Practise for all the validations",()=>{
            cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')        
            cy.get('.search-keyword').type("ca")
            cy.wait(3000)
    
            cy.get('.products').find('.product').as('availableProducts')
            cy.get('@availableProducts').each((element,index,elementList)=>{
                const productName = element.find('h4.product-name').text()
                if(productName.includes('Cashews')){
                    cy.wrap(element).find('button').click()
                }
            })

            cy.get('div.cart').find('.cart-icon').click()            
            // cy.get('div.cart-preview active').find('.cart-items').find('.cart-item').should('be.gte',1)
            // cy.get('product-info').find('.product-name').should('have.text','Cashews')
            cy.contains('PROCEED TO CHECKOUT').click()
            cy.contains('Place Order').click()  

       
            
        
        
           
    })

})