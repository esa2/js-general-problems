'use strict'

const solution = module.exports = {}

solution.palindrome = (str) => {
  return str.split('').reverse().join('') === str
}
