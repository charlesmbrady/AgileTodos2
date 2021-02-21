import pages from '../Pages/index';

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

// Create Todo
Cypress.Commands.add('fillTodo', todo => {
  // type in subject
  cy.get(pages.CreateTodoModal.SUBJECT).type(todo.subject);

  // type in description
  cy.get(pages.CreateTodoModal.DESCRIPTION).type(todo.description);

  // type in priority
  cy.get(pages.CreateTodoModal.TYPE).select(todo.type);

  // type in type
  cy.get(pages.CreateTodoModal.PRIORITY).select(todo.priority);

  // type in sprint
  cy.get(pages.CreateTodoModal.SPRINT).select(todo.sprintName);
});

// Create Sprint
Cypress.Commands.add('fillSprint', sprint => {
  // type in subject
  cy.get(pages.CreateSprintModal.NAME).type(sprint.name);
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
