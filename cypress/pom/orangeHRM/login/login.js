export default class loginPage {
  static inputUsername() {
    return cy.get('[name="username"]');
  }
  static inputPassword() {
    return cy.get('[name="password"]');
  }
  static validationMessage() {
    return cy.get(
      '[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]'
    );
  }

  static errorMessage() {
    return cy.get('[class="oxd-alert oxd-alert--error"]');
  }

  static buttonLogin() {
    return cy.get(
      '[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]'
    );
  }
}
