/// <reference types ="cypress" />

describe('Combines locators and async and sync', function(){
 // we avoid repeating locators code by storing it in aliases similar to variables in PLs then accessing the aliases using @  
    it('asserts by optimizing Search',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('.products').find('.product').as('products')

        cy.get('@products').each((element,index,arrayList)=>{
           const productName = element.find('h4.product-name').text()
           if(productName.includes('Pumpkin')){
            element.get('button').should('have-text','ADD TO CART')
           }
        
        })
    })

})

