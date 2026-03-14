/* 
smoke test que valida o fluxo principal da aplicação:
- login
- navegação entre módulos
- logout
*/

import LoginPage from '@pages/LoginPage'
import DashboardPage from '@pages/DashboardPage'

describe('Smoke Test - Fluxo principal do sistema', () => {

  it('deve validar fluxo principal da aplicação', () => {

    // login
    LoginPage.visit()
    LoginPage.login('Admin', 'admin123')

    // valida dashboard
    cy.url().should('include', '/dashboard')

    // acessa Admin
    cy.contains('Admin').click()
    cy.url().should('include', '/admin')

    // acessa PIM
    cy.contains('PIM').click()
    cy.url().should('include', '/pim')

    // volta para Dashboard
    cy.contains('Dashboard').click()
    cy.url().should('include', '/dashboard')

    // logout
    DashboardPage.logout()

    // valida logout
    cy.url().should('include', '/auth/login')

  })

})