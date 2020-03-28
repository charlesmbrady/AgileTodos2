/// <reference types="cypress" />

import pages from '../../../Pages/index';

describe('login', function() {
  it('User can login', function() {
    const user = {
      firstName: 'Alpha',
      lastName: 'Bravos',
      email: 'alpha.bravos@gmail.com',
      password: 'Password1!',
      passwordConfirmation: 'Password1!'
    };

    cy.visit('/registration');

    // Fill out registration form
    cy.fillRegistration(user);

    // Submit
    cy.get(pages.Registration.SUBMIT).click();
    // Redirects to login page

    cy.login(user);

    cy.get(pages.Login.SUBMIT).click();
  });
});
