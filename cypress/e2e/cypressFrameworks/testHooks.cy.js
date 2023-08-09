///<reference types ='cypress' />
describe('Test Hooks',()=>{

    before(function(){
      cy.fixture('example.json').then(function(testData){
        this.testData = testData
      })
    })

   it('Tests Hooks',function()  {
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    cy.get('div.form-group:nth-child(1) input.form-control[name="name"]').type(this.testData.name)
    cy.get('select').select(this.testData.gender)
  
   })     
})

//Help set conditions that you want to run before or after your tests scripts.
// Hooks are from Mocha test framework. They include before, after, aftereach,beforeeach. e.g. after all the tests run, delete the cache or or delete the test data that you created.
//cy.fixture helps ypu communicate with the files stored in thf ficture folder.

//One decribe may have mulitiple it blocks.

//SPECIAL NOTE - When "this" is used, the format of functions 'function(){} should be used instead of arrow function otherwise the 'this' is not contextualized.
