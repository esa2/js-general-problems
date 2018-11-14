'use strict'

const solution = require('./solution')

describe('Solution Module', function() {
  describe('#anagram', function() {
    it('should return', function() {
      expect(solution.anagram('abc', 'abc')).toEqual(true)
    })
  })
  describe('#anagram', function() {
    it('should return', function() {
      expect(solution.anagram('abc', 'abcd')).toEqual(false)
    })
  })
})
