'use strict'

const solution = require('./solution')

describe('Solution Module', function() {
  describe('#reverseInt', function() {
    it('should return a reversed integer', function() {
      expect(solution.reverseInt(12)).toEqual(21)
    })
    it('should return a reversed integer', function() {
      expect(solution.reverseInt(-52)).toEqual(-25)
    })
    it('should return a reversed integer', function() {
      expect(solution.reverseInt(5)).toEqual(5)
    })
    it('should return a reversed integer', function() {
      expect(solution.reverseInt(0)).toEqual(0)
    })
  })
})
