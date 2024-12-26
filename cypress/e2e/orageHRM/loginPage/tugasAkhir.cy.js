///<reference types="cypress"/>

import dashboardPage from "../../../pom/orangeHRM/dashboard/dashboard";
import loginPage from "../../../pom/orangeHRM/login/login";

describe("Login feature", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });
  it("User login with valid credentials", () => {
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
  it("User click reset password", () => {
    loginPage.linkResetPassword().click();
  });
  it("User click reset password and click cancel button", () => {
    loginPage.linkResetPassword().click();
    loginPage.buttonCancel().click();
  });
  it("User reset password with invalid username", () => {
    loginPage.linkResetPassword().click();
    loginPage.inputResetPassword().type("test123");
    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages"
    ).as("message");
    loginPage.buttonResetPassword().click();
    cy.wait("@message", { timeout: 10000 }).then((intercept) => {
      expect(intercept.response.statusCode).to.equal(304);
    });
  });
  it("User reset password with valid username", () => {
    loginPage.linkResetPassword().click();
    loginPage.inputResetPassword().type("Admin");
    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages"
    ).as("message");
    loginPage.buttonResetPassword().click();
    cy.wait("@message", { timeout: 10000 }).then((intercept) => {
      expect(intercept.response.statusCode).to.equal(304);
    });
  });
  it("User reset password with empty username", () => {
    loginPage.linkResetPassword().click();
    loginPage.buttonResetPassword().click();
    loginPage.validationMessage().should("be.visible");
  });
  it("Search employee name 'Ragna' in directory page", () => {
    loginPage.inputUsername().type("Admin");
    loginPage.inputPassword().type("admin123");

    cy.intercept("GET", "**/employees/action-summary").as("action-summary");

    loginPage.buttonLogin().eq(0).click();

    cy.wait("@action-summary").then((intercept) => {
      console.log("Intercepted Request:", intercept);
      expect(intercept.response.statusCode).to.equal(200);
    });

    cy.reload();
    dashboardPage.buttonDirectory().eq(7).click();
    cy.intercept("GET", "**/directory/employees?limit=14&offset=0").as(
      "employees"
    );
    cy.wait("@employees", { timeout: 10000 }).then((intercept) => {
      expect(intercept.response.statusCode).to.equal(200);
    });
    dashboardPage.inputUsernameDirectory().type("Ranga");
    dashboardPage.dropdownDirectory().contains("Ranga").click();
    cy.intercept(
      "GET",
      "**/directory/employees?limit=14&offset=0&empNumber=69"
    ).as("employee");
    dashboardPage.buttonSearchDirectory().click();

    cy.wait("@employee", { timeout: 10000 }).then((intercept) => {
      expect(intercept.response.statusCode).to.equal(200);
    });
    dashboardPage.cardDirectory().should("be.visible");
  });
  it("Search employee name with empty username in directory page", () => {
    loginPage.inputUsername().type("Admin");
    loginPage.inputPassword().type("admin123");

    cy.intercept("GET", "**/employees/action-summary").as("action-summary");

    loginPage.buttonLogin().eq(0).click();

    cy.wait("@action-summary").then((intercept) => {
      console.log("Intercepted Request:", intercept);
      expect(intercept.response.statusCode).to.equal(200);
    });

    cy.reload();
    dashboardPage.buttonDirectory().eq(7).click();
    cy.intercept("GET", "**/directory/employees?limit=14&offset=0").as(
      "employees"
    );
    cy.wait("@employees", { timeout: 10000 }).then((intercept) => {
      expect(intercept.response.statusCode).to.equal(200);
    });
    dashboardPage.buttonSearchDirectory().click();
    dashboardPage.recordsTextDirectory().should("be.visible");
  });
  it("Search employee name with invalid username in directory page", () => {
    loginPage.inputUsername().type("Admin");
    loginPage.inputPassword().type("admin123");

    cy.intercept("GET", "**/employees/action-summary").as("action-summary");

    loginPage.buttonLogin().eq(0).click();

    cy.wait("@action-summary").then((intercept) => {
      console.log("Intercepted Request:", intercept);
      expect(intercept.response.statusCode).to.equal(200);
    });

    cy.reload();
    dashboardPage.buttonDirectory().eq(7).click();
    cy.intercept("GET", "**/directory/employees?limit=14&offset=0").as(
      "employees"
    );
    cy.wait("@employees", { timeout: 10000 }).then((intercept) => {
      expect(intercept.response.statusCode).to.equal(200);
    });
    dashboardPage.inputUsernameDirectory().type("atmin");
    dashboardPage.dropdownDirectory().contains("No Records Found").click();

    dashboardPage.buttonSearchDirectory().click();

    dashboardPage.validationMessageInDirectory().should("be.visible");
  });
});
