const LoginPage = require('../support/pages/loginPage').LoginPage
const ProjectPage = require('../support/pages/projectPage').ProjectPage
const RepositoryPage = require('../support/pages/repositoryPage').RepositoryPage
const CreateTestCasePage = require('../support/pages/createTestCasePage').CreateTestCasePage



/**
* @memberOf cy
* @method login
* @param email email
* @param password password
* @description use to login
*/
Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://app.qase.io/login')
    cy.get(LoginPage.emailInput).type(email)
    cy.get(LoginPage.passwordInput).type(password)
    cy.get(LoginPage.loginButton).click()
 })



/**
* @memberOf cy
* @method createProject
* @param name Project name
* @param code Project code
* @param description Project description
* @param projectAccess projectAccess
* @param memberAccess memberAccess

* @description use to create a project
*/
Cypress.Commands.add('createProject', (name, code, description, projectAccess, memberAccess ) => {
 cy.get(ProjectPage.createNewProjectBtn).click()
     cy.get(ProjectPage.projectName).type(name)
     cy.get(ProjectPage.projectCode).clear().type(code)
     cy.get(ProjectPage.projectDesc).type(description)

     if(projectAccess !== 'private') {
        cy.get(ProjectPage.projectAccessType.public).check()
     } else {
        if(memberAccess === 'all') {
            cy.get(ProjectPage.memberAccess.all).check()
        } else if (memberAccess === 'group') {
            cy.get(ProjectPage.memberAccess.group).check()
        } else {
            cy.get(ProjectPage.memberAccess.none).check()
        }
     }
     cy.get(ProjectPage.createBtn).click()
 })




 /**
 * @memberOf cy
 * @method createTestSuite
 * @param project Project name
  * @param name Suite name
 * @param parentSuit parentSuite
 * @param description suite description
 * @param preconditions preconditions
 * @description use to create a test suite
 */
 Cypress.Commands.add('createTestSuite', (project, name, parentSuite, description, preconditions ) => {
    cy.get(ProjectPage.projects[project]).click()

    cy.get(RepositoryPage.createSuite).click()
    cy.get(RepositoryPage.suiteName).type(name)

    if(parentSuite !== 'Project root') {

    }

    cy.get(RepositoryPage.suiteDescription).eq(0).type(description)
    cy.get(RepositoryPage.preconditions).type(preconditions)

    cy.get(RepositoryPage.createSuiteBtn).click()

})




 /**
 * @memberOf cy
 * @method createTestCase
 
 */
Cypress.Commands.add('createTestCase', () => {

    cy.get(ProjectPage.projects.TESTP).click()
    cy.get(RepositoryPage.createCaseButton).click()
    cy.get(CreateTestCasePage.title).type('Test case 1')
    cy.xpath(CreateTestCasePage.status).click()
    cy.xpath(CreateTestCasePage.dropdownItem.replace('$', 'Draft')).click()
    cy.get(CreateTestCasePage.saveCaseBtn).click()

    cy.xpath(RepositoryPage.testCaseInSuite.replace('$', 'Test cases without suite').replace('$$', 'Test case 1')).should('be.visible')

})