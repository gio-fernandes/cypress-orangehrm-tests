class DashboardPage {

  openUserMenu() {
    cy.get('.oxd-userdropdown-tab').click()
  }

  clickLogout() {
    cy.contains('Logout').click()
  }

  logout() {
    this.openUserMenu()
    this.clickLogout()
  }

}

export default new DashboardPage()