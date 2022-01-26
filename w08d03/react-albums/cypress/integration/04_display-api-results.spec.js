it('can display results from an api call', () => {
  // visit the homepage
  cy.visit('/');

  // tell cypress to intercept any outgoing GET requests
  cy.intercept('GET', '**/search*', { fixture: 'itunes' })
    .as('fetchedData');

  // find the input field and type into it
  cy.get('.search__form')
    .find('input')
    .type('Daft Punk');

  // find the spinner and make sure it is visible
  cy.get('.spinner')
    .should('be.visible');

  // tell cypress to wait until the data is loaded
  cy.wait('@fetchedData');

  // find a daft punk album on the page
  cy.get('article.album')
    .contains('Discovery')
    .should('be.visible');

  // uncheck the explicit checkbox
  cy.get('#Explicit')
    .uncheck();

  // check to make sure the explicit album is no longer listed
  cy.get('article.album')
    .should('not.contain', 'Daft Club');
});
