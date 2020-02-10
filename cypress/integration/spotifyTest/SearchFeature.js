import { beforeTest } from "./setup";
  
  describe("SearchFeature.js - Spotify search functinality ", () => {
    beforeTest();

    // Valid input test
it("Test Search feature by valid artist name", () => {
    cy.visit('/')
    cy.login('username', 'password')
    cy.get('div.Root__nav-bar').within(() => {
        cy.contains('a', 'Search').click()
        cy.get('a.logo.navBar-logo--size-large.active')
            .should('be.visible')
    })
    cy.get('div._2a84f793f3a832d5a7ad595f6ca01bc9-scss').within(() => {
        cy.get('button._2221af4e93029bedeab751d04fab4b8b-scss._56a12d0978529b654affa11ca9390bd7-scss.a88f0b25501df313b75b70d458d9fe87-scss')
            .should('be.visible')
        cy.get('button._34098cfd13d48e2910679f35aea2c377-scss')
            .should('be.visible')
        cy.get('input._2f8ed265fb69fb70c0c9afef329ae0b6-scss')
            .type('Jasmine Thompson')
    })
    cy.get('a.d9eb38f5d59f5fabd8ed07639aa3ab77-scss.c906e62aa400e38e37356f15cfbde813-scss.f24ae5c31d937e373e75a3ae5501f494-scss')
        .contains('Jasmine Thompson')
    })
        
    // Invalid input test
it("Test Search feature by valid artist name", () => {
    cy.visit('/')
    cy.login('username', 'password')
    cy.get('div.Root__nav-bar').within(() => {
        cy.contains('a', 'Search').click()
        cy.get('a.logo.navBar-logo--size-large.active')
            .should('be.visible')
    })
    cy.get('div._2a84f793f3a832d5a7ad595f6ca01bc9-scss').within(() => {
        cy.get('button._2221af4e93029bedeab751d04fab4b8b-scss._56a12d0978529b654affa11ca9390bd7-scss.a88f0b25501df313b75b70d458d9fe87-scss')
            .should('be.visible')
        cy.get('button._34098cfd13d48e2910679f35aea2c377-scss')
            .should('be.visible')
        cy.get('input._2f8ed265fb69fb70c0c9afef329ae0b6-scss')
            .type('sdfasfgdfgdgsdfsd')
        })
    })
});