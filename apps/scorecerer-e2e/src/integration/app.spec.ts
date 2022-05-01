describe('scorecerer', () => {
  beforeEach(() => cy.visit('/'));

  const home_page = '/scythe/test';
  it(`should start with navigation to ${home_page}`, () => {
    cy.url().should('include', home_page);
  });
});
