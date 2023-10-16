import { URLS } from '../../urls';

describe('My account page', () => {
  it('should get an error when trying to log in with incorrect credentials', () => {
    cy.visit(URLS.myAccountPage);
    cy.get('input#username').type('wrong username');
    cy.get('input#password').type('wrong password');
    cy.get('input[value="Login"]').click();
    cy.get('ul.woocommerce-error > li').should(
      'have.text',
      `Error: The username wrong username is not registered on this site. If you are unsure of your username, try your email address instead.`
    );
  });
});
