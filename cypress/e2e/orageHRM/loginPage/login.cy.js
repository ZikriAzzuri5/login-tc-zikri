///<reference types="cypress"/>

describe("Login feature", () => {
  it("User login with valid credentials", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('[name="username"]').type("Admin");
    cy.get('[name="password"]').type("admin123");
    cy.get(
      '[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]'
    ).click();
  });
  it("User login with invalid credentials", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('[name="username"]').type("admin");
    cy.get('[name="password"]').type("Admin123");
    cy.get(
      '[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]'
    ).click();
  });
  it("User login with invalid username and valid password", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('[name="username"]').type("admin");
    cy.get('[name="password"]').type("admin123");
    cy.get(
      '[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]'
    ).click();
  });
  it("User login with valid username and invalid password", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('[name="username"]').type("Admin");
    cy.get('[name="password"]').type("Admin123");
    cy.get(
      '[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]'
    ).click();
  });
  it("User login with empty username and empty password", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get(
      '[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]'
    ).click();
  });
  it("User login with empty username and valid password", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('[name="password"]').type("admin123");
    cy.get(
      '[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]'
    ).click();
  });
  it("User login with valid username and empty password", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('[name="username"]').type("Admin");
    cy.get(
      '[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]'
    ).click();
  });
  it("User click reset password", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get(
      '[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]'
    ).click();
  });
  it("User click reset password and click cancel button", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get(
      '[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]'
    ).click();
    cy.get(
      '[class="oxd-button oxd-button--large oxd-button--ghost orangehrm-forgot-password-button orangehrm-forgot-password-button--cancel"]'
    ).click();
  });
  it("User reset password with invalid username", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get(
      '[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]'
    ).click();
    cy.get('[class="oxd-input oxd-input--active"]').type("test123");
    cy.get(
      '[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset"]'
    ).click();
  });
  it("User reset password with valid username", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get(
      '[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]'
    ).click();
    cy.get('[class="oxd-input oxd-input--active"]').type("Admin");
    cy.get(
      '[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset"]'
    ).click();
  });
  it("User reset password with empty username", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get(
      '[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]'
    ).click();
    cy.get(
      '[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset"]'
    ).click();
  });
});
