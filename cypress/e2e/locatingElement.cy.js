describe('Show elements locator', ()=>{
    it('First Test case',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/') // Visit URL
        cy.get('.search-keyword').type('ca') //Identify an entry field
        cy.wait(5000)  //Wait for the results to load.
        cy.get('.product:visible').should("have.length",4) // Assert on the the length property for the selected element.

        //parent Child chaining to locate a specific element - Helps reduce the website to a search area cascadingly until a value is found.
        cy.get('.products').find('.product').should('have.length',4) // find gets the descendant dom elements of a specific selector.Returns an array
        cy.get('.products').find('.product').eq(2) // eq accepts an index of a specific element.Ideally these steps would not be repeated like here.
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click() // Reduced webpage to small section, narrowed down to the second element,then searched for the subsegment containing the specific text and clicked it.Scope is always onparent
    })

})  