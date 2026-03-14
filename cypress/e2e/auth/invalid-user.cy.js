import LoginPage from '@pages/LoginPage'

describe('Login inválido - usuário inexistente', () => {

  it('deve exibir mensagem de erro ao informar usuário inexistente', () => {

    LoginPage.visit()

    LoginPage.login('usuarioFake', 'admin123')

    cy.contains('Invalid credentials').should('be.visible')

    cy.url().should('include', '/auth/login')

  })

})