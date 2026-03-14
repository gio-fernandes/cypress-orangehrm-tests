import LoginPage from '@pages/LoginPage'
import loginData from '../../fixtures/loginData.json'

describe('Login inválido com data driven', () => {

  beforeEach(() => {
    LoginPage.visit()
  })

  loginData.forEach((data) => {

    it(`deve exibir erro para ${data.title}`, () => {

      LoginPage.login(data.username, data.password)

      cy.contains(data.message).should('be.visible')
      cy.url().should('include', '/auth/login')

    })

  })

})