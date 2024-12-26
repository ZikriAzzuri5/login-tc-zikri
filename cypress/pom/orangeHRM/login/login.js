export default class loginPage {
  static inputUsername() {
    return cy.get('[name="username"]');
  }
  static inputPassword() {
    return cy.get('[name="password"]');
  }
  static inputResetPassword() {
    return cy.get('[class="oxd-input oxd-input--active"]');
  }
  static linkResetPassword() {
    return cy.get(
      '[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]'
    );
  }
  static buttonResetPassword() {
    return cy.get(
      '[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset"]'
    );
  }
  static buttonCancel() {
    return cy.get(
      '[class="oxd-button oxd-button--large oxd-button--ghost orangehrm-forgot-password-button orangehrm-forgot-password-button--cancel"]'
    );
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
