/// <reference types ="cypress"/>

describe("Handle Mouse Hover",()=>{
    it("Handle Mouse Hover",()=>{
       cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       cy.get('.mouse-hover-content').invoke('show')
       cy.contains('Top').click()
       cy.url().should('include','top')    
       
})

})

// Mouse hover not supported directly becuase of flakiness of the nature of the action
//Show displays element with a display none property and should be applied on the immediate parent of a hidden element.
//cypress hence doesn't handle the click action but instead unhides hidden element and clicks them to simulate the action of hovering a mouse.