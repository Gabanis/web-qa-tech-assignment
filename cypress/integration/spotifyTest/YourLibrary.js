import { beforeTest } from "./setup";

  
describe("YourLibrary.js", () => {
    beforeTest();

it("Test Your Library Functinality", () => {
    cy.visit('/')
    cy.login('username', 'password')
    //cy.get("[@class='link-subtle navBar-link ellipsis-one-line navBar-link--active']").click()
    cy.contains('a', 'Your Library').click()
    .get('nav.ca2045af78be9b69e0356564bef56441-scss').within(() => {
      cy.get('a._137ec408b14ac4ea5aec6ded3d95f328-scss.be059487cfa7b71ee0f482c8e5be2b7e-scss')
      cy.contains('a','MADE FOR YOU')
      cy.contains('a','ALBUMS')
      cy.contains('a','ARTISTS')
      cy.contains('a','PODCASTS')

    })
  })
});
