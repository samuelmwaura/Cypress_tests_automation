///<reference types ='cypress' />
describe('Test Hooks',()=>{
    before(()=>{

    })

   it('Tests Hooks',()=>{
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    cy.get('input[name="name"]:nth-child(2)').type('Sam')
    cy.get('select').select('Male')
  
   })     
})

//Help set conditions that you want to run before or after your tests scripts.
// Hooks are from Mocha test framework. They include before, after, aftereach,beforeeach. e.g. after all the tests run, delete the cache or or delete the test data that you created.

//One decribe may have mulitiple it blocks.
