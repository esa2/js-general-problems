'use strict'

const solution = module.exports = {}

solution.reverseString = (str) => {
  return str.split('').reverse().join('')
}

solution.reverseString2 = str => {
  let reverse = ''

  for (let i = 0; i < str.length + 1; i++) {
    reverse += str.charAt(str.length - i)
  }
  return reverse
}

solution.reverseString3 = str => {
  let reverse = ''

  for (let temp of str) {
    reverse = temp + reverse
  }
  return reverse
}

solution.reverseString4 = str => {
  return str.split('').reduce((reverse, char) => char + reverse, '')
}
