import LoginPage from '@pages/LoginPage'

describe('Login inválido - senha incorreta', () => {

  it('deve exibir mensagem de erro ao informar senha incorreta', () => {

    LoginPage.visit()

    LoginPage.login('Admin', 'senhaErrada')

    cy.contains('Invalid credentials').should('be.visible')

    cy.url().should('include', '/auth/login')

  })

})
