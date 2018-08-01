'use strict'

const solution = require('./solution')

describe('Solution Module', function() {
  describe('#maxChar', function() {
    it('should return the character that occurs most frequently', function() {
      expect(solution.maxChar('abcvabzzzzzv')).toEqual(5)
    })
  })
})
