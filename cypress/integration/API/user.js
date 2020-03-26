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
      );
    });
  });

  it('PUT /auth/user/:id - update a user', function() {
    cy.request('POST', `${Cypress.config('apiUrl')}/auth/user`, {
      firstName: 'adff',
      lastName: 'reee',
      email: 'ranom',
      password: 'Password1!'
    }).then(response => {
      cy.request(
        'PUT',
        `${Cypress.config('apiUrl')}/auth/user/${response.body.id}`,
        {
          firstName: 'anewname'
        }
      ).then(newResponse => {
        expect(newResponse.status).to.equal(200);
        cy.request(
          'GET',
          `${Cypress.config('apiUrl')}/auth/user/${response.body.id}`
        ).then(getRes => {
          console.log('THE GET RESPONSE____________________ \n\r\n' + getRes);
          expect(getRes.status).to.equal(200);
          expect(getRes.body.firstName).to.equal('anewname');
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
});
