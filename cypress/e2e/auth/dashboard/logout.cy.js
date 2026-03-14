import LoginPage from '../../../pages/LoginPage'
import DashboardPage from '../../../pages/DashboardPage'

describe('Logout Test', () => {

  it('deve realizar logout com sucesso', () => {

    LoginPage.visit()

    LoginPage.login('Admin', 'admin123')

    DashboardPage.logout()

    cy.url().should('include', '/login')

  })

})