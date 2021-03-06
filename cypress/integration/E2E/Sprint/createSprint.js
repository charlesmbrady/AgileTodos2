import pages from '../../../Pages/index';

describe('create sprint', () => {
  it('can create sprint', () => {
    const sprint = {
      name: 'Alpha',
      startDate: null,
      endDate: null
    };

    const user = {
      firstName: 'Alpha',
      lastName: 'Bravo',
      email: 'alpha.bravo@gmail.com',
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
  });

  it('can create multiple sprints', () => {
    const sprintOne = 'Alpha';
    const sprintTwo = 'Bravo';

    const user = {
      firstName: 'Charlie',
      lastName: 'Davos',
      email: 'Charlie.Daveos@gmail.com',
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
    cy.get(pages.CreateSprintModal.NAME).type(sprintOne);
    cy.get(pages.CreateSprintModal.SUBMIT).click();

    cy.get(pages.Dashboard.CREATE_SPRINT_BUTTON).click();
    cy.get(pages.CreateSprintModal.NAME).type(sprintTwo);
    cy.get(pages.CreateSprintModal.SUBMIT).click();
  });
});
