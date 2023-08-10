///<reference types = "cypress" />

describe("Test Hooking",function(){
    before(function(){
        cy.fixture('example').then(function(testData){
        this.testData = testData
        })
    })
    it('Tests Hooks',function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('div.form-group:nth-child(1) input.form-control[name="name"').type(this.testData.name)
        cy.get('select').select(this.testData.gender)

    })

})