'use strict'

const solution = module.exports = {}

solution.palindrome = str => {
  return str.split('').reverse().join('') === str
}

solution.palindrome2 = str => str.split('').reverse().join('') === str

solution.palindrome3 = str => {
  return str.split('').every((ele, i) => {
    return ele === str[str.length - i - 1]
  })
}

solution.palindrome4 = str => str.split('').every((ele, i) => ele === str[str.length - i - 1])
