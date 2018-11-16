'use strict'

const solution = require('./solution')

describe('Solution Module', function() {
  describe('#anagram', function() {
    it('should return true', function() {
      expect(solution.anagram('abc', 'cba')).toEqual(true)
    })
  })
  describe('#anagram', function() {
    it('should return false', function() {
      expect(solution.anagram('abc', 'abcd')).toEqual(false)
    })
  })
  describe('#anagram2', function() {
    it('should return true', function() {
      expect(solution.anagram2('abc', 'cba')).toEqual(true)
    })
  })
  describe('#anagram2', function() {
    it('should return false', function() {
      expect(solution.anagram2('abc', 'abcd')).toEqual(false)
    })
  })
})
