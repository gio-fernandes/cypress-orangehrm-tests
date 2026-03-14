class AdminPage {

  openAdminMenu() {
    cy.contains('span', 'Admin').click();
  }

  searchUser(username) {
    cy.get('input[placeholder="Search"]').type(username);
    cy.contains('button', 'Search').click();
  }

  verifyUserFound(username) {
    cy.contains(username).should('be.visible');
  }

}

export default new AdminPage();