///<reference types="cypress"/>
import loginPage from "../../../pom/orangeHRM/login/login";

describe("intercept test", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });
  it("user login with valid credentials", () => {
    loginPage.inputUsername().type("Admin");
    loginPage.inputPassword().type("admin123");
    cy.intercept("GET", "**/employees/action-summary").as("action-summary");
    loginPage.buttonLogin().click();
    cy.wait("@action-summary").then((intercept) => {
      expect(intercept.response.statusCode).to.equal(200);
    });
  });
  it("User login with invalid credentials", () => {
    loginPage.inputUsername().type("admin");
    loginPage.inputPassword().type("Admin123");

    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages"
    ).as("message");

    loginPage.buttonLogin().click();

    cy.wait("@message", { timeout: 10000 }).then((intercept) => {
      expect(intercept.response.statusCode).to.equal(304);
    });
    loginPage.errorMessage().should("be.visible");
  });

  it("User login with invalid username and valid password", () => {
    loginPage.inputUsername().type("admin");
    loginPage.inputPassword().type("admin123");
    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary"
    ).as("action-summary");
    loginPage.buttonLogin().click();
    cy.wait("@action-summary").then((intercept) => {
      expect(intercept.response.statusCode).to.equal(200);
    });
  });

  it("User login with valid username and invalid password", () => {
    loginPage.inputUsername().type("Admin");
    loginPage.inputPassword().type("Admin123");

    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages"
    ).as("message");

    loginPage.buttonLogin().click();
    cy.wait("@message", { timeout: 10000 }).then((intercept) => {
      expect(intercept.response.statusCode).to.equal(304);
    });
  });

  it("User login with empty username and empty password", () => {
    loginPage.buttonLogin().click();
    loginPage.validationMessage().should("be.visible");
  });
  it("User login with empty username and valid password", () => {
    loginPage.inputPassword().type("admin123");
    loginPage.buttonLogin().click();
    loginPage.validationMessage().should("be.visible");
  });
  it("User login with valid username and empty password", () => {
    loginPage.inputUsername().type("Admin");
    loginPage.buttonLogin().click();
    loginPage.validationMessage().should("be.visible");
  });
});
