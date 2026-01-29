describe('Mission check parrot img', () => {
  it('search parrot and click first parrot pic', () => {
    cy.visit('https://www.google.com/search?q=parrot&udm=2')
    //test url
    cy.url().should('include','udm=2')
    //get first parrot pic
    cy.get('img[alt*=/parrot/i]').first().click()
  })
})