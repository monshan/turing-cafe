describe('MVP functionality', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Should display a form on load', () => {
    cy.get('form').should('exist')
    cy.get('form').should('be.visible')
  })

  it('Should display all previous reservations on load', () => {
    cy.get('.resy-container').children()
      .should('have.length', 9)
      .and('be.visible')
  })

  it('Should display previous reservations accurately', () => {
    cy.get('.resy-container article:first')
      .contains('Christie')
    cy.get('.resy-container article:first')
      .contains('12/29')
    cy.get('.resy-container article:first')
      .contains('7:00 pm')
    cy.get('.resy-container article:first')
      .contains('Number of guests: 12')
  })

  it('Should be able to interact with form accurately', () => {
    cy.get('form > #name').type('Connor')
  })

  it('Should be able to add a reservation accurately', () => {

  })
})