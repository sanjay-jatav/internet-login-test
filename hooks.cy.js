describe("Login Page Test Suite", () => {
    beforeEach(() => {
      cy.visit("https://the-internet.herokuapp.com/login");
    });
  
    afterEach(() => {
      cy.clearCookies();
    });
  
    it("checks if the login button is visible", () => {
      cy.get("button[type='submit']").should("be.visible");
    });
  
    it("verifies if the page contains a field with the placeholder text 'Enter your email'", () => {
      cy.get("input[placeholder='Enter your email']").should("exist");
    });
  });
  