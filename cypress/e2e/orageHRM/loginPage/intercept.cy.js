///<reference types="cypress"/>

describe("intercept test", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });
  it("user login with valid credentials", () => {
    cy.get('[name="username"]').type("Admin");
    cy.get('[name="password"]').type("admin123");
    cy.intercept("GET", "**/employees/action-summary").as("action-summary");
    cy.get(
      '[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]'
    ).click();
    cy.wait("@action-summary").then((intercept) => {
      expect(intercept.response.statusCode).to.equal(200);
    });
  });
  it("User login with invalid credentials", () => {
    cy.get('[name="username"]').type("admin");
    cy.get('[name="password"]').type("Admin123");

    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages"
    ).as("message");

    cy.get(
      '[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]'
    ).click();

    cy.wait("@message", { timeout: 10000 }).then((intercept) => {
      expect(intercept.response.statusCode).to.equal(304);
    });
  });
  it("User login with invalid credentials", () => {
    cy.get('[name="username"]').type("admin");
    cy.get('[name="password"]').type("Admin123");

    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages"
    ).as("message");

    cy.get(
      '[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]'
    ).click();

    cy.wait("@message", { timeout: 10000 }).then((intercept) => {
      expect(intercept.response.statusCode).to.equal(304);
    });
  });

  it("User login with invalid username and valid password", () => {
    cy.get('[name="username"]').type("admin");
    cy.get('[name="password"]').type("admin123");
    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary"
    ).as("action-summary");
    cy.get(
      '[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]'
    ).click();
    cy.wait("@action-summary").then((intercept) => {
      expect(intercept.response.statusCode).to.equal(200);
    });
  });

  it("User login with valid username and invalid password", () => {
    cy.get('[name="username"]').type("Admin");
    cy.get('[name="password"]').type("Admin123");

    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages"
    ).as("message");

    cy.get(
      '[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]'
    ).click();
    cy.wait("@message", { timeout: 10000 }).then((intercept) => {
      expect(intercept.response.statusCode).to.equal(304);
    });
  });
});
