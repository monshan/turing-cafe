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
    cy.get('form > #name').should('have.value', 'Connor')
    cy.get('form > #date').type('06/12')
    cy.get('form > #date').should('have.value', '06/12')
    cy.get('form > #time').type('8:00')
    cy.get('form > #time').should('have.value', '8:00')
    cy.get('form > #number').type('4')
    cy.get('form > #number').should('have.value', '4')
  })

  it('Should be able to add a reservation accurately', () => {
    cy.get('form > #name').type('Connor')
    cy.get('form > #date').type('06/12')
    cy.get('form > #time').type('8:00')
    cy.get('form > #number').type('4')
    cy.get('form > button').click()
    cy.get('.resy-container article:last')
      .contains('Connor')
    cy.get('.resy-container article:last')
      .contains('06/12')
    cy.get('.resy-container article:last')
      .contains('8:00 pm')
    cy.get('.resy-container article:last')
      .contains('Number of guests: 4')
  })
})