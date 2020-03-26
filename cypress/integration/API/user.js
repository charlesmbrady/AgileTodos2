describe('API Tests', () => {
  it('POST /auth/register - create new user', function() {
    cy.request('POST', `${Cypress.config('apiUrl')}/auth/user`, {
      firstName: 'The',
      lastName: 'Goat',
      email: 'theGoat@GOAT.com',
      password: 'Password1!'
    }).then(response => {
      // response.body is automatically serialized into JSON
      expect(response.body).to.have.property('firstName', 'The'); // true
      cy.request(
        'DELETE',
        `${Cypress.config('apiUrl')}/auth/user/${response.body.id}`
      ).then(deleteRes => {
        expect(deleteRes.status).to.equal(200);
      });
    });
  });

  it('PUT /auth/user/:id - can update a user', function() {
    cy.request('POST', `${Cypress.config('apiUrl')}/auth/user`, {
      firstName: 'adff',
      lastName: 'reee',
      email: 'ranom',
      password: 'Password1!'
    }).then(response => {
      // response.body is automatically serialized into JSON
      console.log(response);
      expect(response.body).to.have.property('firstName', 'adff'); // true
      cy.request(
        'PUT',
        `${Cypress.config('apiUrl')}/auth/user/${response.id}`,
        {
          firstName: 'anewname'
        }
      ).then(newResponse => {
        expect(newResponse.body).to.have.property('firstName', 'anewname');
        cy.request(
          'DELETE',
          `${Cypress.config('apiUrl')}/auth/user/${response.body.id}`
        ).then(deleteRes => {
          expect(deleteRes.status).to.equal(200);
        });
      });
    });
  });

  it('PUT /auth/user/:id - can update a user', function() {
    cy.request('POST', `${Cypress.config('apiUrl')}/auth/user`, {
      firstName: 'adff',
      lastName: 'reee',
      email: 'ranom',
      password: 'Password1!'
    }).then(response => {
      // response.body is automatically serialized into JSON
      console.log(response);
      expect(response.body).to.have.property('firstName', 'adff'); // true
      cy.request(
        'PUT',
        `${Cypress.config('apiUrl')}/auth/user/${response.body.id}`,
        {
          firstName: 'anewname'
        }
      ).then(newResponse => {
        expect(newResponse.body).to.have.property('firstName', 'anewname');
        cy.request(
          'DELETE',
          `${Cypress.config('apiUrl')}/auth/user/${response.body.id}`
        ).then(deleteRes => {
          expect(deleteRes.status).to.equal(200);
        });
      });
    });
  });
});
