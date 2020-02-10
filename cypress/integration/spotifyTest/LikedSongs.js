import { beforeTest } from "./setup";
  
  describe("LikedSongs.js", () => {
    beforeTest();

it("Test liked songs feature", () => {
  cy.visit('/')
        cy.login('username', 'password')
    if (cy.get('button.CoverSlotExpanded__actionButton._5cc30ad41e9c87b4c45756acdbac4a4c-scss')) {
      cy.get('button.CoverSlotExpanded__actionButton._5cc30ad41e9c87b4c45756acdbac4a4c-scss')
        .click()
    }
    cy.contains('a','Liked Songs').click()
  })
});