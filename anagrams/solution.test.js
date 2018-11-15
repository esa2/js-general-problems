'use strict'

const solution = require('./solution')

describe('Solution Module', function() {
  describe('#anagram', function() {
    it('should return true', function() {
      expect(solution.anagram('abc', 'abc')).toEqual(true)
    })
  })
  describe('#anagram', function() {
    it('should return false', function() {
      expect(solution.anagram('abc', 'abcd')).toEqual(false)
    })
  })
})
