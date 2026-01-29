describe('Mission check parrot img', () => {
  it('search parrot and click first parrot pic', () => {
    cy.visit('https://www.google.com/')
    //type parrot on search box
    cy.get('textarea[name="q"]').type('parrot{enter}')
    //click image tab and test 
    cy.contains('a',/รูปภาพ|Images/).should('be.visible').click()
    //test url
    cy.url().should('include','udm=2')
    //get first parrot pic
    cy.get('img').filter((index,el)=>/parrot/i.test(el.alt))
    .first()
    .click()
  })
})