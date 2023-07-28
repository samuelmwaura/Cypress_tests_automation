/// <reference types = "cypress" />
describe('Async to Sync Cypress',()=>{
    it('turnsAsync to Sync',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        //cy.get('.brand').text() // Here the .text() will not work because it is not an inbuilt cypress method. If we want to do something after finding the elemnt, we have to chain our own resolve.
        cy.get('.brand').then((element)=>{ // resolved the cypress ourselves inorder to be able to do something custom.
          const tag = element.text() //here the cypress will understand since the element is a resolve element.
          cy.log(tag); 
        })


    })
})
