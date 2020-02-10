import { beforeTest } from "./setup";
  
describe("HomePage.js", () => {
    beforeTest();
  
it("Test Home page functionality", () => {
    cy.visit('/')
    cy.login('username', 'password')
    cy.get('div.f56a72bdee0d33bbdbea23a12b263896-scss')
    cy.get('div.Root__nav-bar')
        .should('be.visible')
    cy.get('a.logo.navBar-logo--size-large.active')
        .should('be.visible')
    cy.get('button._2221af4e93029bedeab751d04fab4b8b-scss._56a12d0978529b654affa11ca9390bd7-scss.a88f0b25501df313b75b70d458d9fe87-scss')
        .should('be.visible')
    cy.get('button._34098cfd13d48e2910679f35aea2c377-scss')
        .should('be.visible')
    cy.get('div.c247a773eeb0d66dcd9c92d83e50c263-scss.ebe37a9866c20b333823f638c4d67453-scss')
        .should('be.visible')
    cy.get('div.Root__now-playing-bar')
        .should('be.visible')
    cy.get('div.d56489c83fe6b79db9f89b06371835cf-scss')
        .first()
        .click()
    cy.url().should('include', '/playlist')
    });
});