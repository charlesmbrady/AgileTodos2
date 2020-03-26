describe('API Tests', () => {
  it('POST /auth/register - create new user', function() {
    // cy.visit('/');

    cy.request('POST', `${Cypress.config('apiUrl')}/auth/register`, {
      firstName: 'charles',
      lastName: 'brady',
      email: 'ranom',
      password: 'myPassword1!'
    }).then(response => {
      // response.body is automatically serialized into JSON
      expect(response.body).to.have.property('firstName', 'charles'); // true
    });
  });
});
