describe('suite number 3', () => {
    it('suite3 test1', () => {
        cy.wait(Math.floor(Math.random() * 3000) + 1000)
    })
    it('suite3 test2', () => {
        cy.wait(Math.floor(Math.random() * 3000) + 1000)
    })
})