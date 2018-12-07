describe("Authentication", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("Sign up", () => {
    it("Should Sign up the user given an email, password and re-enter password", () => {
      cy.get('[href="/signup"] > .btn__content').click();
      cy.url().should('include', '/signup');
      cy.get('#email').type('williamwalldeveloper@gmail.com');
      cy.get('#password').type('testpass');
      cy.get('#confirmPassword').type('testpass');
      cy.get('.flex > .btn > .btn__content').click();
      cy.url().should('include', '/');
    });
  });

  describe("Sign in", () => {
    it("Should login the user given an email and password", () => {
      cy.get('[href="/signin"] > .btn__content').click();
      cy.url().should('include', '/signin');
      cy.get('#email').type('williamwalldeveloper@gmail.com');
      cy.get('#password').type('testpass');
      cy.get(':nth-child(3) > :nth-child(1) > .btn > .btn__content').click();
      cy.url().should('include', '/');
    });
  });

  describe("Reset password", () => {
    it("Should send the user an email to reset their password", () => {
      cy.get('[href="/signin"] > .btn__content').click();
      cy.url().should('include', '/signin');
      cy.get(':nth-child(2) > .btn > .btn__content').click();
      cy.url().should('include', '/reset');
      cy.get('#email').type('williamwalldeveloper@gmail.com');
      cy.get('.flex > .btn > .btn__content').click();
      cy.url().should('include', '/');
    });
  });

});
