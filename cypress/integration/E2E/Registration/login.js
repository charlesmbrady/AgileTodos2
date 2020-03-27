/// <reference types="cypress" />

import Registration from '../Helpers/registration.js';
import Login from '../Helpers/login.js';

describe('login', function() {
  it('User can login', function() {
    const firstName = 'Charles2';
    const lastName = 'Brady';
    const email = 'theGoat2@gmail.com';
    const password = 'Password1!';

    cy.visit('/registration');

    // Fill out registration form
    cy.get(Registration.FIRST_NAME).type(firstName);
    cy.get(Registration.LAST_NAME).type(lastName);
    cy.get(Registration.EMAIL).type(email);
    cy.get(Registration.PASSWORD).type(password);
    cy.get(Registration.PASSWORD_CONFIRMATION).type(password);

    // Submit
    cy.get(Registration.SUBMIT).click();
    // Redirects to login page

    cy.get(Login.EMAIL).type(email);
    cy.get(Login.PASSWORD).type(password);

    cy.get(Login.SUBMIT).click();
  });
});
