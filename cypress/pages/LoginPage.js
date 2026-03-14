class LoginPage {

  visit() {
    cy.visit('/web/index.php/auth/login')

    // garante que a página carregou
    cy.get('input[name="username"]', { timeout: 10000 })
      .should('be.visible')
  }

  fillUsername(username) {
    cy.get('input[name="username"]')
      .should('be.visible')
      .clear()
      .type(username)
  }

  fillPassword(password) {
    cy.get('input[name="password"]')
      .should('be.visible')
      .clear()
      .type(password)
  }

  submit() {
    cy.get('button[type="submit"]')
      .should('be.visible')
      .click()
  }

  login(username, password) {
    this.fillUsername(username)
    this.fillPassword(password)
    this.submit()
  }

}

export default new LoginPage()