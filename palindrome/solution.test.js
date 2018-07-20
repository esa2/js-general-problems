'use strict'

const solution = require('./solution')

describe('Solution Module', function() {
  describe('#palindrome', function() {
    it('should return true if string argument is a palindrome', function() {
      let str = 'racecar'
      expect(solution.palindrome(str)).toEqual(true)
    })
    it('should return false if string argument is not a palindrome', function() {
      let str = 'racecars'
      expect(solution.palindrome(str)).toEqual(false)
    })
    it('should return true if string argument is a palindrome', function() {
      let str = 'racecar'
      expect(solution.palindrome2(str)).toEqual(true)
    })
    it('should return false if string argument is not a palindrome', function() {
      let str = 'racecars'
      expect(solution.palindrome2(str)).toEqual(false)
    })
    it('should return true if string argument is a palindrome', function() {
      let str = 'racecar'
      expect(solution.palindrome3(str)).toEqual(true)
    })
    it('should return false if string argument is not a palindrome', function() {
      let str = 'racecars'
      expect(solution.palindrome3(str)).toEqual(false)
    })
    it('should return true if string argument is a palindrome', function() {
      let str = 'racecar'
      expect(solution.palindrome4(str)).toEqual(true)
    })
    it('should return false if string argument is not a palindrome', function() {
      let str = 'racecars'
      expect(solution.palindrome4(str)).toEqual(false)
    })
  })
})
