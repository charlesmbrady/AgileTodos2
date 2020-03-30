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

  it('can delete todo', () => {
    const user = {
      firstName: 'Braomo',
      lastName: 'queen ',
      email: 'borma.queen@gmail.com',
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
    cy.get(pages.CreateTodoModal.TYPE).select('Personal');
    cy.get(pages.CreateTodoModal.PRIORITY).select('Medium');
    cy.get(pages.CreateTodoModal.SPRINT).select('Alpha');

    cy.get(pages.CreateTodoModal.SUBMIT).click();
    cy.get('[data-test="todo"]').should('be.visible');

    cy.get('[data-test="remove-todo-icon"]').click();
    cy.get('[data-test="remove-todo-icon"]').should('not.be.visible');
    // cy.get('[data-test="todo"]').should('not.be.visible');
  });

  it.only('can create many todos ', () => {
    const sprintOne = {
      name: 'llama',
      startDate: null,
      endDate: null
    };
    const todoOne = {
      subject: 'Do the dishes',
      description: 'I need to do the dishes',
      points: 10,
      priority: '2',
      type: 'personal',
      sprintName: 'llama'
    };
    const todoTwo = {
      subject: 'Take car to cleaner',
      description: 'It is so dirty and needs a wax',
      points: 10,
      priority: '2',
      type: 'personal',
      sprintName: 'llama'
    };

    const user = {
      firstName: 'Braomo',
      lastName: 'queen ',
      email: 'borma.queen@gmail.com',
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
    cy.fillSprint(sprintOne);
    cy.get(pages.CreateSprintModal.SUBMIT).click();

    cy.get(pages.Dashboard.CREATE_TODO_BUTTON).click();
    cy.fillTodo(todoOne);
    cy.get(pages.CreateTodoModal.SUBMIT).click();

    cy.get(pages.Dashboard.CREATE_TODO_BUTTON).click();
    cy.fillTodo(todoOne);
    cy.get(pages.CreateTodoModal.SUBMIT).click();

    cy.get('[data-test="todo"]').should('be.visible');

    // cy.get('[data-test="todo"]').should('not.be.visible');
  });
});
