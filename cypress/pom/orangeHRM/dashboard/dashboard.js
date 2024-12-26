export default class dashboardPage {
  static buttonDirectory() {
    return cy.get('[class="oxd-main-menu-item"]');
  }
  static inputUsernameDirectory() {
    return cy.get(
      '[class="oxd-autocomplete-text-input oxd-autocomplete-text-input--active"]'
    );
  }
  static buttonSearchDirectory() {
    return cy.get(
      '[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]'
    );
  }
  static dropdownDirectory() {
    return cy.get('[class="oxd-autocomplete-dropdown --positon-bottom"]');
  }
  static cardDirectory() {
    return cy.get(
      '[class="oxd-sheet oxd-sheet--rounded oxd-sheet--white orangehrm-directory-card"]'
    );
  }
  static recordsTextDirectory() {
    return cy.get('[class="oxd-text oxd-text--span"]');
  }
  static validationMessageInDirectory() {
    return cy.get(
      '[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]'
    );
  }
}
