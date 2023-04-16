describe('Calculator', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:5173/')
    })

    it('should redirect to the calculator page when "GetStarted" button is clicked', () => {
        cy.get('#calculator button').click();
        cy.url().should('include', '/Calculator');
      });

})