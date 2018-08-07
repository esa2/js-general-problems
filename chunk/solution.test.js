'use strict'

const solution = require('./solution')

describe('#chunk', function() {
  it('should return', function() {
    expect(solution.chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]])
  })
  it('should return', function() {
    expect(solution.chunk2([1, 2, 3, 4, 2])).toEqual([[1, 2], [3, 4]])
  })
})
