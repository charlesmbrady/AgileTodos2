/// <reference types="cypress" />

import pages from '../../../Pages/index';

describe('register', function() {
  it('User can visit registration page', function() {
    cy.visit('/');
    cy.get(pages.Login.TO_REGISTRATION).click();
  });

  it('Can register a new a user', function() {
    const user = {
      firstName: 'Cotta',
      lastName: 'Terra',
      email: 'Cotta.Terra@gmail.com',
      password: 'Password1!',
      passwordConfirmation: 'Password1!'
    };

    cy.visit('/');

    cy.get(pages.Login.TO_REGISTRATION).click();

    // Fill out form
    cy.fillRegistration(user);

    // // Submit
    cy.get(pages.Registration.SUBMIT).click();
  });
});
