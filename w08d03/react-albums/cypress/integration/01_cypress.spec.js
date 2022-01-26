describe('tests for cypress', () => {

  it('works?', () => {
    assert.equal(true, true);
  });

  it('can visit a website', () => {
    cy.visit('http://localhost:8765');
  });

});
