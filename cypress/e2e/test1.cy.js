Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

require("cypress-plugin-tab");
require('cypress-xpath');

describe("Tipos de selectores", () => {
  /*
  it("Selector por ID", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.get("#userName").should("be.visible").type("Carlos");
    */



    /*
  it("Selector por Atributos", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.get("[placeholder='Full Name']").should("be.visible").type("Juan Perez");
    */
   
  it.only("Selector por xpath", () => {
      cy.visit("https://demoqa.com/text-box");
      cy.xpath("//*[@id='userName']").should("be.visible").type("Juan Perez")






  });
});