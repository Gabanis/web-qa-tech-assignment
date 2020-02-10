export const beforeTest = () => {
    beforeEach("setup", () => {
      Cypress.config(
        "baseUrl",
        `https://open.spotify.com/`
      );
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    });
  };