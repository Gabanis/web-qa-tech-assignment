Cypress.Commands.add('login', (username, password) => {
    cy.get('button._2221af4e93029bedeab751d04fab4b8b-scss._1edf52628d509e6baded2387f6267588-scss')
      .click()
    cy.get('#login-username')      
      .type('')//<-- Enter your UserName 
    cy.get('#login-password')   
      .type('')//<-- Enter your Password
    cy.get('#login-button')
      .click()
  })
  
