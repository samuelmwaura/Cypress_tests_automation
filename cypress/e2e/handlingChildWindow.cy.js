/// <reference types = 'cypress'/>

describe('Handle Child Window',()=>{
    it('Handles Child Window',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').then((element)=>{   
            const targetUrl = element.prop('href')
            cy.visit(targetUrl) // First visit the domain
            cy.origin(targetUrl,()=>{ // Then wrap your actions for the new domain in the cy.origin
                cy.get("div.sub-menu-bar a[href='about'")
            })           
        })
    })
})


// Remember not to append prop directly to get since it is a jquery command.
//You can visit from one domain to another by using cy.origin or by disabling chrome security.
//Cy.origin takes a url parameter and a callback function that takes all the operations to be performed in the new window in it.
