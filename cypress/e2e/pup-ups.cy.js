/// <reference types = "cypress" />

describe('handle Pup-ups,alerts,confirm',()=>{
    it('handle pop-ups,alerts,confirm',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('fieldset[class = "pull-right"]').find('#alertbtn').click()

        //Alert
        cy.on('window:alert',(alertMessage)=>{ //cypress listen to the alert
            expect(alertMessage).to.equal('Hello , share this practice page and share your knowledge')  //then an assertion to compare the pop up message
        })
    
        //confirm
        cy.get('fieldset[class="pull-right"]').find('#confirmbtn').click()
        cy.on('window:confirm',(confirmMessage)=>{
            expect(confirmMessage).to.equal('Hello , Are you sure you want to confirm?')       
            return false;
            })      
       
    })
})

//On clicking alert, an alert pops up but cypress handles it without showing the alert, it clicks the okay.For confirm, it autoexpects
//To verify the text that popped up, we leverage on browser events. You trigger the event and get the text present using on.
//Cypress runs in the browser hence can controll the dom but Selenium cannot thus imitates the browser view
//onfirmation popup by default cypress clicks the OK button. But we can also click the cancel button in the confirmation popup by returning false in the events.

