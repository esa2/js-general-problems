'use strict'

const solution = module.exports = {}

solution.maxChar = str => {
  const charObj = {}
  let charCount = 0
  let charKey = ''

  for (let char of str) {
    if (charObj[char]) {
      charObj[char]++
    } else {
      charObj[char] = 1
    }
  }

  for (let char in charObj) {
    if (charObj[char] > charCount) {
      charCount = charObj[char]
      charKey = char
    }
  }
  return charCount
}
