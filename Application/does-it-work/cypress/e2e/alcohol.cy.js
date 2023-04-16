describe('Alcohol types', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:5173/')
    })
  
    it('shows Beer image with text', () => {
      cy.get('[alt="Beer Image"]').should('be.visible')
      cy.contains('Beer').should('be.visible')
      cy.contains('A magic potion used to make the opposite sex look better').should('be.visible')
    })
  
    it('shows Liquor image with text', () => {
      cy.get('[alt="Liqueur Image"]').should('be.visible')
      cy.contains('Liquor').should('be.visible')
      cy.contains('Drinking may cause memory loss. Or worse. Memory loss!').should('be.visible')
    })
  
    it('shows Wine image with text', () => {
      cy.get('[alt="Wine Image"]').should('be.visible')
      cy.contains('Wine').should('be.visible')
      cy.contains('When you are too broke, hungover or not in the mood for beer').should('be.visible')
    })
  })
  