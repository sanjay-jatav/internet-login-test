describe('Login Page Tests', () => {
    
    beforeEach(() => {
        // Visit the login page before each test
        cy.visit('https://the-internet.herokuapp.com/login');
    });

    afterEach(() => {
        // Clear cookies after each test
        cy.clearCookies();
    });

    it('should check if the login button is visible', () => {
        cy.get('button[type="submit"]').should('be.visible');
    });

    it('should verify if the page contains a field with the placeholder text "Enter your email"', () => {
        cy.get('input[placeholder="Enter your email"]').should('exist');
    });
});
