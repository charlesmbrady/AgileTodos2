/// <reference types="cypress" />

describe('home', function() {
  it('can click ping button', function() {
    cy.visit('/');
    cy.get('button').click();
  });
});

describe('Users', function() {
  it('Canary test', function() {
    expect(1).to.equal(1);
  });

  it('Can create user', function() {
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
