'use strict'

const solution = require('./solution')
let str = 'hello world'

describe('Solution Module', function() {
  describe('#reverseString', function() {
    it('should return a reversed string', function() {
      expect(solution.reverseString(str)).toEqual('dlrow olleh')
    })
  })
})
