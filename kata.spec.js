const expect = require('expect.js')

describe('context', () => {
    it('empty', () => {

    })
})

// This allows the quokka-mocha-bdd plugin to do its thing.
// Make sure to keep it at the end of the file or remove it
// if you're not using Quokka.
if (typeof global.runQuokkaMochaBdd === 'function') {
    runQuokkaMochaBdd();
}
