/// references

describe('Show elements locator', ()=>{
    it('First Test case',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/') // Visit URL
        cy.get('.search-keyword').type('ca') //Identify an entry field
        cy.wait(5000)  //Wait for the results to load.
        cy.get('.product:visible').should("have.length",4) // Assert on the the length property for the selected element.

        //PARENT CHILD CHAINING
        //to locate a specific element - Helps reduce the website to a search area cascadingly until a value is found.
        cy.get('.products').find('.product').should('have.length',4) // find gets the descendant dom elements of a specific selector.Returns an array
        cy.get('.products').find('.product').eq(2) // eq accepts an index of a specific element.Ideally these steps would not be repeated like here.
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click() // Reduced webpage to small section, narrowed down to the second element,then searched for the subsegment containing the specific text and clicked it.Scope is always onparent. However it has hardcoded the index and thus can break

       // cy.get(':nth-child(3) > .product-action > button')
        //The specific selector that goes straight to the exact item by searching the whole page has an issue of no scalability since it is a hard coded property in that should the way to get to the item change later, the code breaks

        //VALIDATING FOR TEXT TO INCREASE SCALABILITY
        cy.get('.products').find('.product').each((element, index,list)=>{
                const vegName = element.find('h4.product-name').text()
               if(vegName.includes('Cashews')){
                cy.wrap(element).find('button').click()                              
            }
        })
    })

})  

//Each iterates through an array like structure with a length property using a callback function.
//When you replace the cy with an element, the control narrows down to the specific element.
