/// <reference types="cypress" />
import loginPage from '../pages/loginPage'
import LoginPage from '../pages/loginPage'

describe('SauceDemo - Next QA - Cypress', () => {
    beforeEach(() => {
      cy.visit('/')
    // //   cy.fixture('dados-login.json').then(function (data) {
    // //     this.data = data;
    // })
    })
  
    it('Realizar a compra de um produto com sucesso', () => {
      loginPage.login('standard_user', 'secret_sauce')
      //loginPage.login(this.data.valid.user, 'secret_sauce')
    })

    it('Validar login com senha inválida', () => {
        loginPage.login('standard_user', 'secret_sauces')
        cy.get('[data-test=error]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
      })
  })