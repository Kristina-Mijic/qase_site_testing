// const ProjectPage = import ('../support/pages/projectPage').ProjectPage
// const RepositoryPage = import ('../support/pages/repositoryPage').RepositoryPage
// const CreateTestCasePage = import ('../support/pages/createTestCasePage').CreateTestCasePage


describe('QASE', () => {
  xit('Create a project', () => {
   cy.login('mijickristina18@gmail.com' , 'TestPass123!')

   cy.createProject('TestProject', 'TESTP', 'Project description','private', 'all' )

  })
  xit('Create a test suite', () => {
     cy.login('mijickristina18@gmail.com' , 'TestPass123!')

     cy.createTestSuite('TESTP','Test suits', 'Project root', 'Test suite description', 'Test preconditions')

  })
  xit('Create a test case', () => {
    cy.login('mijickristina18@gmail.com' , 'TestPass123!');

   cy.createTestCase()

  })


  it('Iterate throught projects', () => {
    cy.login('mijickristina18@gmail.com' , 'TestPass123!');

    // cy.get('.project-row > td:nth-child(4)').each(($el, index, $list) => {
    //   cy.log("Index " + index + " : " + $el.text())
    //   cy.wrap($el).click()
    // })

    cy.get('.project-row > td:nth-child(4)').each(($el, index, $list) => {
     
      // cy.wrap($el).click()
      // cy.get('.SaBStZ > div').invoke('text').as('elementText')
      // cy.get('@elementText').its('length').should('eq', 2)
      // cy.go('back')

      cy.wrap($el).invoke('text').as('elementText')
      cy.get('@elementText').its('length').should('eq', 16)
      // cy.go('back')
    })

  })
})