import AdminPage from '@pages/AdminPage'

describe('Admin - Busca de usuário', () => {

  beforeEach(() => {

    cy.visit('https://opensource-demo.orangehrmlive.com')

    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()

  })

  it('deve buscar um usuário no admin', () => {

    AdminPage.openAdminMenu()

    AdminPage.searchUser('Admin')

    AdminPage.verifyUserFound('Admin')

  })

})