import pages from '../../../Pages/index';

describe('create todo', () => {
  it('can create todo', () => {
    const sprint = {
      name: 'Drama',
      startDate: null,
      endDate: null
    };
    const todo = {
      subject: 'Do the dishes',
      description: 'I need to do the dishes',
      points: 10,
      priority: 2
    };

    const user = {
      firstName: 'Drama',
      lastName: 'queen ',
      email: 'drama.queen@gmail.com',
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

    cy.get(pages.Dashboard.CREATE_SPRINT_BUTTON).click();
    cy.get(pages.CreateSprintModal.NAME).type('Alpha');
    cy.get(pages.CreateSprintModal.SUBMIT).click();

    cy.get(pages.Dashboard.CREATE_TODO_BUTTON).click();

    cy.get(pages.CreateTodoModal.SUBJECT).type('Do the dishes');
    cy.get(pages.CreateTodoModal.DESCRIPTION).type(
      'I really need to do the dishes they are gross'
    );
    cy.get(pages.CreateTodoModal.TYPE).type('personal');
    cy.get(pages.CreateTodoModal.PRIORITY).type('1');
    cy.get(pages.CreateTodoModal.SPRINT).type('1');

    cy.get(pages.CreateTodoModal.SUBMIT).click();
    cy.get('[data-test="todo"]').should('be.visible');
  });

  // it('can create multiple todos', () => {
  //   const sprintOne = 'Dafne';
  //   const sprintTwo = 'Stuart';

  //   const user = {
  //     firstName: 'Charlies',
  //     lastName: 'Davosangels',
  //     email: 'Charlie.Davosangels@gmail.com',
  //     password: 'Password1!',
  //     passwordConfirmation: 'Password1!'
  //   };

  //   cy.visit('/registration');

  //   // Fill out registration form
  //   cy.fillRegistration(user);

  //   // Submit
  //   cy.get(pages.Registration.SUBMIT).click();
  //   // Redirects to login page

  //   cy.login(user);

  //   cy.get(pages.Login.SUBMIT).click();

  //   cy.get(pages.Dashboard.CREATE_SPRINT_BUTTON).click();
  //   cy.get(pages.CreateSprintModal.NAME).type(sprintOne);
  //   cy.get(pages.CreateSprintModal.SUBMIT).click();

  //   cy.get(pages.Dashboard.CREATE_SPRINT_BUTTON).click();
  //   cy.get(pages.CreateSprintModal.NAME).type(sprintTwo);
  //   cy.get(pages.CreateSprintModal.SUBMIT).click();

  // });
});
