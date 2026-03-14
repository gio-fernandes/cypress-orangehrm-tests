import LoginPage from '@pages/LoginPage'

describe('Login inválido - campos obrigatórios', () => {

  it('deve exibir mensagens Required quando os campos estão vazios', () => {

    LoginPage.visit()

    LoginPage.submit()

    cy.get('.oxd-input-field-error-message')
      .should('have.length', 2)

  })

})