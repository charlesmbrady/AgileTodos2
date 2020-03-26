/// <reference types="cypress" />

import Registration from '../Helpers/registration.js';

describe('register', function() {
  it('User can visit registration page', function() {
    cy.visit('/register');
  });

  it('Can register a new a user', function() {
    const firstName = 'Charles';
    const lastName = 'Brady';
    const email = 'theGoat@gmail.com';
    const password = 'Password1!';

    cy.visit('/registration');

    // Fill out form
    cy.get(Registration.FIRST_NAME).type(firstName);
    cy.get(Registration.LAST_NAME).type(lastName);
    cy.get(Registration.EMAIL).type(email);
    cy.get(Registration.PASSWORD).type(password);
    cy.get(Registration.PASSWORD_CONFIRMATION).type(password);

    // Submit
    cy.get(Registration.SUBMIT).click();
  });
});
