import { beforeTest } from "./setup";
  
describe("Create Playlist.js", () => {
    beforeTest();
 
it("Test create playlist feature", () => {
    cy.visit('/')
    cy.login('username', 'password')
    cy.get('button.CreatePlaylistButton')
      .click()
    cy.get('input.inputBox-input')
      .type('test')
    cy.get('button.btn.btn-green')
      .click()
    .get('div.EmptyState__message.col-xs-12').within(() => {
      cy.get('h1.EmptyState__title')
      cy.get('h4.EmptyState__subtitle')
      cy.get('a.btn.btn-white.cta-button')
    })
    if (cy.get('button.CoverSlotExpanded__actionButton._5cc30ad41e9c87b4c45756acdbac4a4c-scss')) {
      cy.get('button.CoverSlotExpanded__actionButton._5cc30ad41e9c87b4c45756acdbac4a4c-scss')
        .click()
    }
    cy.get('a.RootlistItem__link.RootlistItem__link--is-highlighted')
      .rightclick()
    cy.contains('Delete')
      .click()
    cy.contains('button','DELETE')
      .click()
  })
});