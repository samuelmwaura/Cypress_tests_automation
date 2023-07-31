/// <reference types ="cypress" />

describe('Combines locators and async and sync', function(){
 // we avoid repeating locators code by storing it in aliases similar to variables in PLs then accessing the aliases using @  
    it('asserts by optimizing Search',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

       cy.get('.products').find('.product').as('productsWeHave') //We aliased the whole results as a variable.
        cy.get('@productsWeHave').each((element,index,arrayList)=>{
           const productName = element.find('h4.product-name').text()
           if(productName.includes('Brocolli')){
            cy.wrap(element).find('button').click()  // We have to wrap the element since it is a promise and thus has to be resolves first before applying any other cypress method on it.
           }
               
        })

        //     //Assert
        // cy.get('.brand greenLogo').then((element)=>{
        //     cy.log(element.text())
        // })
    
        })
})

