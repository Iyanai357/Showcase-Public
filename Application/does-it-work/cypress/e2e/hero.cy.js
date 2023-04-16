describe('Hero', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:5173/')
    })
  
    it('should display all images', () => {
        cy.get('img').should('be.visible')
      })
  })
  