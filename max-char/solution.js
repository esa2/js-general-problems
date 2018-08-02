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

solution.maxChar2 = str => {
  const charObj = {}
  let charCount = 0
  let charKey = ''

  for (let char of str) {
    charObj[char] ? charObj[char]++ : charObj[char] = 1
  }

  for (let char in charObj) {
    if (charObj[char] > charCount) {
      charCount = charObj[char]
      charKey = char
    }
  }
  return charCount
}

// The codewars way:
solution.maxChar3 = b => {
  let x = {}, y = 0, z = ''
  for (let a of b) x[a] ? x[a]++ : x[a] = 1
  for (let c in x) {if (x[c] > y) {y = x[c]; z = c}}
  return y
}
