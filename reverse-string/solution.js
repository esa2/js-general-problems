'use strict'

const solution = module.exports = {}

solution.reverseString = (str) => {
  return str.split('').reverse().join('')
}
