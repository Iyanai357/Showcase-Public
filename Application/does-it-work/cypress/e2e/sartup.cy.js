describe('startup.cy.jsx', () => {
  it('Loads the application', () => {
    cy.visit('http://127.0.0.1:5173/');
    cy.contains('Internet Alcohol');
   
  })
})