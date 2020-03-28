import pages from '../integration/Pages/index';

// Register
Cypress.Commands.add('fillRegistration', user => {
  // type in first name
  cy.get(pages.Registration.FIRST_NAME).type(user.firstName);

  // type in first name
  cy.get(pages.Registration.LAST_NAME).type(user.lastName);

  // type in first name
  cy.get(pages.Registration.EMAIL).type(user.email);

  // type in password
  cy.get(pages.Registration.PASSWORD).type(user.password);

  // type in password
  cy.get(pages.Registration.PASSWORD_CONFIRMATION).type(
    user.passwordConfirmation
  );
});

// Login
Cypress.Commands.add('login', user => {
  // type in email
  cy.get(pages.Login.EMAIL).type(user.email);

  // type in password
  cy.get(pages.Login.PASSWORD).type(user.password);

  // click submit
  cy.get(pages.Login.SUBMIT).click();
});

// Coverage
if (Cypress.env('coverage')) {
  afterEach(function() {
    const coverageFile = `${Cypress.config('coverageFolder')}/out.json`;

    cy.window().then(win => {
      const coverage = win.__coverage__;

      if (!coverage) return;

      cy.task('coverage', coverage).then(map => {
        cy.writeFile(coverageFile, map);

        if (Cypress.env('coverage') === 'open') {
          cy.exec('nyc report --reporter=html');
        }
      });
    });
  });
}
