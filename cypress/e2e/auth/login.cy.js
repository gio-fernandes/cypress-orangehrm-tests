import LoginPage from '@pages/LoginPage'

describe('Login Test', () => {
  it('deve realizar login com sucesso', () => {
    LoginPage.visit()
    LoginPage.fillUsername('Admin')
    LoginPage.fillPassword('admin123')
    LoginPage.submit()

    cy.url().should('include', '/dashboard')
  })
})