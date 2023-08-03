/// <reference types = 'cypress'/>

describe('Handle Child Tabs',()=>{
    it("Handle Child Tabs",()=>{
      //child tab
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      cy.log(cy.url())
      cy.get('#opentab').invoke('removeAttr','target').click()
      cy.log(cy.url())    

      //Browser controls
      cy.go('back')
      cy.url().should('include','rahulshettyacadefefwe  my.com') 
      



    })
})

//If the webpage opens a child window, make it open in the current for proper handling-Delete the target attribute.This is possible since cypress can manipulate the dom.
//Invoke command helps us invoke jquery functions 
//You remove the attribute and then click and it will behave like an element without the attribute.
//To go back to the initial page, you click the back button in cypress
//The go command dictates which direction to go in the URL in the browser history
//Assert that the current url is the inital one