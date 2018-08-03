'use strict'

const solution = require('./solution')

describe('Solution Module', function() {
  describe('#fizzbuzz', function() {
    it('should return', function() {
      expect(solution.fizzbuzz('15')).toEqual('1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz ')
    })
  })
})
