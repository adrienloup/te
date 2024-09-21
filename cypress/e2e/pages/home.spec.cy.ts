describe('home', () => {
  it('renders the skeleton', () => {
    cy.visit('');

    cy.get('[data-cy="title"]')
      .should('exist')
      .should('have.text', 'Electricity and gas save money today!');
  });
});
