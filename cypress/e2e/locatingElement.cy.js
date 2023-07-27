describe('Show elements locator', ()=>{
    it('First Test case',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/') // Visit URL
        cy.get('.search-keyword').type('ca') //Identify an entry field
        cy.wait(5000)  //Wait for the results to load.
        cy.get('.product:visible').should("have.length",4) // Assert on the the length property for the selected element.
    })

})  