describe('API calls', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Should be able to retrieve data with GET', () => {
    cy.intercept({
      method: 'GET',
      url: 'http://localhost:3001/api/v1/reservations'
    }, { statusCode: 201 })
    cy.get('.resy-container article:first')
      .contains('Christie')
    cy.get('.resy-container article:first')
      .contains('12/29')
    cy.get('.resy-container article:first')
      .contains('7:00 pm')
    cy.get('.resy-container article:first')
      .contains('Number of guests: 12')
  })
})