import { URLS } from '../../urls';

describe('Home page', () => {
  beforeEach('visit home page', () => {
    cy.visit(URLS.baseUrl);
  });

  it('should have three arrivals only', () => {
    cy.get('a:contains(Add to basket)').should('have.length', 3);
  });

  it('should select Selenium Ruby arrival', () => {
    cy.get(`a[href="${URLS.products.seleniumRuby}"]`).click();
    cy.url().should('eq', `${URLS.products.seleniumRuby}`);
    cy.get('h1').should('have.text', 'Selenium Ruby');
  });
});
