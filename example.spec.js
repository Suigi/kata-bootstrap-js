const expect = require('expect.js')

// These first tests serve as proof that the test framework
// is set up correctly and as example usages of describe, it
// and expect. Feel free to delete them or change them.
describe('delete me', () => {
    it('passes', () => {
        expect('Alpha').to.equal('Alpha')
    })

    it('fails', () => { 
        expect('Bravo').to.equal('Charlie')
     })
})


// This allows the quokka-mocha-bdd plugin to do its thing.
// Make sure to keep it at the end of the file or remove it
// if you're not using Quokka.
if (typeof global.runQuokkaMochaBdd === 'function') {
    runQuokkaMochaBdd();
}
