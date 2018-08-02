'use strict'

const solution = require('./solution')

describe('Solution Module', function() {
  describe('#maxChar', function() {
    it('should return the character that occurs most frequently', function() {
      expect(solution.maxChar('abcvabzzzzzv')).toEqual(5)
    })
  })
    describe('#maxChar', function() {
      it('should return the character that occurs most frequently', function() {
        expect(solution.maxChar2('11223330')).toEqual(3)
      })
    })
    describe('#maxChar', function() {
      it('should return the character that occurs most frequently', function() {
        expect(solution.maxChar3('a  b  ')).toEqual(4)
      })
    })
})
